import * as React from "react"
import "./Navbar.css"
import {Link} from 'react-router-dom'

import Logo from "../Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-bar-items">
      <Link className = "nav-item" to = "/"> Home </Link>
      <a className = "nav-item" href = "#about-us">About Us</a>

      <Link to = "/"><Logo /></Link>
      
      
      <a className = "nav-item" href ="#contact-us">Contact Us</a>
      <a className = "nav-item" href ="#product-grid">Buy Now</a>

      </div>

    </nav>
  )
}
