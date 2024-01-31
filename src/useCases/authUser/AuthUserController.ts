import { Request, Response } from "express";
import { AuthUserUseCase } from "./AuthUserUseCase";

class AuthUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    const authenticateUser = new AuthUserUseCase();
    const token = await authenticateUser.execute({
      email,
      password,
    });
    return response.json(token);
  }
}

export { AuthUserController };
