import { sign } from "jsonwebtoken";

class GenerateTokenProvider {
  async execute(userId: string) {
    const token = sign({}, process.env.TOKEN_HEADER, {
      subject: userId,
      expiresIn: "15 minutes",
    });

    return token;
  }
}

export { GenerateTokenProvider };
