import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";

class GetUserController {
  async handle(request: Request, response: Response) {
    const { userId } = request.body;
    const getUserUseCase = new GetUserUseCase();
    const user = await getUserUseCase.execute(userId);
    return response.json(user);
  }
}

export { GetUserController };
