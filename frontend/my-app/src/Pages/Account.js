import React from "react";
import Button from "react-bootstrap/Button";
import NavBar from "../components/NavBar";

const Account = () => {
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
              width: "20%",
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
              width: "20%",
              color: "black",
            }}
          >
            Update Password
          </Button>
        </div>
        <div className=" text-center">
          {/* logout button */}
          <Button
            href="/"
            className="my-2 py-3"
            variant="dark"
            style={{ borderBottom: "1px solid black", width: "20%" }}
          >
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Account;
