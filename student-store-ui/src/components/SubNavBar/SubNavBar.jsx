import React from 'react'
import "../SubNavBar/SubNavBar.css"

function SubNavBar({searchItem, eventHandler, categoryHandler, categoryChangeHandler}) {

    const handleChange = (event) => {
        eventHandler(event.target.value)
    }

    const handleButton = (event) => {
        categoryChangeHandler(event.target.value)
    }
    
    return (
        <div className='sub-nav-bar'>
            <input type='text'
                placeholder='Search Here' 
                onChange={handleChange}
                id = "search-bar"
                value = {searchItem}/> <br /><br /><br />
            <div className='buttons'>
                <button className='subNavBar-button' value = "" onClick={handleButton}>All Categories</button>
                <button className='subNavBar-button' value = "clothing" onClick={handleButton}>Clothing</button>
                <button className='subNavBar-button' value = "food" onClick={handleButton}>Food</button>
                <button className='subNavBar-button' value = "accessories" onClick={handleButton}>Accessories</button>
                <button className='subNavBar-button' value = "tech" onClick={handleButton}>Tech</button>
            </div>
        </div>
        )  
}

export default SubNavBar