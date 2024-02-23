import React from 'react'
import {RiSearchLine} from '@remixicon/react'

function Navbar() {
  return (
    <div className="navbar">
          <div>
            <RiSearchLine className='search' />
            <input type="text" />
          </div>
          <h3>Categories</h3>
          <h3>Website Builders</h3>
          <h3>Today's Deals</h3>
        </div>
  )
}

export default Navbar