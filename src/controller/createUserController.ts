import { Request, Response } from "express";
import { CreateUserUseCase } from "../services/user/createUserUseCase";
import { z } from "zod";
import { UserAlreadyExistsError } from "../error/user-alredy-exists-error";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<any> {
    const zodSchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string().min(6),
      admin: z.boolean(),
    });

    const { name, email, password, admin } = zodSchema.parse(req.body);

    try {
      const newUser = await this.createUserUseCase.execute({
        name,
        email,
        password,
        admin,
      });
      return res.status(201).json(newUser);
    } catch (error) {
      if (error instanceof UserAlreadyExistsError) {
        res.status(409).send({ message: error.message });
      }
      return res.status(500).json(error);
    }
  }
}
