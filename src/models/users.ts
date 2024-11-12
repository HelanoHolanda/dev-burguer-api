import mongoose, { Schema, connection, model } from "mongoose";

type UserType = {
  //Criacao do type
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  timestamps: boolean;
};

const userSchema = new Schema<UserType>({
  // Criacao do schema
  id: String,
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  timestamps: true,
});

export const User = mongoose.model("User", userSchema);
