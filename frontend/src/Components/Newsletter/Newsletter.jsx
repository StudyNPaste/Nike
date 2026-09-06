import React from 'react'

const Newsletter = () => {
    
  return (
    <div className='newsletter'>
        <div>
            <h2>Subscribe to our Newsletter</h2>
            <p>Stay updated with our latest news and offers!</p>
            <form>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Newsletter