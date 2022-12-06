import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HeaderAndFooterExample() {
  return (
    <Card className="text-center" style={{width: '50rem', margin: 'auto', backgroundColor:'PaleGoldenRod', marginTop: '5%'}}>
      <Card.Header style={{color:'black'}} id='buyorsell'>Buying/Selling</Card.Header>
      <Card.Body style={{backgroundColor:'PaleGoldenRod'}}>
        <Card.Title style={{marginTop:'5%', backgroundColor:'PaleGoldenRod', color:'black'}}>SENG 513 Textbook</Card.Title>
        <Card.Text style={{fontSize:'1rem', marginTop:'10%', backgroundColor:'PaleGoldenRod', color:'black'}}>
          Hello, I am currently selling the SENG 513 for $30. Please message me if you are interested at test@ucalgary.ca
        </Card.Text>
        <div id='inputform' style={{display:'flex', justifyContent:'space-around', marginTop: '30%', backgroundColor:'PaleGoldenRod'}}>
        <Button variant="secondary">Return Home</Button>
        <Button variant="primary">Message</Button>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">10/22/2022</Card.Footer>
    </Card>
  );
}

export default HeaderAndFooterExample;