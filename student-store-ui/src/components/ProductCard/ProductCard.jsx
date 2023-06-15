import React from 'react'
import {Link} from 'react-router-dom'

function ProductCard({product, showDescription, handleAddItemToCart = () => {}, handleRemoveItemFromCart = () => {}, quantity = 0}) {
    console.log(product)
  return (
    <div className='product-card'>
        <h3>Product Card</h3>
        <div className='media'>
        <Link>
            <img src={product.image} />
        </Link>
        </div>
        <h1 className='product-name'>{product.name}</h1>
        <h1 className='product-price'>{`$${product.price}`}</h1>
        {showDescription && <h1 className='product-description'>{product.description}</h1>}
        <button className='add' onClick={handleAddItemToCart(product.id)}>+</button>
        <p className='product-qunatity'>{quantity}</p>
        <button className='remove' onClick={handleRemoveItemFromCart(product.id)}>-</button>

    </div>
  )
}

export default ProductCard