import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Button ,Row,Col} from 'reactstrap';

export default function Card({prodItem,addItem}){
    console.log(prodItem)
        const imgShow = prodItem.map(product => (
            <Row>
                <Col md ={4} key={product.id} >
                    
                    <img src= {product.tinyImage}/>
                    <div>Name : {product.productName}</div>
                    <div>Price : {product.productPrice}/-</div>
                    <Button color = "success" onClick ={()=>(addItem(product))}>Buy Me</Button>
                    
                
                </Col>
            </Row>
        
      ))
    
    return (
        <div>
            <div>Card Component {imgShow}</div>
            
        </div>
        
    )
        
}
