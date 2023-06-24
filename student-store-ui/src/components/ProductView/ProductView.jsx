import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import "../ProductView/ProductView.css"

function ProductView({product, handleAddItemToCart, handleRemoveItemFromCart}) {
  return (
    <div className='product-view'>
        <h1 className='product-id'> Product # {product.id}</h1>
        <ProductCard product={product} showDescription={true} handleAddItemToCart = {handleAddItemToCart} handleRemoveItemFromCart = {handleRemoveItemFromCart}/>
    </div>
  )
}

export default ProductView