import { Error } from "mongoose";
import { UserMongo } from "../../models/users";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export class AuthUserUseCase {
  async execute(email: string, password: string) {
    const userExist = await UserMongo.findOne({
      email: email,
    });

    if (!userExist) {
      throw new Error("email/password incorrect");
    }

    const passwordVerify = await compare(password, userExist.password);

    if (!passwordVerify) {
      throw new Error("email/password incorrect");
    }

    const token = sign(
      {
        email: email,
        password: password,
      },
      process.env.KEY_DEV_BURGUER,
      {
        expiresIn: "30d",
      }
    );

    return {
      id: userExist._id,
      email: userExist.email,
      name: userExist.name,
      token: token,
    };
  }
}
