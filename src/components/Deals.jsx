import React from 'react'
import DealBox from './DealBox'

function Deals() {
  return (
    <div className='deal-section'>
        <p className='related-deals'>Related Deals you might like for</p>
        <div className="deal-boxes">
        <DealBox />
        <DealBox />
        <DealBox />
        </div>

        <div className="signup">
            <p>Sign up and get exclusive special deals</p>
            <div className='signup-input'>
                <div></div>
                <button className='signup-btn'>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Deals