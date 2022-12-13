import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ErrorAlert from "../components/ErrorAlert";
import SuccessAlert from "../components/SuccessAlert";
import ConfirmAdminPostDelete from "./ConfirmAdminPostDelete";
import ConfirmDelete from "./ConfirmDelete";
import './AdminPosts.css';

function AdminPosts({ props }) {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  function formatDate(s) {
    let date = (""+s).split("T");
    date = date[0].replace(/\D/g,"/");
    return date;
  }
  return (
    <>
      {error ? <ErrorAlert props={error} /> : null}
      {success ? <SuccessAlert props={success} /> : null}
      <div id="adminPosts">
        <Card
          style={{
            backgroundColor: "PaleGoldenRod"
          }}
        >
          <Card.Body
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "transparent",
              borderRadius: "0.5rem"
            }}
          >
            <div id="textGroup">
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
                {formatDate(props.createdAt)}
              </Card.Text>
            </div>
            <div
              id="inputGroup">
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
      </div>
    </>
  );
}

export default AdminPosts;
