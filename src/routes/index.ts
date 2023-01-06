import { Router } from "express";
import NoteRoute from "./NoteRoute.js";

const routes = Router();

routes.use("/notes", NoteRoute);

export default routes;
