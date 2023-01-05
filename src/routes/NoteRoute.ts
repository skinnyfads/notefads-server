import { Router } from "express";
import NoteController from "../controllers/NoteController.js";

const router = Router();

router.post("/create", NoteController.createNote);

export default router;
