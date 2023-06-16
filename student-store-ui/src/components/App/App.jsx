import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import AboutUs from "../AboutUs/AboutUs"
import ContactUs from "../ContactUs/ContactUs"
import Footer from "../Footer/Footer"
import "./App.css"
import {useState, useEffect} from 'react'
import axios from "axios"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



export default function App() {

  const [products, setProducts] = useState('')
  

  useEffect(() => {
    axios.get("https://codepath-store-api.herokuapp.com/store").then((response) => {
      setProducts(response.data.products)
    }).catch( (error) => {
      console.error(error)
    })


  }, [])
  return (

    
    <div className="app">
      <Router>
        <Navbar /> <br/>
        <main>
            {/* YOUR CODE HERE! */}
            
          {/* <Sidebar /> */}
          <Routes>
            <Route path = "/" element = {<Home products = {products}/>}></Route>
            <Route path = "/products/:productID" element = {<ProductDetail products = {products} />}></Route>
          </Routes>

          <AboutUs />
          <ContactUs />
          <Footer />
          

          

          
        </main>
        </Router>
    </div>

    
  )
}
