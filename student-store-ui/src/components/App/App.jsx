import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import {useState, useEffect} from 'react'
import axios from "axios"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"


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

    <BrowserRouter>
    <div className="app">
      <Navbar />
        <main>
          {/* YOUR CODE HERE! */}
          
          <Sidebar />
          <Routes><Route path = "/" element = {<Home products = {products}/>} /></Routes>
          </main>
    </div>

    </BrowserRouter>
  )
}
