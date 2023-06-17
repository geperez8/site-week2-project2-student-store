import React from 'react'
import "../Hero/Hero.css"

function Hero() {
  return (
    <div className='hero'>
      <div className='intro'>
        <img className='hero-img' src = 'src/intro-picture.png' ></img>
        <h1 id = "welcome-message">Welcome to the Acropolis</h1>
      </div>
    </div>
  )
}

export default Hero