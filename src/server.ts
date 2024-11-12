import express from "express";
import { setupMongo } from "./database";
import { routes } from "./routes/routes";

const server = express();

setupMongo().then(() => {
  server.use(express.json());
  server.use(routes);

  server.listen(3333, () => console.log("Server is running 🚀"));
});
