import React, { useState } from 'react'
import Header from '../header/Header'
import InnerBanner from '../../pages/InnerBanner'
import Abouts from '../../pages/About'
import Footer from '../footer/Footer'

const About = () => {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

    const handleHeaderHover = (isHovered) => {
      setIsHeaderHovered(isHovered);
    };
  return (
    <>  
      <div className="main-page-wrapper">
        <Header onHeaderHover={handleHeaderHover} />
        <div className={`main-page-wrapper ${isHeaderHovered ? 'blur' : ''}`}>
            <InnerBanner title="ABOUT US"/>
            <Abouts/>
            <button className="scroll-top tran3s">
              <i className="fa fa-angle-up" aria-hidden="true"></i>
            </button>
        </div>
         <Footer/>
      </div>
    </>
  )
}

export default About
