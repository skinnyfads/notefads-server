import { NextFunction, Request, Response } from "express";

const secretKey = process.env.SECRET_KEY;

if (!secretKey) {
  console.log("Please provide SECRET_KEY");
  process.exit();
}
async function auth(req: Request, res: Response, next: NextFunction) {
  const key = req.headers["x-secret-key"];

  if (!key) {
    return res.status(400).send({ message: "A key is required for authentication" });
  }
  if (key === secretKey) {
    next();
  } else {
    return res.status(400).send({ message: "Invalid key" });
  }
}

export default auth;
