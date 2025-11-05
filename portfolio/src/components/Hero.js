import React from 'react'
import heroImage from '../img/heroImage.jpg'

function Hero() {
  return (
    <div>
      <section className="hero-section">
      <div className="hero-container">
          <img src={heroImage} alt=''/>
        <div className="hero-text">
          <h1>Welcome to Our Website</h1>
          <p>I'm Teja Munikrishna Geddam . <br/>Software Developer<br/> Explore our amazing services and features!</p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero