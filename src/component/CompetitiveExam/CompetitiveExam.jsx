import React, { useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import InnerBanner from '../../pages/InnerBanner'
import CompetitiveExamSection from '../../pages/CompetitiveExamSection'

const CompetitiveExam = () => {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  const handleHeaderHover = (isHovered) => {
    setIsHeaderHovered(isHovered);
  };
  return (
    <>
     <div class="main-page-wrapper">
     <Header onHeaderHover={handleHeaderHover} />
        <div className={`main-page-wrapper ${isHeaderHovered ? 'blur' : ''}`}>
            <InnerBanner title="COMPEITIVE EXAM"/>
            <CompetitiveExamSection/>
        </div>
        <Footer/>
     </div>
    </>
  )
}

export default CompetitiveExam
