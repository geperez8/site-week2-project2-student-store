import React, {useState, useEffect} from 'react'
import axios from "axios"
import "../PreviousPurchases/PreviousPurchases.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function PreviousPurchases() {
    const [purchases, setPurchases] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/purchases/").then((response) => {
          setPurchases(response.data.purchases)
        }).catch( (error) => {
          console.error(error)
        })
      }, [])

    console.log("purchases are", purchases)

    const purchaseDataConverter = (purchaseOrder) => {

        return (<Link to = {`/purchases/${purchaseOrder.id}}`}><div className='order-card' key = {purchaseOrder.id}>
            <p>Id = {purchaseOrder.id}</p>
            <p>Placed: {purchaseOrder.time}</p>
            <p>Order placed by: {purchaseOrder.orderDetails.name}</p>
            <p>Email: {purchaseOrder.orderDetails.email}</p>
            <p>The order was for {purchaseOrder.orderDetails.order.length} diffferent products</p><br/>

        </div></Link>)
    }
  return (
    <div className='previous-purchases'>
        <h1>Previous Purchases</h1>
        {purchases.map((purchaseOrder) => purchaseDataConverter(purchaseOrder))}
        
    </div>
  )
}

export default PreviousPurchases