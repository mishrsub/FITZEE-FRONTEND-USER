import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import InnerBanner from "../../pages/InnerBanner";
import BlogSection from "../../pages/BlogSection";

const Blog = () => {
    const [isHeaderHovered, setIsHeaderHovered] = useState(false);

    const handleHeaderHover = (isHovered) => {
      setIsHeaderHovered(isHovered);
    };
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div class="main-page-wrapper">
            <Header onHeaderHover={handleHeaderHover} />
            <div className={`main-page-wrapper ${isHeaderHovered ? 'blur' : ''}`}>
            <InnerBanner title="OUR BLOG" />
            <BlogSection />
            </div>
            <Footer />
        </div>
    );
};

export default Blog;
