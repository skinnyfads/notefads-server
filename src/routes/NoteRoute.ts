import { Router } from "express";
import NoteController from "../controllers/NoteController.js";
import auth from "../middlewares/auth.js";

const router = Router();

router.post("/create", NoteController.create);
router.delete("/remove/:id", auth, NoteController.remove);

export default router;
