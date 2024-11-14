import { UserMongo } from "../../../models/users";
import { IUserRepository, User } from "../IuserRepository";

export class UserRepository implements IUserRepository {
  create(data: User): Promise<User> {
    const newUser = new UserMongo(data);
    return newUser.save();
  }
}
