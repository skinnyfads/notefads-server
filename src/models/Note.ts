import mongoose from "mongoose";

const { model, Schema } = mongoose;

const noteSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Number, required: true },
  author: { type: String, required: true },
});
const NoteConstruct = model("note", noteSchema);

export default NoteConstruct;
