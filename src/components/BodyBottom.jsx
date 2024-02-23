import React from 'react'
import {RiArrowDownSLine, RiCheckboxCircleFill, RiStarSFill} from '@remixicon/react'

function BodyBottom() {
    return (
        <div className='body-bottom'>
        <div className='count'>4</div>
            <div className="left-side">
                <img src="./img/computer.png" alt="" />
                <p>CDK</p>
            </div>

            <div className="center">
                <div className="top-para">
                    <p>
                        <span>CDK Resposive Builder:</span>
                        An extensive library of widgets and apps, and detailed step-by-step guides
                    </p>
                </div>
                <span>Main Highlights</span>
                <div className="highlight-box">
                    <div className='highlight-box--first'>
                        <span>9.9</span>
                        <p>Build Responsive</p>
                    </div>
                    <div className='highlight-box--first'>
                        <span>8.9</span>
                        <p>Cool</p>
                    </div>
                    <div className='highlight-box--first'>
                        <span>8.9</span>
                        <p>Docs</p>
                    </div>
                </div>

                <div className='why-love'>
                    <p>Why we Love it</p>
                    <div>
                    <span><RiCheckboxCircleFill size={18}/></span>
                    <span>Documentation</span>
                    </div>
                    <div>
                    <span><RiCheckboxCircleFill size={18}/></span>
                    <span>Easy use</span>
                    </div>
                    <div>
                    <span><RiCheckboxCircleFill size={18}/></span>
                    <span>Out of box</span>
                    </div>
                </div>

                <span className='show-more'>Show more <RiArrowDownSLine size={24} /></span>
            </div>

            <div className="right-side">
                <div className='star-box'>
                    <span className='ratings'>9.1</span>
                    <p>Very Good</p>
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

export default BodyBottom