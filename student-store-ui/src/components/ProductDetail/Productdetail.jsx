import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ProductView from "../ProductView/ProductView"

function ProductDetail({handleAddItemToCart, handleRemoveItemFromCart}) {
    const {productID} = useParams("")

    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:3001/store/${productID}`).then((response) => {
            setProduct(response.data)})
            .catch( (error) => {
            console.error(error)})

    }, [product])

    // let productDetailOutput = <h1 className='loading'>Loading...</h1>

    // if ('error' in product){
    //     productDetailOutput = <h1>{product.error}</h1>
    // }
    // else {
    //     productDetailOutput = <ProductView product = {product} handleAddItemToCart = {handleAddItemToCart} handleRemoveItemFromCart = {handleRemoveItemFromCart} />
    // }

  return (
    <div className='product-detail'>

        {<ProductView product = {product} handleAddItemToCart = {handleAddItemToCart} handleRemoveItemFromCart = {handleRemoveItemFromCart} />}
    </div>
  )
}

export default ProductDetail