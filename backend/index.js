import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
const express = require("express");
import { adminRouter } from "./routes/admin";
import mongoose from "mongoose";
import { studentRouter } from "./routes/student";
import socketEvents from "./SocketEvents";
import socket from "socket.io";
import { msgRouter } from "./routes/message";
import { chatRouter } from "./routes/chat";

const server = async () => {
  // create express server
  const app = express();
  app.use(express.json());
  // logs http requests in the console
  app.use(morgan("dev"));
  // enable cors, origin should url of the frontend
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
  // test route @ http://localhost:3001
  app.get("", (req, res) => {
    res.send("Hello Wrld");
  });

  app.use("/api/admin", adminRouter);
  app.use("/api/student", studentRouter);
  app.use("/api/msg", msgRouter);
  app.use("/api/chat", chatRouter);

  // start express server on port in env file
  // connect to database first
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to DB");
      const port = process.env.PORT;
      const myServer = app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
      });
      socketEvents(
        socket(myServer, {
          cors: { origin: "*" },
        })
      );
    })
    .catch((error) => {
      console.error(error);
    });
};

server().catch((err) => {
  console.error("Error Starting server", err);
});
