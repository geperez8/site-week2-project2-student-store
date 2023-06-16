import * as React from "react"
import "./Navbar.css"
import {Link} from 'react-router-dom'

import Logo from "../Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <p>Navbar</p>
      <Logo />
      {/* <Link to = "/">Home </Link>
      <a id = "about-us" href = "about-us">About Us</a>
      <a id = "contact us" href ="contact-us">Contact Us</a>
      <Link to="#Buy">Buy Now</Link> */}

    </nav>
  )
}
