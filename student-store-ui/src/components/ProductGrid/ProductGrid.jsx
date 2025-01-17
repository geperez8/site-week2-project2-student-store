import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import "../ProductGrid/ProductGrid.css"

function ProductGrid({products, searchItem, handleAddItemToCart, handleRemoveItemFromCart, currentCategory}) {
  return (
    <div id = "product-grid" className='product-grid'>
       {products && products.filter((product) => product.category.includes(currentCategory) 
       && product.name.toLowerCase().includes(searchItem.toLowerCase()))
       .map((product) => (<ProductCard  key = {product.name} product = {product} showDescription = {false} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>))}
    </div>


  )
}

export default ProductGrid