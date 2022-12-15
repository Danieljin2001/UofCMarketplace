import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import NavBar from "../components/NavBar";
import ConfirmAccountDelete from "../components/ConfirmAccountDelete";
import { getStudent } from "../api";

const Account = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [student, setStudent] = useState(null);
  const values = useRef({
    id: "",
    email: "",
  });
  async function getData() {
    const result = await getStudent();
    console.log("result== ", result);
    setStudent(result);
    values.current.id = result._id;
    values.current.email = result.email;
  }
  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();
  const logoutUser = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <NavBar />
      <div
        className="container align-items-center"
        style={{ marginTop: "10%" }}
      >
        <div className=" text-center">
          <Button
            href="/myproducts"
            variant="light"
            className="my-2 py-3 "
            style={{
              borderBottom: "1px solid black",
              width: "17rem",
              color: "black",
            }}
          >
            My Posts
          </Button>
        </div>
        <div className=" text-center">
          <Button
            href="/updatepass"
            variant="light"
            className="my-2 py-3 "
            style={{
              borderBottom: "1px solid black",
              width: "17rem",
              color: "black",
            }}
          >
            Update Password
          </Button>
        </div>
        <div className="text-center">
          <ConfirmAccountDelete
            id={values.current.id}
            email={values.current.email}
            setError={setError}
            setSuccess={setSuccess}
          />
        </div>
        <div className=" text-center">
          {/* logout button */}
          <Button
            onClick={logoutUser}
            className="my-2 py-3"
            variant="dark"
            style={{ borderBottom: "1px solid black", width: "17rem" }}
          >
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Account;
