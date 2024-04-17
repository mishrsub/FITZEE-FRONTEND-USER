import React, { useState } from 'react'
import Header from '../header/Header'
import InnerBanner from '../../pages/InnerBanner'
import EventDetailSection from '../../pages/EventDetailSection'
import Footer from '../footer/Footer'

const EventDetail = () => {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  const handleHeaderHover = (isHovered) => {
    setIsHeaderHovered(isHovered);
  };
  return (
    <div class="main-page-wrapper">
    <Header onHeaderHover={handleHeaderHover} />
    <div className={`main-page-wrapper ${isHeaderHovered ? 'blur' : ''}`}>
        <InnerBanner title="NAME OF EVENTS" />
        <EventDetailSection/>
    </div>
    <Footer />
</div>
  )
}

export default EventDetail
