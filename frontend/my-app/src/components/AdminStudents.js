import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function AdminStudents() {
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
                >John Don</Card.Text>
                <Card.Text
                    style={{ backgroundColor: "PaleGoldenRod", color: "black" }}
                >test@ucalgary.ca</Card.Text>
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
                <Button variant="danger" style={{ width: "15rem" }}>
                    Delete
                </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default AdminStudents