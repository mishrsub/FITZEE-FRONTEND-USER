import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import InnerBanner from "../../pages/InnerBanner";
import ResultDetailSection from "../../UI/ResultDetailSection";
import Gallery from "./Gallery";

const ResultDetail = () => {
    const [isHeaderHovered, setIsHeaderHovered] = useState(false);

    const handleHeaderHover = (isHovered) => {
      setIsHeaderHovered(isHovered);
    };

    return (
        <>
            <Header onHeaderHover={handleHeaderHover} />
            <div className={`main-page-wrapper ${isHeaderHovered ? 'blur' : ''}`}>
            <InnerBanner title="HOMI BHABHA EXAM RESULT" />
            <Gallery />
            <ResultDetailSection />
            </div>
            <Footer />
        </>
    );
};

export default ResultDetail;
