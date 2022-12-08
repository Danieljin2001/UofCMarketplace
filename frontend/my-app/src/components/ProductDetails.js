import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { isAuth } from "../routeProtection";
import NavBar from "./NavBar";

function HeaderAndFooterExample() {
  const auth = isAuth();
  return (
    <>
      <NavBar />
      <Card
        className="text-center my-3"
        style={{
          width: "60%",
          margin: "auto",
          backgroundColor: "PaleGoldenRod",
        }}
      >
        <Card.Header style={{ color: "black" }} id="buyorsell">
          Buying/Selling
        </Card.Header>
        <Card.Body style={{ backgroundColor: "PaleGoldenRod" }}>
          <Card.Title
            style={{
              marginTop: "5%",
              backgroundColor: "PaleGoldenRod",
              color: "black",
            }}
          >
            SENG 513 Textbook
          </Card.Title>
          <Card.Text
            style={{
              fontSize: "1rem",
              marginTop: "10%",
              backgroundColor: "PaleGoldenRod",
              color: "black",
            }}
          >
            Hello, I am currently selling the SENG 513 for $30. Please message
            me if you are interested at{" "}
            {auth ? (
              <>test@ucalgary.ca </>
            ) : (
              <>
                Please <a href="/login"> sign in</a> to view contact info
              </>
            )}
          </Card.Text>
          <div
            id="inputform"
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "30%",
              backgroundColor: "PaleGoldenRod",
            }}
          >
            <Button variant="secondary">Return Home</Button>
            <Button variant="primary">Message</Button>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">10/22/2022</Card.Footer>
      </Card>
    </>
  );
}

export default HeaderAndFooterExample;
