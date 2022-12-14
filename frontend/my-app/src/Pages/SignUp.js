import React, { useRef, useState } from "react";
import { signStudentUp } from "../api";
import ErrorAlert from "../components/ErrorAlert";
import NavBar from "../components/NavBar";
import SuccessAlert from "../components/SuccessAlert";

function SignUp() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };
  async function handleSubmit(e) {
    setError("");
    setSuccess("");
    e.preventDefault();
    const data = {
      ...form,
    };
    console.log("payload= ", data);
    const response = await signStudentUp(data);
    if (response.error) {
      setError(response.error);
    } else {
      setSuccess("Signup Successful");
    }
  }
  return (
    <>
      <NavBar />
      {error ? <ErrorAlert props={error} /> : null}
      {success ? <SuccessAlert props={success} /> : null}
      <div
        className="container mt-5 pt-5 align-items-center"
        style={{ height: "auto", width:"20rem" }}
      >
        <form className="">
          <h3 className="text-center">Sign Up</h3>
          <div className="form-group">
            <label for="email">Email address</label>
            {/* email input */}
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              required
            ></input>
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            {/* password input */}
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            ></input>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="container btn btn-primary mt-3"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
