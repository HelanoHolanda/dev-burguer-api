import express from "express";

const server = express();

server.listen(3333, () => {
  console.log("server is running at port 3333 🚀");
});
