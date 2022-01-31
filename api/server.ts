import express from "express";
import bodyParser from "body-parser";
import pool from "./dbconfig/dbconnector";
import boom from "express-boom";
import cors from "cors";
import questionsRouter from "./routers/QuestionsRouter";
import answersRouter from "./routers/AnswersRouter";
class Server {
  private app;

  constructor() {
    this.app = express();
    this.app.use(boom());
    this.app.use(cors());
    this.config();
    this.routerConfig();
    this.dbConnect();
  }

  private config() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json({ limit: "1mb" })); // 100kb default
  }

  private dbConnect() {
    pool.connect(function (err, client, done) {
      if (err) throw new Error(err);
      console.log("Connected");
    });
  }

  private routerConfig() {
    this.app.use("/questions", questionsRouter);
    this.app.use("/answers", answersRouter);
  }

  public start = (port: number) => {
    return new Promise((resolve, reject) => {
      this.app
        .listen(port, () => {
          resolve(port);
        })
        .on("error", (err: Object) => reject(err));
    });
  };
}

export default Server;
