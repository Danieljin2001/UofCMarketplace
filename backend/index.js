import "dotenv/config";

const express = require("express");

const server = async () => {
  const app = express();

  app.get("", (req, res) => {
    res.send("Hello Wrld");
  });

  const port = process.env.PORT;

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
};

server().catch((err) => {
  console.error("Error Starting server", err);
});
