import React from 'react'
import './NewReleases.css'
import running from '../Assets/running.jpg'
import workout from '../Assets/training.jpg'
import training from '../Assets/trainingnike.png'

const NewReleases = () => {
  return (
    <div className='training'>
        <img className='training-nike' src={training} alt="Training" />
        <div className='new-releases'>
            <div className='new-releases-left'>
                    <img className='new-releases-img' src={running} alt="New Release" />
                    <div className='new-release-shade'>
                        <div className='new-release-text'>
                            <h1>Run Without Limits</h1>
                            <p>Lightweight comfort and responsive performance for every mile.</p>
                            <button>Shop Running</button>
                        </div>
                    </div>
            </div>
            <div className='new-releases-right'>
                    <img className='new-releases-img' src={workout} alt="New Release" />
                    <div className='new-release-shade'>
                        <div className='new-release-text'>
                            <h1>Train Your Way</h1>
                            <p>Designed to move with you from your first rep to your final set.</p>
                            <button>Shop Training</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default NewReleases