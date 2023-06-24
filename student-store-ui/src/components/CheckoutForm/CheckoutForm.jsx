import React from 'react'
import "../CheckoutForm/CheckoutForm.css"

function CheckoutForm({isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, products}) {

  const inputOnChangeHandler = (event) => {
    handleOnCheckoutFormChange(event.target.name, event.target.value)
  }
  const handleCheckout = (event) => {
    event.preventDefault()

    if (checkoutForm.name !== '' && checkoutForm.email !== ""){
    handleOnSubmitCheckoutForm()
    }
    
  }

  const receipt = <div className='receipt'>
    <h3>Tank you for your purchase</h3>
    <p>Expect a receipt in your inbox. Here is a summary of your order:</p>
    {checkoutForm.order.map((productOrder) => {
      const productInfo = products.find((product) => product.id === productOrder.id)

      return(
        <p>{productInfo.name} --- Quantity: {productOrder.quantity}</p>
      )
    })}
  </div>

  return (
    <div className='checkout-form'>

      <h2>Checkout Form</h2>

      <form onSubmit={handleCheckout}>
        <label>Name</label><br/>
        <input className='checkout-form-input'
                type='text'
                name = 'name'
                placeholder='Name' 
                value={checkoutForm.name}
                onChange={inputOnChangeHandler} required/><br/><br/>

        <label>Email</label><br/>
        <input className='checkout-form-input' 
                type = "email"
                name = "email"
                placeholder='Email'
                value= {checkoutForm.email}
                onChange={inputOnChangeHandler} required/><br/><br/>
        <input type="submit" value="checkout" className='checkout-button'/>

      </form>
      {checkoutForm.order.length !== 0 && receipt }
    </div>
  )
}

export default CheckoutForm