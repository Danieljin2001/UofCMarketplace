import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ConfirmAdminStudentDelete from "./ConfirmAdminStudentDelete";
import ErrorAlert from "../components/ErrorAlert";
import SuccessAlert from "../components/SuccessAlert";
import './AdminStudents.css';

function AdminStudents({ props }) {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  return (
    <>
      {error ? <ErrorAlert props={error} /> : null}
      {success ? <SuccessAlert props={success} /> : null}
      <div id="admin-students">
        <Card
          style={{
            backgroundColor: 'PaleGoldenRod'
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
            <div id="card-text">
              <Card.Text
                style={{ backgroundColor: "PaleGoldenRod", color: "black" }}
              >
                {props._id}
              </Card.Text>
              <Card.Text
                style={{ backgroundColor: "PaleGoldenRod", color: "black" }}
              >
                {props.email}
              </Card.Text>
            </div>
            <div
              id="inputGroup"
              style={{

              }}
            >
              <ConfirmAdminStudentDelete
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

export default AdminStudents;
