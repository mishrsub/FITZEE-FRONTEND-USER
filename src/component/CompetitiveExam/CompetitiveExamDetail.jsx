import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import InnerBanner from '../../pages/InnerBanner'
import CompetitiveExamDetailSection from '../../pages/CompetitiveExamDetailSection'

const CompetitiveExamDetail = () => {
  return (
    <>
     <div class="main-page-wrapper">
     <Header/>
        <InnerBanner title="COMPEITIVE EXAM"/>
        <CompetitiveExamDetailSection/>
     <Footer/> 
     </div>
    </>
  )
}

export default CompetitiveExamDetail
