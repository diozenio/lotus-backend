import { client } from "../../prisma/client";

class DisconnectUserUseCase {
  async execute({ userId }) {
    const deleteRefreshToken = await client.refreshToken.deleteMany({
      where: {
        userId,
      },
    });

    if (!deleteRefreshToken) {
      throw new Error("Refresh token not found");
    }

    return Boolean(deleteRefreshToken.count);
  }
}

export { DisconnectUserUseCase };
