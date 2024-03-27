import React from "react";
import LogoP1 from "../assets/images/logo/p-1.png";
import LogoP2 from "../assets/images/logo/p-2.png";
import LogoP3 from "../assets/images/logo/p-3.png";
import LogoP4 from "../assets/images/logo/p-4.png";
import LogoP9 from "../assets/images/logo/p-9.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const PartnerLogo = () => {
    const options = {
        items: 3,
        loop: true,
        margin: 10,
        nav: false, // Hide navigation arrows
        dots: false, // Hide pagination dots
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
      };

  const items = [
    <div key="1" className="item">
      <img src={LogoP1} alt="logo" />
    </div>,
    <div key="2" className="item">
      <img src={LogoP2} alt="logo" />
    </div>,
    <div key="3" className="item">
      <img src={LogoP3} alt="logo" />
    </div>,
    <div key="4" className="item">
      <img src={LogoP4} alt="logo" />
    </div>,
    <div key="5" className="item">
      <img src={LogoP9} alt="logo" />
    </div>,
  ];

  return (
    <div className="partent-logo-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 style={{ paddingTop: 60, textAlign: "center" }}>Our Centers</h2>
          </div>
          <div className="col-md-8">
            <div id="partner-logo">
              <OwlCarousel className="owl-theme" {...options}>
                {items}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogo;
