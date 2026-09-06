import React from 'react'
import './Featured.css'
import mens from '../Assets/mens.jpg'
import womens from '../Assets/womens.jpg'

const Featured = () => {
  return (
    <div>
        <div>
            <div>
                <img src={womens} alt="Women's" />
            </div>
            <div>
                <button>Shop Women's</button>
            </div>
        </div>
        <div>
            <div>
                <img src={mens} alt="Men's" />
            </div>
            <div>
                <button>Shop Men's</button>
            </div>
        </div>
    </div>
  )
}

export default Featured