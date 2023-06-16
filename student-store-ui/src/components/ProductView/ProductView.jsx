import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

function ProductView({product}) {
  return (
    <div className='product-view'>
        <h1 className='product-id'> Product # {product.id}</h1>
        <ProductCard product={product} showDescription={true}/>
    </div>
  )
}

export default ProductView