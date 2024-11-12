import mongoose from "mongoose";

export async function setupMongo() {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }
    console.log("⏰ Conecting to database");
    await mongoose.connect("mongodb://localhost:27017/devburger", {
      serverSelectionTimeoutMS: 3000,
    });
    console.log("✅ database is conected");
  } catch (error) {
    throw new Error("❌ Database not connected!");
  }
}
