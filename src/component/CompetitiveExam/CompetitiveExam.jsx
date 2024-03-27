import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import InnerBanner from '../../pages/InnerBanner'
import CompetitiveExamSection from '../../pages/CompetitiveExamSection'

const CompetitiveExam = () => {
  return (
    <>
     <div class="main-page-wrapper">
        <Header/>
            <InnerBanner title="COMPEITIVE EXAM"/>
            <CompetitiveExamSection/>
        <Footer/>
     </div>
    </>
  )
}

export default CompetitiveExam
