import { Request, Response } from "express";
import { AuthUserUseCase } from "../services/user/authUserUseCase";
import { Error } from "mongoose";

export class AuthUserController {
  constructor(private authUserUseCase: AuthUserUseCase) {}

  async handle(req: Request, res: Response): Promise<any> {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("email/password incorrect");
    }

    const user = await this.authUserUseCase.execute(email, password);

    return res.status(200).json(user);
  }
}
