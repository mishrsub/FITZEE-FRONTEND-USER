import React, { useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import InnerBanner from '../../pages/InnerBanner'
import Contacts from '../../pages/Contact'

const Contact = () => {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  const handleHeaderHover = (isHovered) => {
    setIsHeaderHovered(isHovered);
  };
  return (
    <>
      <div className="main-page-wrapper">
      <Header onHeaderHover={handleHeaderHover} />
      <div className={`main-page-wrapper ${isHeaderHovered ? 'blur' : ''}`}>
          <InnerBanner title="CONTACT US"/>
          <Contacts/>
      </div>
        <Footer/> 
      </div>
    </>
  )
}

export default Contact
