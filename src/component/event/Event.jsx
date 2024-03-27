import React from 'react'
import Header from '../header/Header'
import InnerBanner from '../../pages/InnerBanner'
import EventSection from '../../pages/EventSection'
import Footer from '../footer/Footer'

const Event = () => {
  return (
    <div class="main-page-wrapper">
        <Header />
            <InnerBanner title={"WORKSHOPS"}/>
            <EventSection/>
        <Footer />
  </div>
  )
}

export default Event
