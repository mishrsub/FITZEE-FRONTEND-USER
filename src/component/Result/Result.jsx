import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import InnerBanner from "../../pages/InnerBanner";
import ResultSection from "../../UI/ResultSection";

const Result = () => {
    const [isHeaderHovered, setIsHeaderHovered] = useState(false);

    const handleHeaderHover = (isHovered) => {
      setIsHeaderHovered(isHovered);
    };
    return (
        <div class="main-page-wrapper">
             <Header onHeaderHover={handleHeaderHover} styleData={{zIndex:"999"}}/>
            <div className={`main-page-wrapper ${isHeaderHovered ? 'blur' : ''}`}>
                <InnerBanner title="OUR RESULT" />
                <ResultSection />
            </div>
            <Footer />
        </div>
    );
};

export default Result;
