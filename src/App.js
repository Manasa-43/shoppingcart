import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import BuyPage from './Components/BuyPage';
import Cart from "./Components/Cart"
import { Row,Col,Container } from 'reactstrap';
import './App.css';
// import { Button} from 'reactstrap';
// import Card from "./Card"
// import { ToastContainer, toast } from "react-toastify";

function App() {
const [cartItem , setCartItem] =React.useState([])

const addItem = (item)=>{
      const addItemCheck = cartItem.findIndex((array)=>{
        console.log("Looping in findIndex")
        return array.id ===item.id
    
      })
      
      if (addItemCheck !==-1){
        alert('Item is already there')
       
      }
      else{
        setCartItem([...cartItem , item])
        console.log("New item",cartItem)
      }
        
      
      }
console.log(cartItem)
const removeItem = (item)=>{
      setCartItem(cartItem.filter(arrItem=>(arrItem.id!==item.id))
      )
}

const buyNow = ()=>{
  setCartItem([])
  alert("Purchase is completed")
}




  return (
    
      <Row>
        <Col md ={7} >
          <BuyPage addItem ={addItem} />
        </Col>
        <Col md = {5}>
          <Cart removeItem={removeItem} cartItem ={cartItem} buyNow={buyNow} />
        </Col>
      </Row>
   
  );
}

export default App;
