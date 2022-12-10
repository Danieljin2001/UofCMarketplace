import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
// taken from https://react-bootstrap.github.io/components/alerts/
function SuccessAlert({ props }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading style={{ backgroundColor: "#f8d7da" }}>
          Success
        </Alert.Heading>
        <p style={{ backgroundColor: "#f8d7da", background: "blue" }}>
          {props}
        </p>
      </Alert>
    );
  }
  return (
    <div className="d-flex justify-content-center">
      <Button onClick={() => setShow(true)}>Show Alert</Button>
    </div>
  );
}
export default SuccessAlert;
