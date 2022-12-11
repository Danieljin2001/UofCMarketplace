
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function AllStudentHeader({first, second, third}) {

  return (
    <>
      <Card
        style={{
          marginTop: "0.5%",
          marginRight: "8%",
          marginLeft: "8%",
        }}
        >
        <Card.Body
          style={{
              display: "flex",
              justifyContent: "space-between",
            }}
            >
          <div
            style={{
                display: "flex",
                fontSize: "1rem",
                width: "60%",
                justifyContent: "space-around",
            }}
          >
            <Card.Text
              style={{ color: "white" }}
            >
                Student ID
            </Card.Text>
            <Card.Text
              style={{  color: "white" }}

            >
                Email
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
export default AllStudentHeader;
