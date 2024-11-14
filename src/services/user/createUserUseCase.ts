import { UserAlreadyExistsError } from "../../error/user-alredy-exists-error";
import { UserMongo } from "../../models/users";
import { User } from "../../repository/interfaces/IuserRepository";
import { UserRepository } from "../../repository/interfaces/repositories/user-Repository";
import { hash } from "bcryptjs";

export interface UserRequest {
  name: string;
  email: string;
  password: string;
  admin: boolean;
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(data: UserRequest): Promise<User> {
    const ifEmailExist = await UserMongo.findOne({
      email: data.email,
    });
    if (ifEmailExist) {
      throw new UserAlreadyExistsError();
    }

    const passwordHash = await hash(data.password, 8);

    return await this.userRepository.create({
      name: data.name,
      email: data.email,
      admin: data.admin,
      password: passwordHash,
    });
  }
}
