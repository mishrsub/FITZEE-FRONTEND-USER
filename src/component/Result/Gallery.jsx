import React from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import "./gallery.css";

const Gallery = ({ children }) => {
    // console.log("Children: ", data);

    const settings = {
        plugins: [lgZoom, lgVideo],
        mode: "lg-fade",
    };

    return (
        <div>
            <LightGallery settings={settings}>{children}</LightGallery>
        </div>
    );
};

export default Gallery;
