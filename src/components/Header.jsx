import React from 'react'
import { RiCheckboxCircleLine, RiInformationLine, RiArrowDownSLine } from '@remixicon/react'


function Header() {
  return (
    <div className="header">
    <div>
      <h1>Best Website builders in the US</h1>
    </div>

    <div className='header-middle'>
      <div>
        <RiCheckboxCircleLine className='symbol' />
        <span>Last Updated - February 20, 2020</span>            
      </div>
      <div>
        <RiInformationLine className='symbol' />
        <span>Advertising Disclosure</span>             
      </div>
      <div className='header-right'>
        <span>Top Relevant</span>  
        <RiArrowDownSLine />          
      </div>
    </div>

    <div className='header-feature'>
        <span>Tools</span>
        <span>AWS Builder</span>
        <span>Start Build</span>
        <span>Build Supplies</span>
        <span>Tooling</span>
        <span>BlueHosting</span>
    </div>

    <div className='header-bottom'>
      <span>Home</span>
      <span>{'>'}</span>
      <span>Hosting for all</span>
      <span>{'>'}</span>
      <span>Hosting</span>
      <span>{'>'}</span>
      <span>Hosting5</span>
      <span>{'>'}</span>
      <span>Hosting6</span>
    </div>
  </div>
  )
}

export default Header