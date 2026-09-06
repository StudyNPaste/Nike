import React from 'react'
import hero from '../Assets/hero.mp4'

const Hero = () => {
  return (
    <div className='hero'>
      <div>
        <video autoPlay loop muted>
          <source src={hero} type="video/mp4" />
        </video>
      </div>
      <div>
        <h1>NO LIMITS. JUST MOVEMENT.</h1>
        <p>Discover the latest styles built for movement, comfort, and everyday life.</p>
      </div>
    </div>
  )
}

export default Hero