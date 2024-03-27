import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import InnerBanner from '../../pages/InnerBanner'
import Contacts from '../../pages/Contact'

const Contact = () => {
  return (
    <>
      <div className="main-page-wrapper">
        <Header/>
          <InnerBanner title="CONTACT US"/>
          <Contacts/>
        <Footer/> 
      </div>
    </>
  )
}

export default Contact
