import React from 'react'
import './Hero.css'
import hero from '../Assets/hero.mp4'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-video'>
        <video id='hero-video' autoPlay loop muted>
          <source src={hero} type="video/mp4" />
        </video>
      </div>
      <div className='hero-content'>
        <h1>NO LIMITS. <br/>JUST MOVEMENT.</h1>
        <p>Discover the latest styles built for movement, comfort, and everyday life.</p>
        <div className='hero-buttons'>
          <button className='btn btn-primary'>Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero