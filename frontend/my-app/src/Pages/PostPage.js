import Button from "react-bootstrap/Button";
import React, { useRef, useState } from "react";
import "./PostPage.css";
import NavBar from "../components/NavBar";
import { createNewStudentPost } from "../api";
import ErrorAlert from "../components/ErrorAlert";
import SuccessAlert from "../components/SuccessAlert";

const options = ["Textbook", "Clothing", "Electronics", "Furniture"];
function PostPage() {
  const [selected, setSelected] = useState(options[0]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    adType: "",
    price: "",
    contact: "",
  });
  const canSubmit = useRef(false);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const checkForEmptyFields = () => {
    if (form.title === "") {
      canSubmit.current = false;
      setError("Post Title Cannot Be Empty");
    } else if (form.description === "") {
      canSubmit.current = false;

      setError("Post Description Cannot Be Empty");
    } else if (form.adType === "") {
      canSubmit.current = false;

      setError("Post Ad Type Cannot Be Empty");
    } else if (form.price === "") {
      canSubmit.current = false;

      setError("Post Price Cannot Be Empty");
    } else {
      canSubmit.current = true;
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log("payload= ", form);
    // console.log("options= ", selected);
    checkForEmptyFields();
    if (canSubmit.current) {
      const data = {
        ...form,
        productType: selected,
      };
      console.log("payload= ", data);
      const response = await createNewStudentPost(data);
      if (response.error) {
        setError(response.error);
        console.log("errors= ", response.error);
      } else {
        setSuccess("Post Saved");
      }
    } else {
      canSubmit.current = false;

      checkForEmptyFields();
    }
  }
  return (
    <>
      <NavBar />
      {error ? <ErrorAlert props={error} /> : null}
      {success ? <SuccessAlert props={success} /> : null}
      <div className="text-center">
        <h2 className="text-white">Post Ad</h2>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column">
        {/* Ad Title */}
        <div className="title-group w-75 mb-5">
          <label className="text-white">Ad Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        {/* Product Description */}
        <div className="title-group w-75 mb-3">
          <label className="text-white">Product Description:</label>
          <textarea
            className="form-control"
            rows="6"
            id="description"
            value={form.description}
            onChange={handleChange}
          />
        </div>
        {/* Ad Type */}
        <div className="title-group w-75 mb-3">
          <label className="text-white">Ad Type:</label>
          <div className="radio">
            <label className="text-white">
              <input
                id="adType"
                type="radio"
                value="sell"
                onChange={handleChange}
                name="optradio"
              />{" "}
              I'm offering{" "}
              <span className="text-secondary">
                - You are offering an item for sale
              </span>
            </label>
          </div>
          <div className="radio">
            <label className="text-white">
              <input
                id="adType"
                type="radio"
                value="buy"
                onChange={handleChange}
                name="optradio"
              />{" "}
              I want to find{" "}
              <span className="text-secondary">- You want to buy an item</span>
            </label>
          </div>
        </div>
        {/* Product Type */}
        <div className="title-group w-75 mb-3">
          <label className="text-white">Product Type:</label>
          <div className="d-flex align-items-center text-white">
            <select
              className="form-select"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              {options.map((value) => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>

            {/* <select className="form-select" onChange={handleChange}>
              <option value={form.productType} className="text-white">
                Textbook
              </option>
              <option value={form.productType} className="text-white">
                Clothing
              </option>
              <option value={form.productType} className="text-white">
                Electronics
              </option>
              <option value={form.productType} className="text-white">
                Furniture
              </option>
            </select> */}
          </div>
        </div>
        {/* Price */}
        <div className="title-group w-75 mb-3">
          <label className="text-white">Price:</label>
          <div className="d-flex align-items-center text-white">
            <a>$</a>
            <input
              type="number"
              className="form-control priceinput"
              id="price"
              min="0"
              value={form.price}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Phone number */}
        <div className="title-group w-75 mb-5">
          <label className="text-white">Phone number (optional):</label>
          <input
            type="tel"
            className="form-control phoneinput"
            id="contact"
            min="0"
            value={form.contact}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="text-center mb-3">
        <Button onClick={handleSubmit} variant="warning">
          Post Your Ad
        </Button>
      </div>
    </>
  );
}

export default PostPage;
