import "dotenv/config";
import morgan from "morgan";
const express = require("express");
import { adminRouter } from "./routes/admin";

const server = async () => {
  // connect to database first
  // create express server
  const app = express();
  // logs http requests in the console
  app.use(morgan("dev"));
  // test route @ http://localhost:3001
  app.get("", (req, res) => {
    res.send("Hello Wrld");
  });

  // two main routers, one only for admins and other for students
  app.use("/api/admin", adminRouter);
  // app.use("/api/student", studentRouter);

  // start express server on port in env file
  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
};

server().catch((err) => {
  console.error("Error Starting server", err);
});
