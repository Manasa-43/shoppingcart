import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import BuyPage from './Components/BuyPage';
// import { Button} from 'reactstrap';
// import Card from "./Card"
// import { ToastContainer, toast } from "react-toastify";

function App() {
const [cartItem , setCartItem] =React.useState([])

const addItem = (item)=>{
      const addItemCheck = cartItem.findIndex((array)=>{
        return array.id ===item.id
      })
      if (addItemCheck !=-1){
        alert('Item is already there')
        console.log(item)
      }
      else{
        setCartItem([...cartItem , item])
        console.log("New item",cartItem)
      }
      }

const removeItem = (item)=>{
      setCartItem(cartItem.filter(arrItem=>(arrItem.id!= item.id))
      )
}

const buyNow = ()=>{
  setCartItem([])
  alert("Purchase is completed")
}




  return (
    <div>
      <div className="App">Shopping cart</div>
      <BuyPage addItem={addItem}/>
      
    
    
    </div>
  );
}

export default App;
