import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import Hero from "../Hero/Hero"
import SubNavBar from "../SubNavBar/SubNavBar"
import AboutUs from "../AboutUs/AboutUs"
import ContactUs from "../ContactUs/ContactUs"
import Footer from "../Footer/Footer"

import { useState } from "react"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"



export default function Home({products, handleAddItemToCart, handleRemoveItemToCart}) {
  const [searchItem, setSearchItem] = useState('')
  const [currentCategory, setCurrenCategory] = useState('')

  const searchEventHandler = (searchTerm) => {
    setSearchItem(searchTerm)
  }

  const categoryChangeHandler = (category) => {
    setCurrenCategory(category)
  }
    
  return (
    <div className="home">

        <Hero />
        <SubNavBar searchItem={searchItem} eventHandler={searchEventHandler} categoryChangeHandler = {categoryChangeHandler}/>
        <ProductGrid currentCategory = {currentCategory} searchItem = {searchItem} 
          products={products} handleAddItemToCart={handleAddItemToCart} 
          handleRemoveItemToCart={handleRemoveItemToCart}/>
        <AboutUs />
        <ContactUs />
        <Footer />



    </div>
  )
}
