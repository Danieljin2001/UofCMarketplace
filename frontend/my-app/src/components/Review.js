import Card from "react-bootstrap/Card";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import ProductPage from "../Pages/ProductPage";
import { FaThumbsUp } from "react-icons/fa";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { isAuth } from "../routeProtection";
import {
  checkIfReviewLiked,
  getMyReview,
  likeReview,
  removeUserLike,
} from "../api";
import { useRef, useEffect } from "react";

function Review({ props }) {
  const auth = isAuth();
  console.log("props= ", props);
  const didLike = useRef(false);
  const myReview = useRef(null);
  async function handleRemoveLike() {
    const result = await removeUserLike({ reviewId: props._id });

    didLike.current = false;
    await getReview();
  }
  async function handleLike() {
    const result = await likeReview({ reviewId: props._id });

    didLike.current = true;
    await getReview();
  }
  async function getReview() {
    const result = await getMyReview({ id: props._id });
    myReview.current = result;
  }
  async function checkIfLiked() {
    const result = await checkIfReviewLiked({ reviewId: props._id });
    didLike.current = result;
  }
  useEffect(() => {
    checkIfLiked();
  }, []);

  return (
    <>
      <Card
        style={{
          width: "80%",
          margin: "auto",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
          backgroundColor: "PaleGoldenRod",
        }}
      >
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            textAlign: "center",
            fontFamily: "monospace",
            backgroundColor: "PaleGoldenRod",
          }}
        >
          <Card.Title
            style={{
              textAlign: "center",
              backgroundColor: "PaleGoldenRod",
              color: "black",
            }}
          >
            Reviewed By:{props.reviewerId}
            <br />
            Rating: {props.rating}
          </Card.Title>
          <Card.Text
            style={{ backgroundColor: "PaleGoldenRod", color: "black" }}
          >
            {props.content}
          </Card.Text>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "PaleGoldenRod",
            }}
          >
            <Card.Text
              style={{
                fontWeight: "bold",
                fontSize: "larger",
                backgroundColor: "PaleGoldenRod",
              }}
            >
              {didLike.current ? (
                <button onClick={handleRemoveLike}>Remove Like</button>
              ) : null}
              {auth && !didLike.current ? (
                <button onClick={handleLike}>
                  <BsHandThumbsUp />
                </button>
              ) : null}
              <br />

              <span>
                {myReview.current
                  ? myReview.current.likes.length
                  : props.likes.length}
              </span>
            </Card.Text>
            <Card.Text
              style={{
                fontWeight: "bold",
                fontSize: "larger",
                backgroundColor: "PaleGoldenRod",
              }}
            >
              {auth ? <BsHandThumbsDown /> : null}
              <br />
              <span>
                {myReview.current
                  ? myReview.current.dislikes.length
                  : props.dislikes.length}
              </span>
            </Card.Text>
            <Card.Text
              style={{
                backgroundColor: "PaleGoldenRod",
                color: "black",
                fontSize: "1.5rem",
              }}
            >
              {props.createdAt}
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Review;
