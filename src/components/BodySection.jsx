import React from 'react'
import Body from './Body'
import { RiTrophyLine, RiVipDiamondLine } from '@remixicon/react'


function BodySection() {
  return (
    <>
    <Body 
        boldHead = {'WixPro 72-Inch Responsive Website Builder -'}
        headPara = {'Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)'}
        whatYouGet = {'[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.'}
        choice = {'Best Choice'}
        rating = {9.8}
        review = {'Exceptional'}
        icon = {<RiTrophyLine />}
        count = {1}
        />

        <Body 
        boldHead = {'SiteCraft 68-Inch Ultimate Web Design Studio -'}
        headPara = {'Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)'}
        whatYouGet = {'[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.'}
        choice = {'Best Value'}
        rating = {9.5}
        review = {'Excellent'}
        icon = {<RiVipDiamondLine />}
        count = {2}
        />
        
        <Body 
        boldHead = {'WixPro 72-Inch Responsive Website Builder -'}
        headPara = {'Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)'}
        whatYouGet = {'[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.'}
        rating = {9.3}
        review = {'Exceptional'}
        hide = {'hide'}
        count = {3}
        />

    </>
  )
}

export default BodySection