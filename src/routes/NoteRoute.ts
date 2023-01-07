import { Router } from "express";
import NoteController from "../controllers/NoteController.js";

const router = Router();

router.post("/create", NoteController.create);
router.delete("/remove/:id", NoteController.remove);

export default router;
