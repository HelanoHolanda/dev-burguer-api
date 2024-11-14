import { Router } from "express";
import { CreateUserController } from "../controller/createUserController";
import { UserRepository } from "../repository/interfaces/repositories/user-Repository";
import { CreateUserUseCase } from "../services/user/createUserUseCase";
import { Request, Response } from "express";

export const routes = Router();

// router user
const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

routes.post("/users", (req: Request, res: Response) =>
  createUserController.handle(req, res)
);
//routes.post("/users", createUserController.handle.bind(createUserController));
