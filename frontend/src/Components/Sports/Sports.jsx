import React from 'react'
import "./Sports.css"
import sports from '../Assets/sports.mp4'

const Sports = () => {
  return (
    <div className='sports'>
          <div className='sports-video'>
            <video id='sports-video' autoPlay loop muted>
              <source src={sports} type="video/mp4" />
            </video>
          </div>
          <div className='sports-content'>
            <h1>PUSH YOUR LIMITS</h1>
            <p>Gear up for every move, every challenge, and every moment on the field or court.</p>
            <button>Shop Sports</button>
          </div>
        </div>
  )
}

export default Sports