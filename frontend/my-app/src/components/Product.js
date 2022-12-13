import Card from "react-bootstrap/Card";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import ProductPage from "../Pages/ProductPage";
import "./Product.css";


function Product({ props }) {
  function formatDate(s) {
    let date = (""+s).split("T");
    date = date[0].replace(/\D/g,"/");
    return date;
  }
  console.log("props= ", props);
  return (
    <>
      <div className="d-flex justify-content-center">
        <div id = "container">
          <Link to="/productpage" state={{ props }} style={{ textDecoration: 'none'}}>
            <div className="d- flex m-2" id = "inside-container">
                <div className="d-flex justify-content-between align-items-center" id ="title-date">
                  <div style={{background: "transparent"}}>
                    <div id ="title">
                      {props.title}
                    </div>
                    <div id = "date">
                      {formatDate(props.createdAt)} | {props.productType}
                    </div> 
                  </div>
                  <div id="price">
                    ${props.price}
                  </div>
                </div>
                <div id = "desc">
                  {props.desc}
                </div>
            </div>
         </Link>
        </div>
      </div>
    
    </>

  );
  // return (
  //   <>
  //     <Card
  //       style={{
  //         width: "80%",
  //         margin: "auto",
  //         marginTop: "0.5rem",
  //         marginBottom: "0.5rem",
  //         backgroundColor: "PaleGoldenRod",
  //       }}
  //     >
  //       {/* <Routes>
  //         <Route path="/productpage" element={<ProductPage />} />
  //       </Routes> */}
  //       <Link to="/productpage" state={{ props }} style={{}}>
  //         {/* <a
  //         href="/productpage"
  //         style={{ textDecoration: "none", color: "black" }}
  //       > */}
  //         <Card.Body
  //           style={{
  //             display: "flex",
  //             flexDirection: "row",
  //             justifyContent: "space-between",
  //             textAlign: "center",
  //             fontFamily: "monospace",
  //             backgroundColor: "PaleGoldenRod",
  //           }}
  //         >
  //           <Card.Title
  //             style={{
  //               textAlign: "center",
  //               backgroundColor: "PaleGoldenRod",
  //               color: "black",
  //             }}
  //           >
  //             {props.title}
  //           </Card.Title>
  //           <div
  //             style={{
  //               display: "flex",
  //               flexDirection: "column",
  //               backgroundColor: "PaleGoldenRod",
  //             }}
  //           >
  //             <Card.Text
  //               style={{
  //                 fontWeight: "bold",
  //                 fontSize: "larger",
  //                 backgroundColor: "PaleGoldenRod",
  //                 color: "green",
  //               }}
  //             >
  //               ${props.price}
  //             </Card.Text>
  //             <Card.Text
  //               style={{
  //                 backgroundColor: "PaleGoldenRod",
  //                 color: "black",
  //                 fontSize: "1.5rem",
  //               }}
  //             >
  //               {formatDate(props.createdAt)}
  //             </Card.Text>
  //           </div>
  //         </Card.Body>
  //         {/* </a> */}
  //       </Link>
  //     </Card>
  //   </>
  // );
}

export default Product;
