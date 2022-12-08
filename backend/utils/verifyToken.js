import jwt_decode from "jwt-decode";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  var token = null;
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  console.log("token= ", token);
  if (!token) return res.status(403).send("Access Denied");

  const verified = jwt.verify(token, process.env.JWT_SECRET);
  console.log("token verified= ", verified);
  req.user = verified;

  next();
};
