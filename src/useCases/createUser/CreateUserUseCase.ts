import { hash } from "bcryptjs";
import { client } from "../../prisma/client";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserUseCase {
  async execute({ name, email, password }: IUserRequest) {
    console.log(name, email, password);

    if (email === undefined || password === undefined || name === undefined) {
      throw new Error("Invalid data");
    }

    const userAlreadyExists = await client.user.findFirst({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = await client.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
    });

    return { id: user.id, name: user.name, email: user.email, password };
  }
}

export { CreateUserUseCase };
