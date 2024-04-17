import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import InnerBanner from "../../pages/InnerBanner";
import Footer from "../footer/Footer";
import BlogDetailSection from "../../pages/BlogDetailSection";

const BlogDetail = () => {
    const [isHeaderHovered, setIsHeaderHovered] = useState(false);

    const handleHeaderHover = (isHovered) => {
      setIsHeaderHovered(isHovered);
    };
    return (
        <>
            <div class="main-page-wrapper">
            <Header onHeaderHover={handleHeaderHover} />
            <div className={`main-page-wrapper ${isHeaderHovered ? 'blur' : ''}`}>
                <InnerBanner title="BLOG DETAILS" />
                <BlogDetailSection />
            </div>
                <Footer />
            </div>
        </>
    );
};

export default BlogDetail;
