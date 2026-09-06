import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import favorites from '../Assets/favorites.png'
import cart from '../Assets/cart.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-container'>
        <div className='logo'>
          <img id="logo" src={logo} alt="Logo" />
        </div>
        <div className='nav-links'>
          <ul>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">Jordan</a></li>
            <li><a href="#">Back to School</a></li>
            <li><a href="#">Sale</a></li>
          </ul>
        </div>
        <div className='search-cart'>
          <input id="search" type="text" placeholder="Search..." />
          <div className='cart'>
            <a href="#" className='icon-link' aria-label='Favorites'>
              <img id='favorites' src={favorites} alt="Favorites" />
            </a>
            <a href="#" className='icon-link' aria-label='Cart'>
              <img id='cart' src={cart} alt="Cart" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar