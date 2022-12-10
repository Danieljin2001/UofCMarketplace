import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// taken from https://react-bootstrap.github.io/components/modal/
function ConfirmDelete({ props }) {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Are you Sure you want to Delete</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Go Back</Button>
          <Button variant="primary">Delete</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ConfirmDelete;
