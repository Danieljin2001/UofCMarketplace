import jwt_decode from "jwt-decode";
export const getDecodedToken = () => {
  const decoded = jwt_decode(getToken());
  return decoded;
};
export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};
export const isAuth = () => {
  const token = localStorage.getItem("token");
  console.log("status== ", token);

  if (token) {
    return true;
  } else {
    return false;
  }
};

export const isAdmin = () => {
  let result = false;
  try {
    const token = localStorage.getItem("token");
    const status = jwt_decode(token);
    result = status.isAdmin;
  } catch (error) {
    return false;
  }
  return result;
};
