import * as React from "react"
import "./Sidebar.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function Sidebar({isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle}) {

  if (isOpen === "closed-sidebar"){
  return (
    <div className={isOpen}>
      <img   className="hamburger-icon" onClick={handleOnToggle} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"></img>

      {isOpen === 'open-sidebar' && <p>test</p>}
    </div>
  )
  }
  
  else{
    return(
      <div className={isOpen}>
        <img className="hamburger-icon" onClick={handleOnToggle} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"></img>

        <ShoppingCart shoppingCart = {shoppingCart} products={products}/>
        <CheckoutForm handleOnCheckoutFormChange={handleOnCheckoutFormChange} checkoutForm = {checkoutForm} handleOnSubmitCheckoutForm = {handleOnSubmitCheckoutForm} products={products}/>

        <Link className = "nav-item" to = "/purchases/"> View Previous Purchases </Link> 
      </div>
    )
  }
  
}
