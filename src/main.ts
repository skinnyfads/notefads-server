import express from "express";
import "dotenv/config";
import "./config/database.js";
import routes from "./routes/index.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`App listening on ${port}`));
