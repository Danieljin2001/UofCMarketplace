import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { confirmAlert } from "react-confirm-alert";
import DeletePost from "./DeletePost";

function MyProducts({ props }) {
  function confirmDelete() {
    //call api
  }
  const submit = () => {
    const options = {
      title: "Title",
      message: "Message",
      buttons: [
        {
          label: "Yes",
          onClick: () => alert("Click Yes"),
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
      keyCodeForClose: [8, 32],
      willUnmount: () => {},
      afterClose: () => {},
      onClickOutside: () => {},
      onKeypress: () => {},
      onKeypressEscape: () => {},
    };

    confirmAlert(options);
  };

  return (
    <Card
      style={{
        marginTop: "0.5%",
        marginRight: "8%",
        marginLeft: "8%",
        backgroundColor: "PaleGoldenRod",
      }}
    >
      <Card.Body
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "PaleGoldenRod",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "1rem",
            width: "60%",
            justifyContent: "space-around",
            backgroundColor: "PaleGoldenRod",
          }}
        >
          <Card.Text
            style={{ backgroundColor: "PaleGoldenRod", color: "black" }}
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
            display: "flex",
            width: "30%",
            justifyContent: "space-around",
            backgroundColor: "PaleGoldenRod",
          }}
        >
          <Button variant="success" style={{ width: "10rem" }}>
            Update
          </Button>
          <Button onClick={submit} variant="danger" style={{ width: "10rem" }}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MyProducts;
