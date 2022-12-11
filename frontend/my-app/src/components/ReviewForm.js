import { useEffect, useRef, useState } from "react";
import ErrorAlert from "../components/ErrorAlert";
import NavBar from "./NavBar";
import SuccessAlert from "../components/SuccessAlert";
import { useLocation } from "react-router";
import { getStudentByID, submitReview } from "../api";
function ReviewForm({ props }) {
  const location = useLocation();
  const { state } = location;
  console.log("product details props= ", state.props);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [form, setForm] = useState({
    content: "",
    rating: -1,
  });
  const canSubmit = useRef(false);
  const [email, setEmail] = useState("");

  async function getEmail() {
    const result = await getStudentByID({ id: state.props.ownerID });

    console.log("result== ", result);
    setEmail(result.email);
  }

  useEffect(() => {
    getEmail();
  }, []);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  }

  const checkForEmptyFields = () => {
    if (form.content === "") {
      setError("Content Cannot Be Empty");
    } else if (form.rating === -1) {
      setError("Rating Cannot Be Empty");
    } else {
      canSubmit.current = true;
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSuccess("");
    checkForEmptyFields();
    if (canSubmit.current) {
      const data = {
        ...form,
        id: state.props.ownerID,
      };
      console.log("payload= ", data);
      const response = await submitReview(data);
      if (response.error) {
        setError(response.error);
      } else {
        setSuccess("Review Posted");
      }
    } else {
      checkForEmptyFields();
    }
  }
  return (
    <>
      <NavBar />
      {error ? <ErrorAlert props={error} /> : null}
      {success ? <SuccessAlert props={success} /> : null}
      <div className="d-flex flex column justify-content-center">
        <form onSubmit={handleSubmit}>
          <h3>Leaving Review For {email}</h3>
          <textarea
            id="content"
            type="text"
            placeholder="Your review here..."
            onChange={handleChange}
            value={form.content}
          />

          <div className="my-4">
            <label className="mr-3">Your Rating (x/5):</label>

            <select id="rating" value={form.rating} onChange={handleChange}>
              <option value=""></option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>

          <button className="btn btn-primary mt-3">Submit</button>
        </form>
      </div>
    </>
  );
}
export default ReviewForm;
