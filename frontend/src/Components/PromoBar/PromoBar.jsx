import React from 'react'
import './PromoBar.css'
import logo from '../../assets/.jpg'

const Promobar = () => {
  return (
    <div className="promobar">
        <div>
            <p>Free shipping on orders over $50!</p>
            <p>25% off your next purchase!</p>
            <p>Code: PROMO25</p>
        </div>
    </div>
  )
}

export default Promobar