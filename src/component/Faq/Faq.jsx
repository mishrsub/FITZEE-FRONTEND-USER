import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import FaqSection from '../../pages/FaqSection'
import InnerBanner from '../../pages/InnerBanner'

const Faq = () => {
  return (
    <div class="main-page-wrapper">
      <Header />
      <InnerBanner title="FAQ & SUPPORT"/>
      <FaqSection/>
      <Footer />
    </div>
  )
}

export default Faq
