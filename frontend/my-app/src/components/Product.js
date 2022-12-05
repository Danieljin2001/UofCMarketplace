import Card from 'react-bootstrap/Card';

function Buying() {
  return (
    <Card style={{ width: '80%', margin:'auto', marginTop:'0.5rem', marginBottom:'0.5rem'}} >
    <a href='#' style={{textDecoration: 'none', color:'black'}}>
    <Card.Body style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', textAlign:'center', fontFamily:'monospace'}} href='#'>
        <Card.Title style={{textAlign:'center'}}>SENG 513 Textbook</Card.Title>
        <div style={{display:'flex', flexDirection:'column'}}>
            <Card.Text style={{fontWeight:'bold', fontSize:'larger'}}>$30.00</Card.Text>
            <Card.Text>10/22/2022</Card.Text>
        </div>
    </Card.Body>
    </a>
    </Card>
  );
}

export default Buying;