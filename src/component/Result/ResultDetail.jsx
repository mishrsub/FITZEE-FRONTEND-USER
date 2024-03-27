import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import InnerBanner from "../../pages/InnerBanner";
import ResultDetailSection from "../../UI/ResultDetailSection";
import Gallery from "./Gallery";

const ResultDetail = () => {
    return (
        <>
            <Header />
            <InnerBanner title="HOMI BHABHA EXAM RESULT" />
            <Gallery />
            <ResultDetailSection />
            <Footer />
        </>
    );
};

export default ResultDetail;
