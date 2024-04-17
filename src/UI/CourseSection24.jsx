import React, { useEffect } from "react";
import Course4 from "../assets/images/course/4.jpg";
import FitjeeCourse4 from "../assets/images/course/fiitjee_course-4.jpg";
import FitjeeCourse1 from "../assets/images/course/fiitjee_course-1.jpg";
import FitjeeCourse2 from "../assets/images/course/fiitjee_course-2.jpg";
import FitjeeCourse3 from "../assets/images/course/fiitjee_course-3.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const CourseSection = () => {
  const options = {
    items: 3,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: 'fadeOut', // Add fadeOut animation
    animateIn: 'fadeIn',    // Add fadeIn animation
    responsive:{
      0:{
          items:1
      },
      450:{
          items:2
      },
      600:{
          items:3
      },
      992:{
          items:3
      }
  }
  };

  const items = [
    <div key="1" className="single-course" style={{ marginRight: 25 }}>
      <div className="image-box">
        <img src={FitjeeCourse1} alt="" />
      </div>
      <div className="text">
        <div className="image">
          <img src={Course4} alt="" />
        </div>
        <div className="name free clearfix">
          <h6 className="float-left">Class VI</h6>
          <span className="p-bg-color float-right">Free</span>
        </div>
        <h5>
          <a href="course_details.php" className="tran3s">
            Math Genie
          </a>
        </h5>
        <ul className="clearfix">
          <li className="float-left">
            <i className="flaticon-people" />
            <a href="#" className="tran3s">
              2,680
            </a>
          </li>
          <li className="float-left">
            <i className="flaticon-comments" />
            <a href="#" className="tran3s">
              13
            </a>
          </li>
          <li className="float-right">
            <i className="flaticon-star" />
            <a href="#" className="tran3s">
              3
            </a>
          </li>
        </ul>
      </div>
    </div>,
    <div key="2" className="single-course" style={{ marginRight: 25 }}>
      <div className="image-box">
        <img src={FitjeeCourse2} alt="" />
      </div>
      <div className="text">
        <div className="image">
          <img src={Course4} alt="" />
        </div>
        <div className="name paid clearfix">
          <h6 className="float-left">Class VI</h6>
          <span className="p-bg-color float-right">Paid</span>
        </div>
        <h5>
          <a href="#" className="tran3s">
            Little Genie One Year Foundation Program (N)
          </a>
        </h5>
        <ul className="clearfix">
          <li className="float-left">
            <i className="flaticon-people" />
            <a href="#" className="tran3s">
              2,680
            </a>
          </li>
          <li className="float-left">
            <i className="flaticon-comments" />
            <a href="#" className="tran3s">
              13
            </a>
          </li>
          <li className="float-right">
            <i className="flaticon-star" />
            <a href="#" className="tran3s">
              3
            </a>
          </li>
        </ul>
      </div>
    </div>,
    <div key="3" className="single-course" style={{ marginRight: 25 }}>
      <div className="image-box">
        <img src={FitjeeCourse3} alt="" />
      </div>
      <div className="text">
        <div className="image">
          <img src={Course4} alt="" />
        </div>
        <div className="name free clearfix">
          <h6 className="float-left">Class VI</h6>
          <span className="p-bg-color float-right">Free</span>
        </div>
        <h5>
          <a href="#" className="tran3s">
            e-LITTLE GENIE little Genie-One Year Live Online Foundation Program
          </a>
        </h5>
        <ul className="clearfix">
          <li className="float-left">
            <i className="flaticon-people" />
            <a href="#" className="tran3s">
              2,680
            </a>
          </li>
          <li className="float-left">
            <i className="flaticon-comments" />
            <a href="#" className="tran3s">
              13
            </a>
          </li>
          <li className="float-right">
            <i className="flaticon-star" />
            <a href="#" className="tran3s">
              3
            </a>
          </li>
        </ul>
      </div>
    </div>,
    <div key="4" className="single-course" style={{ marginRight: 25 }}>
      <div className="image-box">
        <img src={FitjeeCourse4} alt="" />
      </div>
      <div className="text">
        <div className="image">
          <img src={Course4} alt="" />
        </div>
        <div className="name paid clearfix">
          <h6 className="float-left">Class VI</h6>
          <span className="p-bg-color float-right">Paid</span>
        </div>
        <h5>
          <a href="#" className="tran3s">
            e-Maths Genie
          </a>
        </h5>
        <ul className="clearfix">
          <li className="float-left">
            <i className="flaticon-people" />
            <a href="#" className="tran3s">
              2,680
            </a>
          </li>
          <li className="float-left">
            <i className="flaticon-comments" />
            <a href="#" className="tran3s">
              13
            </a>
          </li>
          <li className="float-right">
            <i className="flaticon-star" />
            <a href="#" className="tran3s">
              3
            </a>
          </li>
        </ul>
      </div>
    </div>,
  ];

  return (
    <div className="popular-course">
      <div className="container">
        <div className="theme-title">
          {/* <h6>Featured Course</h6> */}
          <h2>Our Course</h2>
          <a href="course.php" className="tran3s">
            See All Course
          </a>
        </div>{" "}
        {/* /.theme-title */}
        <div className="row">
          <div className="instructor-slider">
            <OwlCarousel className="owl-theme" {...options}>
              {items}
            </OwlCarousel>
          </div>{" "}
          {/* /.col- */}
        </div>{" "}
        {/* /.row */}
      </div>{" "}
      {/* /.container */}
    </div>
  );
};

export default CourseSection;
