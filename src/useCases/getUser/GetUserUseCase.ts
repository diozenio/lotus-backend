import { client } from "../../prisma/client";

class GetUserUseCase {
  async execute(userId: string) {
    const user = await client.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return user;
  }
}

export { GetUserUseCase };
