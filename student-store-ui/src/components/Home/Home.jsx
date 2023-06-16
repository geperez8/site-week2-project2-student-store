import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import Hero from "../Hero/Hero"
import SubNavBar from "../SubNavBar/SubNavBar"
import { useState } from "react"

export default function Home({products, handleAddItemToCart, handleRemoveItemToCart}) {
  const [searchItem, setSearchItem] = useState('')
  const [currentCategory, setCurrenCategory] = useState('')

  const searchEventHandler = (searchTerm) => {
    setSearchItem(searchTerm)
  }

  const categoryChangeHandler = (category) => {
    console.log(category)
    setCurrenCategory(category)
    console.log("this has been called")
    console.log(currentCategory)
  }
    
  return (
    <div className="home">
      <p>Home</p>
      <Hero />
      <SubNavBar searchItem={searchItem} eventHandler={searchEventHandler} categoryChangeHandler = {categoryChangeHandler}/>
      <ProductGrid currentCategory = {currentCategory} searchItem = {searchItem} products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart}/>
    </div>
  )
}
