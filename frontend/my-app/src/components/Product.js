import Card from 'react-bootstrap/Card';

function Product() {
  return (

    <>
    <Card style={{ width: '80%', margin:'auto', marginTop:'0.5rem', marginBottom:'0.5rem' , backgroundColor:'PaleGoldenRod'}} >
    <a href='/productpage' style={{textDecoration: 'none', color:'black'}}>
    <Card.Body style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', textAlign:'center', fontFamily:'monospace', backgroundColor:'PaleGoldenRod'}} >
        <Card.Title style={{textAlign:'center', backgroundColor:'PaleGoldenRod', color:'black'}}>SENG 513 Textbook</Card.Title>
        <div style={{display:'flex', flexDirection:'column', backgroundColor:'PaleGoldenRod'}}>
            <Card.Text style={{fontWeight:'bold', fontSize:'larger', backgroundColor:'PaleGoldenRod', color:'black'}}>$30.00</Card.Text>
            <Card.Text style={{backgroundColor:'PaleGoldenRod', color:'black', fontSize:'1.5rem'}}>10/22/2022</Card.Text>
        </div>
    </Card.Body>
    </a>
    </Card>
    </>

  );
}

export default Product;