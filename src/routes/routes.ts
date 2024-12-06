import { Router } from "express";
import { CreateUserController } from "../controller/createUserController";
import { UserRepository } from "../repository/interfaces/repositories/user-Repository";
import { CreateUserUseCase } from "../services/user/createUserUseCase";
import { Request, Response } from "express";
import { AuthUserUseCase } from "../services/user/authUserUseCase";
import { AuthUserController } from "../controller/authUserController";

export const routes = Router();

// router user
const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);
const authUserUseCase = new AuthUserUseCase();
const authUserController = new AuthUserController(authUserUseCase);

routes.post("/users", (req: Request, res: Response) =>
  createUserController.handle(req, res)
);
routes.post("/session", (req: Request, res: Response) =>
  authUserController.handle(req, res)
);
//routes.post("/users", createUserController.handle.bind(createUserController));
