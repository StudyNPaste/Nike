import React from 'react'

const Trending = () => {
    const trendingItems = [
        { id: 1, name: 'Graphic Tees', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Running Shoes', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Casual Pants', image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Hoodies', image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Sneakers', image: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Jackets', image: 'https://via.placeholder.com/150' },
    ];
  return (
    <div>
        <div className='trending'>
            <h2>Trending Items</h2>
            <p>Check out our latest arrivals!</p>
        </div>
        <div>
            <div>
                {trendingItems.map(item => (
                    <div key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Trending