import React from 'react'

function DealBox() {
    return (
        <div className="deal-box">
            <div className="image-sec">
                <img src="./img/computer.png" alt="" />
            </div>

            <div className="offer">
                <span className='discount'>20% off</span>
                <span>Limited Time</span>
            </div>

            <p className='webbuilder'>Webbuilder 1</p>
            <p className='wix-support'>Computer Modern clasic with wix support</p>

            <div className="price">
                <span className='new-price'>$39.96</span>
                <span className='old-price'>$49.96</span>
                <span className='less-discount'>(20% off)</span>
            </div>

            <button className='view-btn'>
                View Deal
            </button>
        </div>
    )
}

export default DealBox