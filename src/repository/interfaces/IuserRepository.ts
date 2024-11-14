export interface User {
  name: string;
  email: string;
  password: string;
  admin: boolean;
}

export interface IUserRepository {
  create(data: User): Promise<User>;
}
