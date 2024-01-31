import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;
  if (!authToken) {
    return response.status(401).json({
      status: "error",
      error: "Unauthorized",
    });
  }

  const [, token] = authToken.split(" ");

  try {
    verify(token, process.env.TOKEN_HEADER);
    return next();
  } catch (err) {
    return response.status(401).json({
      status: "error",
      error: "Invalid Token",
    });
  }
}
