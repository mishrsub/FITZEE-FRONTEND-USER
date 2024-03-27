import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import InnerBanner from "../../pages/InnerBanner";
import ResultSection from "../../UI/ResultSection";

const Result = () => {
    return (
        <div class="main-page-wrapper">
            <Header />
                <InnerBanner title="OUR RESULT" />
                <ResultSection />
            <Footer />
        </div>
    );
};

export default Result;
