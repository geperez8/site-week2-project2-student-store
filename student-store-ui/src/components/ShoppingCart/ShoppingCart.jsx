import React, { useEffect, useState } from 'react'
import "../ShoppingCart/ShoppingCart.css"

function ShoppingCart({isOpen, products, shoppingCart}) {

    let totalCost = 0

    const rowCreator = (productOrder, key) => {
        const productInfo = products.find((product) => product.id === productOrder.id)

        totalCost = (totalCost + parseFloat((productInfo.price * productOrder.quantity)))

        return (
            <tr>
                <td>{productInfo.name}</td>
                <td>{productOrder.quantity}</td>
                <td>${productInfo.price}</td>
                <td>${(productInfo.price * productOrder.quantity).toFixed(2)}</td>
            </tr>
        )


    }

    let table = <div>
        <table>
        
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Cost</th>
                </tr>
        

            
        
            {shoppingCart.map((productOrder) => rowCreator(productOrder, productOrder.id))}

            

            <tr>
                <td></td>
                <td></td>
            </tr>
        </table>
        <p>Subtotat: ${totalCost.toFixed(2)}</p>
        <p>Taxes and Fees: ${(totalCost* .0875).toFixed(2) }</p>
        <p>Total: ${(totalCost* 1.0875).toFixed(2)}</p>
    </div>
    


    return (
         <div className='shopping-cart'>
            <h1>Shopping Cart</h1>
            {shoppingCart.length === 0  ? <h4>No items addes to cart</h4> : table}
            
        </div>
    )
    
  
}

export default ShoppingCart