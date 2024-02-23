import React from 'react'
import {RiArrowDownSLine} from '@remixicon/react'

function Footer() {
  return (
    <div className='footer'>
        <div className="categories">
            <p>Categories</p>
            <ul>
                <li>Web builder</li>
                <li>Hosting</li>
                <li>Data center</li>
                <li>Robotic-Automation</li>
            </ul>
          </div>
          <div className="contact">
            <p>Contatcts</p>
        <ul>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of service</li>
                <li>Categories</li>
                <li>About</li>
            </ul>
        </div>
        <div className="us">
            <span>United States</span>
            <span><RiArrowDownSLine /></span>
             </div>
    </div>
  )
}

export default Footer