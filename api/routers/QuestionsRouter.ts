import { Router } from "express";
import QuestionsController from "../controllers/QuestionsController";

const router = Router();
const questionsController = new QuestionsController();

router.get("/", questionsController.get);
router.post("/", questionsController.post);

export default router;
