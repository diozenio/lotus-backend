import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { router } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.json({
    status: "error",
    error: err.message,
  });
});

app.listen(3000, () =>
  console.log("Server started on: http://localhost:3000/api")
);
