import mongoose, { Schema } from "mongoose";

type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
  admin: boolean;
};

const userSchema = new Schema<UserType>(
  {
    // Criação do schema
    id: String,
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: { type: Boolean },
  },
  {
    timestamps: true, // Passa como uma opção do esquema
  }
);

export const UserMongo = mongoose.model("User", userSchema);
