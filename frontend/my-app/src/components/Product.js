import Card from "react-bootstrap/Card";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import ProductPage from "../Pages/ProductPage";

function Product({ props }) {
  console.log("props= ", props);
  return (
    <>
      <Card
        style={{
          width: "80%",
          margin: "auto",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
          backgroundColor: "PaleGoldenRod",
        }}
      >
        {/* <Routes>
          <Route path="/productpage" element={<ProductPage />} />
        </Routes> */}
        <Link to="/productpage" state={{ props }}>
          {/* <a
          href="/productpage"
          style={{ textDecoration: "none", color: "black" }}
        > */}
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              textAlign: "center",
              fontFamily: "monospace",
              backgroundColor: "PaleGoldenRod",
            }}
          >
            <Card.Title
              style={{
                textAlign: "center",
                backgroundColor: "PaleGoldenRod",
                color: "black",
              }}
            >
              {props.title}
            </Card.Title>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "PaleGoldenRod",
              }}
            >
              <Card.Text
                style={{
                  fontWeight: "bold",
                  fontSize: "larger",
                  backgroundColor: "PaleGoldenRod",
                  color: "black",
                }}
              >
                ${props.price}
              </Card.Text>
              <Card.Text
                style={{
                  backgroundColor: "PaleGoldenRod",
                  color: "black",
                  fontSize: "1.5rem",
                }}
              >
                {props.createdAt}
              </Card.Text>
            </div>
          </Card.Body>
          {/* </a> */}
        </Link>
      </Card>
    </>
  );
}

export default Product;
