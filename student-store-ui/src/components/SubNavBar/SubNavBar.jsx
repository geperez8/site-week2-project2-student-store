import React from 'react'

function SubNavBar({searchItem, eventHandler, categoryHandler, categoryChangeHandler}) {

    const handleChange = (event) => {
        eventHandler(event.target.value)
    }

    const handleButton = (event) => {
        categoryChangeHandler(event.target.value)
    }
    
    return (
        <div>
            <input type='text'
        placeholder='Search Here' 
        onChange={handleChange}
        value = {searchItem}/>
            <button value = "" onClick={handleButton}>All Categories</button>
            <button value = "clothing" onClick={handleButton}>Clothing</button>
            <button value = "food" onClick={handleButton}>Food</button>
            <button value = "accessories" onClick={handleButton}>Accessories</button>
            <button value = "tech" onClick={handleButton}>Tech</button>
        </div>
        )  
}

export default SubNavBar