import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide3 from "../assets/images/home/slide-3.jpg";
import Slide4 from "../assets/images/home/slide-4.jpg";

const CarouselComponent = () => {
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
      </div>
        </div>{" "}
        {/* /.container */}
      </div>{" "}
      {/* /.camera_caption */}
    </div>
  </div>
  
  );
};

export default CarouselComponent;

{
  /* <Carousel
showArrows={true} // Set to true to display navigation arrows
showStatus={false}
showThumbs={false}
infiniteLoop
autoPlay
interval={5000}
>
<div>
  <img src={Slide3} alt="FIITJEE Mumbai" />
</div>
<div>
  <img src={Slide4} alt="FIITJEE Mumbai" />
</div>
</Carousel> */
}
