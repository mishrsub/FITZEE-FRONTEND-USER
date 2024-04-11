import React, { useState, useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Slide3 from "../assets/images/home/slide-3.jpg";
import Slide4 from "../assets/images/home/slide-4.jpg";


const Banner = () => {
  return (
    <div id="theme-main-banner" className="banner-one">
    <div data-src={Slide3}>
      <div className="camera_caption">
        <div className="container">
          <div className="center_bg">
            <h1 className="wow fadeInUp animated" data-wow-delay="0.2s">
              {" "}
              FIITJEE <span className="s-color">Mumbai</span>
            </h1>
            <h3 className="wow fadeInUp animated">Andheri Center</h3>
        </div>
        </div>{" "}
        {/* /.container */}
      </div>{" "}
      {/* /.camera_caption */}
    </div>
    <div data-src={Slide4}>
      <div className="camera_caption">
        <div className="container">
          <div className="center_bg">
            <h1 className="wow fadeInUp animated" data-wow-delay="0.2s">
              {" "}
              FIITJEE <span className="s-color">Mumbai</span>
            </h1>
            <h3 className="wow fadeInUp animated">Kandivali Center</h3>
            {/* <a href="javascript:void(0);" class="tran3s wow fadeInLeft animated banner-button" data-wow-delay="0.3s">Start Now</a>
                <a href="javascript:void(0);" class="tran3s wow fadeInRight animated button-one banner-button hvr-trim" data-wow-delay="0.3s">Know More</a> */}
          </div>
        </div>{" "}
        {/* /.container */}
      </div>{" "}
      {/* /.camera_caption */}
    </div>
  </div>
  
  );
};

export default Banner;
