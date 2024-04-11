import React, { useState } from 'react'
import Header from '../header/Header'
import InnerBanner from '../../pages/InnerBanner'
import EventSection from '../../pages/EventSection'
import Footer from '../footer/Footer'

const Event = () => {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  const handleHeaderHover = (isHovered) => {
    setIsHeaderHovered(isHovered);
  };
  return (
    <div class="main-page-wrapper">
        <Header onHeaderHover={handleHeaderHover} />
        <div className={`main-page-wrapper ${isHeaderHovered ? 'blur' : ''}`}>
            <InnerBanner title={"WORKSHOPS"}/>
            <EventSection/>
        </div>
        <Footer />
  </div>
  )
}

export default Event
