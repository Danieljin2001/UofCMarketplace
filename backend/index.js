import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
const express = require("express");
import { adminRouter } from "./routes/admin";
import mongoose from "mongoose";
import { studentRouter } from "./routes/student";

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

  // two main routers, one only for admins and other for students
  app.use("/api/admin", adminRouter);
  app.use("/api/student", studentRouter);

  // start express server on port in env file
  // connect to database first
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to DB");
      const port = process.env.PORT;
      app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

server().catch((err) => {
  console.error("Error Starting server", err);
});
