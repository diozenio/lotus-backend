import { Request, Response } from "express";
import { DisconnectUserUseCase } from "./DisconnectUserUseCase";

class DisconnectUserController {
  async handle(request: Request, response: Response) {
    const { userId } = request.body;
    const disconnectUser = new DisconnectUserUseCase();

    const deleted = await disconnectUser.execute({
      userId,
    });

    return response.send(deleted);
  }
}

export { DisconnectUserController };
