import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../ProductCard/ProductCard.css"

function ProductCard({product, showDescription, handleAddItemToCart, handleRemoveItemFromCart, quantity = 0}) {

  const addItemHandler = () => {
    handleAddItemToCart(product.id)
  }

  const removeItemHandler = () => {
    handleRemoveItemFromCart(product.id)
  }

  // let productQuantity = 

  return (
    <div className='product-card'>
 
        <div className='media'>
            <Link to = {`/products/${product.id}`}><img className = 'product-img' src={product.image} /></Link>
        </div>

        <h1 className='product-name'>{product.name}</h1>

        <h1 className='product-price'>{`$${parseFloat(product.price).toFixed(2)}`}</h1>

        {showDescription && <h1 className='product-description'>{product.description}</h1>}
        
        <button className='add' onClick={addItemHandler}>Add to cart <i className="fa fa-shopping-cart"></i></button>
        
        {quantity > 0 && {quantity}}
        
        <button className='remove' onClick={removeItemHandler}>Remove from cart</button>
    </div>
  )
}

export default ProductCard