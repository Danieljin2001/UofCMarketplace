import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { createNewChatBetweenStudents } from "../api";
import { getDecodedToken, isAuth } from "../routeProtection";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

function HeaderAndFooterExample({ props }) {
  console.log("props in detail= ", props);
  const auth = isAuth();
  const navigate = useNavigate();
  async function handleMessage() {
    if (props.ownerID) {
      // create a chat and then redirect to the chat page
      const result = await createNewChatBetweenStudents({
        senderId: getDecodedToken().id,
        receiverId: props.ownerID,
      });
      if (result) {
        // redirect to chat page since the chat is created
        navigate("/chat");
      }
    }
  }
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
          {props.adType?.toUpperCase()}
        </Card.Header>
        <Card.Body style={{ backgroundColor: "PaleGoldenRod" }}>
          <Card.Title
            style={{
              marginTop: "5%",
              backgroundColor: "PaleGoldenRod",
              color: "black",
            }}
          >
            {props.title?.toUpperCase()}
          </Card.Title>
          <Card.Text
            style={{
              fontSize: "1rem",
              marginTop: "10%",
              backgroundColor: "PaleGoldenRod",
              color: "black",
            }}
          >
            {props.desc}{" "}
            {auth ? (
              <>
                <br />
                {props.contactInfo ? (
                  <>Please Contact Me At: {props.contactInfo} </>
                ) : null}
              </>
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
            {props.adType.toUpperCase() === "BUY" ? (
              <Link to="/buy">
                {" "}
                <Button variant="secondary">Close</Button>
              </Link>
            ) : (
              <Link to="/sell">
                {" "}
                <Button variant="secondary">Close</Button>
              </Link>
            )}

            <Button onClick={handleMessage} variant="primary">
              Message
            </Button>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">{props.createdAt}</Card.Footer>
      </Card>
    </>
  );
}

export default HeaderAndFooterExample;
