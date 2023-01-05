import express from "express";
import "dotenv/config";
import "./config/database.js";

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`App listening on ${port}`));
