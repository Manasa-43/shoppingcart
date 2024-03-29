import React from "react"
import Axios from "axios"
import MyCard from "../MyCard"
// import {random,commerce} from "faker"
import { Container, Col, Row } from "reactstrap";
import { v4 as uuidv4 } from 'uuid';

const localUrl = "http://myjson.dit.upm.es/api/bins/dmgg"

const BuyPage = ({addItem})=>{
    const [product, setProduct] = React.useState([])
    
    const fetchPhotos = async ()=>{
        const result= await Axios.get(localUrl,{})
        const dat = result.data
   
    const pht = dat.photos

    const allProducts = pht.map(pic=>({
        smallImage : pic.src.medium,
        tinyImage : pic.src.tiny,
         productName : pic.photographer,
         productPrice :pic.id,
        id : uuidv4()
    }))

    setProduct(allProducts)
}
    React.useEffect(()=>{fetchPhotos()},[])
    
    // console.log(product)
    return(
        <div >
            <Container >
                <Row >
                    <Col >
                        <MyCard prodItem={product} addItem ={addItem} />
                    </Col>  
                </Row>
            </Container>
        </div>
    )
}
export default  BuyPage;