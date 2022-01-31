import { Response, Request } from "express";
import pool from "../dbconfig/dbconnector";
class QuestionsController {
  async get(_req: Request, res: Response) {
    try {
      const client = await pool.connect();

      const sql = "SELECT * FROM questions";
      const { rows } = await client.query(sql);
      const questions = rows;

      client.release();

      res.json(questions);
    } catch (error) {
      res.boom.badRequest(error);
    }
  }

  async post(req: Request, res: Response) {
    try {
      const username = req.body.username;
      const question = req.body.question;
      if (!username && !question) {
        return res.boom.badRequest();
      }
      const client = await pool.connect();
      const sql = `INSERT INTO questions(username,question) VALUES ('${username}','${question}')`;
      await client.query(sql);

      client.release();

      res.json({ username: username });
    } catch (error) {
      res.boom.badRequest(error);
    }
  }
}

export default QuestionsController;
