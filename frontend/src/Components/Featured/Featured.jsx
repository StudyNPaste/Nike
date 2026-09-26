import React from 'react'
import './Featured.css'
import mens from '../Assets/mens.jpg'
import womens from '../Assets/womens.jpg'

const Featured = () => {
  return (
    <div className='homepage-featured'>
        <div className='homepage-womens'>
            <img src={womens} alt="Women's" />
            <div className='homepage-womens-text'>
                <h1>Womens</h1>
                <p>Performance and style built to move with you.</p>
                <button>Shop Women's</button>
            </div>
        </div>
        <div className='homepage-mens'>
            <img src={mens} alt="Men's" />
            <div className='homepage-mens-text'>
                <h1>Mens</h1>
                <p>Built for performance. Designed for every day.</p>
                <button>Shop Men's</button>
            </div>
        </div>
    </div>
  )
}

export default Featured