import jwt_decode from "jwt-decode";
import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  // try {
  // const token = req.header("Authorization");
  const token = getToken(req);
  console.log("token= ", token);
  if (!token) return res.status(403).send("Access Denied");
  // token = req.headers.authorization.split(" ")[1];
  // if (token.startsWith("Bearer ")) {
  //   console.log("in bearer");
  //   token = token.slice(7, token.length).trimLeft();
  // }
  // console.log("tokenTrimmed= ", token);

  const verified = jwt.verify(token, process.env.JWT_SECRET);
  console.log("token verified= ", verified);
  req.user = verified;
  // check role
  // let toke = jwt_decode(token);
  // if (req.path.includes("admin") && toke && !toke.isAdmin)
  //   return res.status(403).send("Access Denied");
  // if (req.path.includes("student") && toke && toke.isAdmin)
  //   return res.status(403).send("Access Denied");

  next();
  // } catch (error) {
  //   res.status(500).json({ error: error.message });
  // }
};

function getToken(req) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
}
