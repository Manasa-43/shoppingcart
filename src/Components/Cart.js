import React from "react"
import{Card,CardBody,Col,Row,ListGroup,ListGroupItem,Container,CardFooter,CardHeader,Button} from "reactstrap"

function Cart({removeItem,cartItem,buyNow}){
    let amount = 0
    cartItem.forEach((item)=>{
        amount =parseFloat(amount) + parseFloat(item.productPrice)
    })
    return (
    <Container>
        <h1 className = "text-success">Cart</h1>
    <ListGroup>
        {cartItem.map(item => (
        <ListGroupItem>
            <Row >
                <Col><img height ={80} src= {item.tinyImage}/></Col>
                <Col>
                <div className ="text-primary">{item.productName}</div>
                 <span>Price:-{item.productPrice}/-</span>
                 <Button onClick = {() => removeItem(item)} color= "danger">Remove</Button>
                </Col>
            </Row>
        </ListGroupItem>
        ))}
       
    </ListGroup>
    {cartItem.length>= 1 ? 
      <Card className ="text-center mt-3">
        <CardHeader>Cart Value</CardHeader>
           <CardBody>
            Total value of the {cartItem.length} products is <strong>{amount} /-</strong> 
           </CardBody>
        <CardFooter>
            <Button color = "success"onClick={buyNow}>Pay here</Button>
        </CardFooter>
      </Card>: <h2>Your cart is empty</h2>
}
    </Container>
    )
}
export default Cart;