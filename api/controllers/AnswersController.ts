import { Response, Request } from "express";
import pool from "../dbconfig/dbconnector";
class QuestionsController {
  async get(req: Request, res: Response) {
    try {
      const question_id = req.query.question_id;

      if (!question_id) {
        return res.boom.badRequest();
      }

      const client = await pool.connect();

      const sql = `SELECT * FROM answers WHERE question_id = '${question_id}'`;
      const { rows } = await client.query(sql);
      const answers = rows;

      client.release();

      res.json(answers);
    } catch (error) {
      res.boom.badRequest(error);
    }
  }

  async post(req: Request, res: Response) {
    try {
      const username = req.body.username;
      const question_id = req.body.question_id;
      const answer = req.body.answer;
      if (!username && !question_id && !answer) {
        return res.boom.badRequest();
      }
      const client = await pool.connect();
      const sql = `INSERT INTO answers(username,question_id,answer) VALUES ('${username}','${question_id}','${answer}')`;
      await client.query(sql);

      client.release();

      res.json({ username: username });
    } catch (error) {
      res.boom.badRequest(error);
    }
  }
}

export default QuestionsController;
