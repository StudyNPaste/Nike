import React from 'react'
import sports from '../Assets/sports.mp4'
const Sports = () => {
  return (
    <div className='sports'>
          <div>
            <video autoPlay loop muted>
              <source src={sports} type="video/mp4" />
            </video>
          </div>
          <div>
            <h1>PUSH YOUR LIMITS</h1>
            <p>Performance-driven styles designed for wherever your movement takes you.</p>
          </div>
        </div>
  )
}

export default Sports