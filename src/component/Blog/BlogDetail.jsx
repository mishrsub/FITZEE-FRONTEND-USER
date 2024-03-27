import React, { useEffect } from "react";
import Header from "../header/Header";
import InnerBanner from "../../pages/InnerBanner";
import Footer from "../footer/Footer";
import BlogDetailSection from "../../pages/BlogDetailSection";

const BlogDetail = () => {
    return (
        <>
            <div class="main-page-wrapper">
                <Header />
                <InnerBanner title="BLOG DETAILS" />
                <BlogDetailSection />
                <Footer />
            </div>
        </>
    );
};

export default BlogDetail;
