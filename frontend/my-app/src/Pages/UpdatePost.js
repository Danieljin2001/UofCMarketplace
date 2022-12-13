import Button from "react-bootstrap/Button";
import React, { useEffect, useRef, useState } from "react";
import "./PostPage.css";
import NavBar from "../components/NavBar";
import { updatePost } from "../api";
import ErrorAlert from "../components/ErrorAlert";
import SuccessAlert from "../components/SuccessAlert";
import { useLocation } from "react-router";
import Loading from "../components/Loading";

const options = ["Textbook", "Clothing", "Electronics", "Furniture"];
function UpdatePost() {
  const [loading, setLoading] = useState(true);
  const { state } = useLocation();
  console.log("props in updatepost= ", state);
  const [selected, setSelected] = useState(options[0]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [post, setPost] = useState(null);
  const values = useRef({
    id: "",
    title: "",
    desc: "",
    adType: "",
    price: "",
    contact: "",
    productType: "",
  });
  function loadValues() {
    values.current.id = post._id;
    values.current.title = post.title;
    values.current.desc = post.desc;
    values.current.adType = post.adType;
    values.current.price = post.price;
    values.current.contact = post.contactInfo;
    values.current.productType = post.productType;
  }
  useEffect(() => {
    if (post === null) return;
    loadValues();
    if (post !== null) {
      setLoading(false);
      console.log("values= ", values);
    }
  }, [post]);

  useEffect(() => {
    setPost(state);
  }, []);
  const [form, setForm] = useState({
    title: "",
    description: "",
    adType: "",
    price: "",
    contactInfo: "",
    password: "",
  });
  const canSubmit = useRef(false);
  const handleChange = (e) => {
    if (values.current.productType !== e.target.value) {
      setForm({
        ...form,
        [e.target.id]: e.target.value,
      });
    } else {
      setForm({
        ...form,
      });
    }
    console.log(form);
  };

  const checkForEmptyPassword = () => {
    if (form.password === "") {
      canSubmit.current = false;
      setError("Password Cannot Be Empty");
    } else {
      canSubmit.current = true;
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    checkForEmptyPassword();
    if (canSubmit.current) {
      setError("");
      setSuccess("");
      const dat = {
        ...form,
        productType: selected,
      };
      const data = {
        ...dat,
        postId: values.current.id,
      };
      console.log("data= ", data);
      const fieldToChange = {
        title: false,
        description: false,
        adType: false,
        price: false,
        contactInfo: false,
        productType: false,
      };
      if (data.title.length > 0) {
        fieldToChange.title = true;
      }
      if (data.description.length > 0) {
        fieldToChange.description = true;
      }
      if (data.adType.length > 0) {
        fieldToChange.adType = true;
      }
      if (data.price.length > 0) {
        fieldToChange.price = true;
      }
      if (data.contactInfo.length > 0) {
        fieldToChange.contactInfo = true;
      }
      if (
        data.productType.toLowerCase() !==
        values.current.productType.toLowerCase()
      ) {
        fieldToChange.productType = true;
      }
      console.log("fieldstochange= ", fieldToChange);
      const payload = {
        data: data,
        fieldToChange: fieldToChange,
      };
      console.log("updatepost payload= ", payload);
      const response = await updatePost(payload);
      if (response.error) {
        setError(response.error);
        console.log("errors= ", response.error);
      } else {
        setSuccess("Post Saved");
      }
    } else {
      checkForEmptyPassword();
    }
  }
  return (
    <>
      <NavBar />
      {error ? <ErrorAlert props={error} /> : null}
      {success ? <SuccessAlert props={success} /> : null}
      <div className="text-center">
        <h2 className="text-white">Update Post</h2>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="d-flex justify-content-center align-items-center flex-column">
            {/* Ad Title */}
            <div className="title-group w-75 mb-5">
              <label className="text-white">
                Changing Ad Title From&#x3a;
                <br /> <i className="text-warning"> {values.current.title}</i>
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={form.title}
                onChange={handleChange}
                required
                placeholder={values.current.title}
              />
            </div>
            {/* Product Description */}
            <div className="title-group w-75 mb-3">
              <label className="text-white">
                Changing Product Description From&#x3a;
                <br />
                <i className="text-warning"> {values.current.desc}</i>
              </label>
              <textarea
                className="form-control"
                rows="6"
                id="description"
                value={form.description}
                onChange={handleChange}
                placeholder={values.current.desc}
              />
            </div>
            {/* Ad Type */}
            <div className="title-group w-75 mb-3">
              <label className="text-white">
                Changing Ad Type From&#x3a;
                <br />
                <i className="text-warning">
                  {" "}
                  {values.current.adType.toUpperCase()}
                </i>
              </label>

              <div className="radio">
                <label className="text-white">
                  <input
                    id="adType"
                    type="radio"
                    value="sell"
                    onChange={handleChange}
                    name="optradio"
                    check={
                      values.current.adType.toLowerCase() === "sell" ? 1 : 0
                    }
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
                    check={
                      values.current.adType.toLowerCase() === "buy" ? 1 : 0
                    }
                  />{" "}
                  I want to find{" "}
                  <span className="text-secondary">
                    - You want to buy an item
                  </span>
                </label>
              </div>
            </div>
            {/* Product Type */}
            <div className="title-group w-75 mb-3">
              <label className="text-white">
                {" "}
                Changing Product Type From&#x3a;
                <br />
                <i className="text-warning">
                  {" "}
                  {values.current.productType.toUpperCase()}
                </i>
              </label>
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
              </div>
            </div>
            {/* Price */}
            <div className="title-group w-75 mb-3">
              <label className="text-white">
                Changing Price From&#x3a;
                <br />
                <i className="text-warning">&#x24; {values.current.price}</i>
              </label>
              <div className="d-flex align-items-center text-white">
                <a>&#x24;</a>
                <input
                  type="number"
                  className="form-control priceinput"
                  id="price"
                  min="0"
                  value={form.price}
                  onChange={handleChange}
                  placeholder={values.current.price}
                />
              </div>
            </div>
            {/* Phone number */}
            <div className="title-group w-75 mb-5">
              <label className="text-white">
                Changing Contact Info From&#x3a;
                <br />
                <i className="text-warning"> {values.current.contact}</i>
              </label>
              <input
                type="tel"
                className="form-control phoneinput"
                id="contactInfo"
                min="0"
                value={form.contactInfo}
                onChange={handleChange}
                placeholder={values.current.contact}
              />
            </div>
            <div className="title-group w-75 mb-3 password">
              <label className="text-white password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="text-center mb-3">
            <Button onClick={handleSubmit} variant="warning">
              Update Post
            </Button>
          </div>
        </>
      )}
    </>
  );
}

export default UpdatePost;
