import React from 'react'
import running from '../Assets/running.jpg'
import training from '../Assets/training.jpg'

const NewReleases = () => {
  return (
    <div className='new-releases'>
        <div className='new-releases-left'>
            <div>
                <img src={running} alt="New Release" />
                <div className='new-release-shade'></div>
                <div className='new-release-text'>
                    <h1>Run Without Limits</h1>
                    <p>Lightweight comfort and responsive performance for every mile.</p>
                    <button>Shop Running</button>
                </div>
            </div>
        </div>
        <div className='new-releases-right'>
            <div>
                <img src={training} alt="New Release" />
                <div className='new-release-shade'></div>
                <div className='new-release-text'>
                    <h1>Train Your Way</h1>
                    <p>Designed to move with you from your first rep to your final set.</p>
                    <button>Shop Training</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewReleases