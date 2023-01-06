import { Request, Response } from "express";
import generateId from "../fns/generateId.js";
import NoteConstruct from "../models/Note.js";

async function createNote(req: Request, res: Response) {
  const id = await generateId(NoteConstruct);
  const { title, content, author } = req.body;

  if (title && content && author) {
    const createdAt = +new Date();
    const newNote = new NoteConstruct({ id, title, content, createdAt, author });
    return res.send(await newNote.save());
  }
  return res.status(501).send({ message: "Some keys is missing" });
}

export default { createNote };
