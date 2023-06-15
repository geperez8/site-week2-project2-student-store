import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

function ProductGrid({products, handleAddItemToCart, handleRemoveItemToCart}) {
  return (
    <div className='product-grid'>
        <h1>Product Grid</h1>
       {products.map((product) => (<ProductCard product = {product} showDescriptio n = {false}/>))}
    </div>
  )
}

export default ProductGrid