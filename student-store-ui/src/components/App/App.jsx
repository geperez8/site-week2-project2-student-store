import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import "./App.css"
import {useState, useEffect} from 'react'
import axios from "axios"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



export default function App() {

  const [products, setProducts] = useState('')
  

  useEffect(() => {
    axios.get("http://localhost:3001/store").then((response) => {
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
          
            
          <Sidebar />
          <div>
          <Routes>
            <Route path = "/" element = {<Home products = {products}/>}></Route>
            <Route path = "/products/:productID" element = {<ProductDetail products = {products} />}></Route>
            <Route path = "*" element = {<NotFound />}></Route>
          </Routes>
          </div>
          
          

          
          

          

          
        </main>
        </Router>
    </div>

    
  )
}
