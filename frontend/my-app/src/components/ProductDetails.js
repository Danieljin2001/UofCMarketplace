import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { createNewChatBetweenStudents } from "../api";
import { getDecodedToken, isAuth } from "../routeProtection";
import NavBar from "./NavBar";
import "./ProductDetails.css";
import { useNavigate } from "react-router-dom";

function HeaderAndFooterExample({ props }) {
  const auth = isAuth();
  const navigate = useNavigate();
  
  function formatDate(s) {
    let date = (""+s).split("T");
    date = date[0].replace(/\D/g,"/");
    return date;
    }

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
    <NavBar/>
    <div className="d-flex justify-content-center flex-row">
      <div id = "container-pd">
        <div id = "inner-container-pd" class="pd">
          <div id="type-pd" class="pd">
            {props.adType?.toUpperCase()}ING
          </div>
          <div id = "title-pd" class="pd">
           {props.title}
          </div>
          <div id = "price-pd" class="pd">
            ${props.price}
          </div>
          <div id = "desc-title-pd" class="pd">
            Description
          </div>
          <div id = "desc-pd" class="pd">
          {props.desc}
          </div>
          <div id="contact-container-pd" class ="pd">
            {auth ? (
                <>
                  <br />
                  {props.contactInfo ? (
                    <><span id="contact-pd">Contact: </span>{props.contactInfo} </>
                  ) : null}
                </>
              ) : (
                <>
                  Please <a href="/login"> sign in</a> to view contact info
                </>
              )}
          </div>
          
          
          <div id="message-btn" class="pd">
              <Button onClick={handleMessage} variant="warning">Message</Button>
          </div>

            <div id = "date-pd" class="pd">
              Post date: {formatDate(props.createdAt)}
            </div>
            
        </div>
        
      </div>
      
    </div>
    <div className="d-flex justify-content-center" style={{marginBottom: "2rem"}}>
    {props.adType.toUpperCase() === "BUY" ? (
                <Link to="/buy" style={{background: "transparent"}}>
                  {" "}
                  <Button variant="light">Close</Button>
                </Link>
              ) : (
                <Link to="/sell" style={{background: "transparent"}}>
                  {" "}
                  <Button variant="light">Close</Button>
                </Link>
              )}
    </div>
    
    
    </>
  )
  // return (
  //   <>
  //     <NavBar />
  //     <Card
  //       className="text-center my-3"
  //       style={{
  //         width: "60%",
  //         margin: "auto",
  //         backgroundColor: "PaleGoldenRod",
  //       }}
  //     >
  //       <Card.Header style={{ color: "black" }} id="buyorsell">
  //         {props.adType?.toUpperCase()}
  //       </Card.Header>
  //       <Card.Body style={{ backgroundColor: "PaleGoldenRod" }}>
  //         <Card.Title
  //           style={{
  //             marginTop: "5%",
  //             backgroundColor: "PaleGoldenRod",
  //             color: "black",
  //           }}
  //         >
  //           {props.title?.toUpperCase()}
  //         </Card.Title>
  //         <Card.Text
  //           style={{
  //             fontSize: "1rem",
  //             marginTop: "10%",
  //             backgroundColor: "PaleGoldenRod",
  //             color: "black",
  //           }}
  //         >
  //           {props.desc}{" "}
  //           {auth ? (
  //             <>
  //               <br />
  //               {props.contactInfo ? (
  //                 <>Please Contact me at: {props.contactInfo} </>
  //               ) : null}
  //             </>
  //           ) : (
  //             <>
  //               Please <a href="/login"> sign in</a> to view contact info
  //             </>
  //           )}
  //         </Card.Text>
  //         <div
  //           id="inputform"
  //           style={{
  //             display: "flex",
  //             justifyContent: "space-around",
  //             marginTop: "30%",
  //             backgroundColor: "PaleGoldenRod",
  //           }}
  //         >
  //           {props.adType.toUpperCase() === "BUY" ? (
  //             <Link to="/buy">
  //               {" "}
  //               <Button variant="secondary">Close</Button>
  //             </Link>
  //           ) : (
  //             <Link to="/sell">
  //               {" "}
  //               <Button variant="secondary">Close</Button>
  //             </Link>
  //           )}

  //           <Button variant="primary">Message</Button>
  //         </div>
  //       </Card.Body>
  //       <Card.Footer className="text-muted">{props.createdAt}</Card.Footer>
  //     </Card>
  //   </>
  // );
}

export default HeaderAndFooterExample;
