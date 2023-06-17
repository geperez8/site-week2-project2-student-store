import React from 'react'
import "./Footer.css"

function Footer() {
  const footerColumnNames = ["Company", "Support", "Account", "Socials"]

  const footerColumnInfo ={
    "Company": ["About Us", "Find a Store", "Terms", "Site Map", "Careers"],
    "Support": ["Contact Us", "Money Refund", "Order Status", "Shipping Info", "Open Dispute"],
    "Account": ["Login","Refister", "Account Settings", "My Orders"],
    "Socials": ["Facebook", "Twitter", "LinkedIn", "Instagram", "YuuTube"]
  }

  return (
    <div className="footer">
        {footerColumnNames.map((ColumnName) => 
          (<div className='footer-column'>
            <h1>{ColumnName}</h1>
            {footerColumnInfo[ColumnName].map((columnElements) => (<h3>{columnElements}</h3>))}
          </div>))}
    </div>
  )
}

export default Footer