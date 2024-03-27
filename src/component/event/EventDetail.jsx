import React from 'react'
import Header from '../header/Header'
import InnerBanner from '../../pages/InnerBanner'
import EventDetailSection from '../../pages/EventDetailSection'
import Footer from '../footer/Footer'

const EventDetail = () => {
  return (
    <div class="main-page-wrapper">
    <Header />
        <InnerBanner title="NAME OF EVENTS" />
        <EventDetailSection/>
    <Footer />
</div>
  )
}

export default EventDetail
