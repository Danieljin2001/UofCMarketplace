import { getStudent } from "./student";

export const createNewPost = async (req, res) => {
  try {
    const res = getStudent(req, res, req.user.id);
    if (!res) return res.status(403).json({ error: "Access Denied" });
    const { adType, price, description, productType, contact } = req.body;
    console.log("req user= ", req.user);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
