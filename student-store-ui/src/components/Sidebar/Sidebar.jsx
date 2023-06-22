import * as React from "react"
import "./Sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from 'react'

export default function Sidebar({isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle}) {
  
  const [sidebarStatus, setSidebarStatus] = useState("closed-sidebar")

  const sidebarOpener = () => {
    setSidebarStatus("open-sidebar")
  }

  const sidebarCloser = () => {
    setSidebarStatus("closed-sidebar")

  }
  return (
    <div className={sidebarStatus}>
      {sidebarStatus === "closed-sidebar" && <button onClick={sidebarOpener}>open</button>}
      {sidebarStatus === "open-sidebar" && <button onClick={sidebarCloser}>close</button>}
      <p>{sidebarStatus}</p>
    </div>
  )
}
