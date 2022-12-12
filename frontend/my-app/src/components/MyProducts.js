import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ConfirmDelete from "./ConfirmDelete";
import ErrorAlert from "../components/ErrorAlert";
import SuccessAlert from "../components/SuccessAlert";
import {useNavigate} from "react-router-dom";

function MyProducts({ props }) {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  async function update()
  {
      navigate("/updatepost");
  }

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
              width: "60%",
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
              {props.productType?.toUpperCase()}
            </Card.Text>
            <Card.Text
              style={{ backgroundColor: "PaleGoldenRod", color: "black" }}
            >
              {props.title?.toUpperCase()}
            </Card.Text>
          </div>
          <div
            id="inputGroup"
            style={{
              display: "flex",
              width: "30%",
              justifyContent: "space-around",
              backgroundColor: "PaleGoldenRod",
            }}
          >
            <Button variant="success" style={{ width: "10rem" }} onClick={update}>
              Update
            </Button>
            <ConfirmDelete
              props={props}
              setError={setError}
              setSuccess={setSuccess}
            />
            {/* <Button onClick={submit} variant="danger" style={{ width: "10rem" }}>
            Delete
          </Button> */}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default MyProducts;
