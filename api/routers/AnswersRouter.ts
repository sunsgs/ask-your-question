import { Router } from "express";
import AnswersController from "../controllers/AnswersController";
const router = Router();
const answersController = new AnswersController();

router.get("/", answersController.get);
router.post("/", answersController.post);

export default router;
