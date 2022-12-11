import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getAllReviews, getStudentByID } from "../api";
import NavBar from "../components/NavBar";
import Review from "../components/Review";

function Reviews() {
  const [email, setEmail] = useState("");
  const [reviews, setReviews] = useState(null);
  const location = useLocation();
  const { state } = location;
  console.log("reviews props= ", state);

  async function getEmail() {
    const result = await getStudentByID({ id: state.props.ownerID });

    console.log("result== ", result);
    setEmail(result.email);
  }

  async function getMyReviews() {
    const data = {
      email: email,
    };
    const result = await getAllReviews(data);
    setReviews(result);
  }

  useEffect(() => {
    getEmail();
  }, []);

  useEffect(() => {
    getMyReviews();
  }, [email]);

  return (
    <div>
      <NavBar />
      <h2 className="text-center">User Reviews For {email}</h2>
      {reviews?.map((post) => (
        <Review key={post._id} props={post} />
      ))}
    </div>
  );
}

export default Reviews;
