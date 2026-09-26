import React from 'react'
import './CategorySection.css'
import shoes from '../Assets/shoes.jpg'
import clothes from '../Assets/clothes.jpg'
import kids from '../Assets/kids1.jpg'

const CategorySection = () => {
  return (
    <div className='category'>
        <h1 className='category-title'>SHOP BY CATEGORY</h1>
        <div className='category-sections'>
            <div className='all-shoes categories'>
                <img src={shoes} alt="Shoes" />
                <h2>Shop Shoes</h2>
            </div>
            <div className='all-clothes categories'>
                <img src={clothes} alt="Clothing" />
                <h2>Shop Clothing</h2>
            </div>
            <div className='all-kids categories'>
                <img src={kids} alt="Kids" />
                <h2>Shop Kids</h2>
            </div>
        </div>
    </div>
    
  )
}

export default CategorySection