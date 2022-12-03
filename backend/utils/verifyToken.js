import jwt_decode from "jwt-decode";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) return res.status(403).send("Access Denied");
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    // check role
    let toke = jwt_decode(token);
    if (req.path.includes("admin") && toke && !toke.isAdmin)
      return res.status(403).send("Access Denied");
    if (req.path.includes("student") && toke && toke.isAdmin)
      return res.status(403).send("Access Denied");

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
