import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide3 from "../assets/images/home/slide-3.jpg";
import Slide4 from "../assets/images/home/slide-4.jpg";

const CarouselComponent = () => {
  return (
    <Carousel
      showArrows={true} // Set to true to display navigation arrows
      showStatus={false}
      showThumbs={false}
      infiniteLoop
      autoPlay
      interval={5000}
    >
      <div>
        <img src={Slide3} alt="FIITJEE Mumbai" />
        {/* <div class="center_bg">
    <h1 class="wow fadeInUp" data-wow-delay="0.2s">FIITJEE <span class="s-color">Mumbai</span></h1>
    <h3 class="wow fadeInUp" data-wow-delay="0.2s">Kandivali Center</h3>
</div> */}

      </div>
      <div>
        <img src={Slide4} alt="FIITJEE Mumbai" />
        {/* <div className="legend">
          <h1>FIITJEE Mumbai</h1>
          <h3>Kandivali Center</h3>
        </div> */}
      </div>
      {/* Add more slides as needed */}
    </Carousel>
  );
};

export default CarouselComponent;
