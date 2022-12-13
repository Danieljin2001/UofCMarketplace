import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ConfirmDelete from "./ConfirmDelete";
import ErrorAlert from "../components/ErrorAlert";
import SuccessAlert from "../components/SuccessAlert";
import './MyProducts.css'

function MyProducts({ props }) {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  return (
    <>
      {error ? <ErrorAlert props={error} /> : null}
      {success ? <SuccessAlert props={success} /> : null}
      <div id="my-products-card">
        <Card style={{backgroundColor: "PaleGoldenRod"}}>
          <Card.Body
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "PaleGoldenRod",
              borderRadius: "0.5rem"
            }}
          >
            <div id="card-text">
              <Card.Text
                style={{ backgroundColor: "PaleGoldenRod", color: "black"}}
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

              }}
            >
              <Button variant="success" style={{ width: "7rem" }}>
                Update
              </Button>
              <ConfirmDelete
                props={props}
                setError={setError}
                setSuccess={setSuccess}
              />
              {/* <Button onClick={submit} variant="danger" style={{ width: "7rem" }}>
              Delete
            </Button> */}
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default MyProducts;
