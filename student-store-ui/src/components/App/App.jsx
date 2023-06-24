import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import PreviousPurchases from "../PreviousPurchases/PreviousPurchases"
import "./App.css"
import {useState, useEffect} from 'react'
import axios from "axios"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PurchaseDetail from "../PurchaseDetail/PurchaseDetail"





export default function App() {

  const [products, setProducts] = useState('')

  const [shoppingCart, setShoppingCart] = useState([])

  // const [isFetching, setIsFetching] = useState('closed-sidebar')

  const [isOpen, setIsOpen] = useState('closed-sidebar')

  const [checkoutForm, setCheckoutForm] = useState({name: '', email: '', order:[]})
  
  const handleAddItemToCart = (itemId) => {
    let findStatus = shoppingCart.find((itemOrder) => itemOrder.id === itemId)

    if (findStatus === undefined){
      shoppingCart.push({
        "id" : itemId,
        "quantity": 1
      })

      setShoppingCart([...shoppingCart])
      console.log(shoppingCart)
    }

    else if (findStatus !== undefined){
      findStatus.quantity = findStatus.quantity + 1
      setShoppingCart([...shoppingCart])
      console.log(shoppingCart)
    }
  }

  const handleRemoveItemFromCart = (itemId) => {

    console.log("itemId:", itemId)
    let itemIndex = shoppingCart.findIndex((itemOrder) => itemOrder.id == itemId)

    console.log(itemIndex)

    // if item  is in shopping cart
    if (itemIndex !== -1){
      shoppingCart[itemIndex].quantity--
      console.log(shoppingCart)

      // if item quantity is 0 after decremet
      if (shoppingCart[itemIndex].quantity === 0){
        shoppingCart.splice(itemIndex, 1)
      }

      setShoppingCart([...shoppingCart])
    }
  }

  const handleOnToggle = () => {
    if (isOpen === "closed-sidebar") {
      setIsOpen("open-sidebar")
    }
    else{
      setIsOpen("closed-sidebar")
    }
  }

  const handleOnSubmitCheckoutForm = () => {
    checkoutForm.order = shoppingCart

    console.log(checkoutForm)
    
    setCheckoutForm({...checkoutForm})

    axios.post("http://localhost:3001/purchases/", checkoutForm)

    checkoutForm.name = ''

    checkoutForm.email = ''

    setCheckoutForm({...checkoutForm})

    setShoppingCart([])

    
  }

  const handleOnCheckoutFormChange = (name, value) => {
    checkoutForm[name] = value
    setCheckoutForm({...checkoutForm})
    console.log(checkoutForm[name])
  }

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
            
          <Sidebar shoppingCart={shoppingCart} products={products} isOpen={isOpen} checkoutForm={checkoutForm} 
          handleOnToggle={handleOnToggle} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/>
          <div>
          <Routes>
            <Route path = "/" element = {<Home products = {products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>}></Route>
            <Route path = "/products/:productID" element = {<ProductDetail products = {products} 
            handleAddItemToCart = {handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>}></Route>
            <Route path = "*" element = {<NotFound />}></Route>
            <Route path = "/purchases/" element = {<PreviousPurchases products = {products}/>}></Route>
            <Route path = "/purchases/:orderId" element = {<PurchaseDetail products = {products}/>}></Route>
          </Routes>
          </div>
          
        </main>
        </Router>
    </div>
  )
}
