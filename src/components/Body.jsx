import React from 'react'
import { RiStarSFill, RiArrowDownSLine } from '@remixicon/react'

function Body({
    boldHead,
    headPara,
    whatYouGet,
    choice,
    rating,
    icon,
    review,
    hide,
    count
}) {
    return (
        <div className='page-body'>
            <div className={`choice ${hide}`}>
                <span>{icon}</span>
                {choice}
            </div>
            <div className='count'>{count}</div>
            <div className="left-side">
                <img src="./img/computer.png" alt="" />
                <p>Builder 1</p>
            </div>

            <div className="center">
                <div className="top-para">
                    <p>
                        <span>{boldHead}</span>
                        {headPara}
                    </p>
                </div>
                <span>Main Highlights</span>
                <p className='bottom-para'>{whatYouGet}</p>
                <span className='show-more'>Show more <RiArrowDownSLine size={24} /></span>
            </div>

            <div className="right-side">
                <div className='star-box'>
                    <span className='ratings'>{rating}</span>
                    <p>{review}</p>
                    <div className="stars">
                        <span><RiStarSFill size={16} color='#FFB80F' /></span>
                        <span><RiStarSFill size={16} color='#FFB80F' /></span>
                        <span><RiStarSFill size={16} color='#FFB80F' /></span>
                        <span><RiStarSFill size={16} color='#FFB80F' /></span>
                        <span><RiStarSFill size={16} color='#FFB80F' /></span>
                    </div>
                </div>

                <button className='view-btn'>
                    View
                </button>
            </div>
        </div>
    )
}

export default Body