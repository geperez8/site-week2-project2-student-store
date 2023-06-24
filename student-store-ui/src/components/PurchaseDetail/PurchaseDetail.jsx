import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import "../PurchaseDetail/PurchaseDetail.css"

function PurchaseDetail({products}) {
    const {orderId} = useParams("")

    const [purchase, setPurchase] = useState({
        "id": "",
        "time": "",
        "orderDetails": {
            "name": "",
            "email": '',
            "order": []
        }
    })

    useEffect( () => {
        axios.get(`http://localhost:3001/purchases/${orderId}`).then((response) => {
            setPurchase(response.data)})
            .catch( (error) => {
            console.error(error)})

    }, [])

    let totalCost = 0

    const items = purchase.orderDetails.order.map((productOrder) => {
        const productInfo = products.find((product) => product.id === productOrder.id)

        totalCost = (totalCost + parseFloat((productInfo.price * productOrder.quantity)))

        return( <p>Product Name: {productInfo.name} -- Quantity: {productOrder.quantity} -- Price/item: ${productInfo.price} -- Cost: ${(productInfo.price * productOrder.quantity).toFixed(2)}</p>)})
  if (purchase){
    console.log("inside of conditional" , purchase)
    return (
        <div className='purchase-detail'>
            <p>Id = {purchase.id}</p>
            <p>Placed: {purchase.time}</p>
            <p>Order placed by: {purchase.orderDetails.name}</p>
            <p>Email: {purchase.orderDetails.email}</p>
            <p>The order was for {purchase.orderDetails.order.length} diffferent products</p><br/>
            <p>Items in order: {items}</p><br/>
            <p>Subtotat: ${totalCost.toFixed(2)}</p>
            <p>Taxes and Fees: ${(totalCost* .0875).toFixed(2) }</p>
            <p>Total: ${(totalCost* 1.0875).toFixed(2)}</p>
           
    
    
        </div>
      )
  }
    
}

export default PurchaseDetail