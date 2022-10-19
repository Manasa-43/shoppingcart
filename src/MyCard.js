import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Button ,Row,Col} from 'reactstrap';
import './index.css';
export default function MyCard({prodItem,addItem}){

        const imgShow = prodItem.map(product => (
           <div >
                <div className = "card-space"key={product.id} >
                    
                    <img height = {150}src= {product.tinyImage}/>
                    <div>Name : {product.productName}</div>
                    <div>Price : {product.productPrice}/-</div>
                    <Button color = "success" onClick ={()=>(addItem(product))}>Buy Now</Button>
                    
                
                </div>
          
            </div>
      ))
    
    return (
        <div >
            <h1 className="text-success" >Buy Items</h1>
            <div className = "flex">{imgShow}</div>
            
        </div>
        
    )
        
}
