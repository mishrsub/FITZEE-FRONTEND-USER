import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import InnerBanner from '../../pages/InnerBanner'
import NewsSection from '../../pages/NewsSection'

const News = () => {
  return (
    <>
     <div class="main-page-wrapper">
        <Header/>
            <InnerBanner title="NEWS"/>
            <NewsSection/>
        <Footer/> 
     </div>
    </>
  )
}

export default News
