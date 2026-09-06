import React from 'react'
import shoes from '../Assets/shoes.jpg'
import clothes from '../Assets/clothes.jpg'
import kids from '../Assets/kids1.jpg'

const CategorySection = () => {
  return (
    <div>
        <div>
            <div>
                <img src={shoes} alt="Shoes" />
            </div>
            <div>
                <button>Shop Shoes</button>
            </div>
        </div>
        <div>
            <div>
                <img src={clothes} alt="Clothing" />
            </div>
            <div>
                <button>Shop Clothing</button>
            </div>
        </div>
        <div>
            <div>
                <img src={kids} alt="Kids" />
            </div>
            <div>
                <button>Shop Kids</button>
            </div>
        </div>
    </div>
  )
}

export default CategorySection