import React from 'react'
import Header from '../header/Header'
import InnerBanner from '../../pages/InnerBanner'
import Abouts from '../../pages/About'
import Footer from '../footer/Footer'

const About = () => {
  return (
    <>  
      <div className="main-page-wrapper">
         <Header/>
            <InnerBanner title="ABOUT US"/>
            <Abouts/>
            <button className="scroll-top tran3s">
              <i className="fa fa-angle-up" aria-hidden="true"></i>
            </button>
         <Footer/>
      </div>
    </>
  )
}

export default About
