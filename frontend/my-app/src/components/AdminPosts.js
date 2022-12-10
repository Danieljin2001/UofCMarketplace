import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ErrorAlert from "../components/ErrorAlert";
import SuccessAlert from "../components/SuccessAlert";
import ConfirmAdminPostDelete from "./ConfirmAdminPostDelete";
import ConfirmDelete from "./ConfirmDelete";

function AdminPosts({ props }) {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  return (
    <>
      {error ? <ErrorAlert props={error} /> : null}
      {success ? <SuccessAlert props={success} /> : null}
      <Card
        style={{
          marginTop: "0.5%",
          marginRight: "8%",
          marginLeft: "8%",
          backgroundColor: "PaleGoldenRod",
        }}
      >
        <Card.Body
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "PaleGoldenRod",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "1rem",
              width: "80%",
              justifyContent: "space-around",
              backgroundColor: "PaleGoldenRod",
            }}
          >
            <Card.Text
              style={{ backgroundColor: "PaleGoldenRod", color: "black" }}
            >
              {props._id}
            </Card.Text>
            <Card.Text
              style={{ backgroundColor: "PaleGoldenRod", color: "black" }}
            >
              {props.ownerID}
            </Card.Text>
            <Card.Text
              style={{ backgroundColor: "PaleGoldenRod", color: "black" }}
            >
              {props.createdAt}
            </Card.Text>
          </div>
          <div
            id="inputGroup"
            style={{
              display: "flex",
              width: "10%",
              justifyContent: "space-around",
              backgroundColor: "PaleGoldenRod",
            }}
          >
            <ConfirmAdminPostDelete
              props={props}
              setError={setError}
              setSuccess={setSuccess}
            />
            {/* <Button variant="danger" style={{ width: "15rem" }}>
              Delete
            </Button> */}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default AdminPosts;
