import React, { useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import InnerBanner from "../../pages/InnerBanner";
import BlogSection from "../../pages/BlogSection";

const Blog = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div class="main-page-wrapper">
            <Header />
            <InnerBanner title="OUR BLOG" />
            <BlogSection />
            <Footer />
        </div>
    );
};

export default Blog;
