import React, { useEffect, useState } from "react";
import Home4 from "../assets/images/home/4.jpg";
import Home5 from "../assets/images/home/5.jpg";
import Home6 from "../assets/images/home/6.jpg";
import Home7 from "../assets/images/home/7.jpg";
import Home8 from "../assets/images/home/8.jpg";
import { getAllData } from "../react-query/api/Home";
import Loading from "./Loading";

const Testimonial = () => {
  const [apiData, setApiData] = useState([]);
  const {
    isLoading,
    error,
    newData: testimonial,
  } = getAllData(
    "http://35.154.95.255:8000/api/testimonial/getTestimonial",
    "testimonial"
  );

  useEffect(() => {
    if (!isLoading && !error && testimonial) {
      setApiData(testimonial);
    }
  }, [isLoading, error, testimonial]);

  if (isLoading) {
    return <Loading/>;
  }

  if (error) {
    return <h3>Error: {error.message}</h3>;
  }

  return (
    <div className="testimonial-styleOne">
      <div className="container">
        <div className="theme-title text-center">
          <h2>Our Testimonials</h2>
        </div>{" "}
        {/* /.theme-titlee */}
        <div
          id="testimonial-carousel-one"
          className="carousel slide"
          data-ride="carousel"
          data-interval={5000}
        >
          {/* carasoul Indicators */}
          <ol className="carousel-indicators">
            {apiData.map((val, i) => {
              return (
                <li
                  key={val._id}
                  data-target="#testimonial-carousel-one"
                  data-slide-to={i}
                  className={i === 0 ? "active tran3s" : "tran3s"}
                  title="fitjee"
                >
                  <img
                    src={`http://65.1.94.113:8000/uploads/${val.image}`}
                    alt=""
                  />
                </li>
              );
            })}
          </ol>
          <div className="main-wrapper">
            <div className="shadow" />
            {/* Wrapper for slides */}
            <div className="carousel-inner">
              {apiData.map((val, i) => (
                <div className={i === 0 ? "item active" : "item"} key={val._id}>
                  <img
                    src={`http://65.1.94.113:8000/uploads/${val.image}`}
                    alt=""
                  />
                  <h6>{val.name}</h6>
                  {val.rank && <span>{val.rank}</span>}
                  {val.rank && val.program && <br />}
                  {val.program && <span>{val.program}</span>}
                  {val.program && val.className && <br />}
                  {val.className && <span>{val.className}</span>}
                  {(val.program || val.className) && val.description && <br />}
                  {val.description && <p>{val.description}</p>}
                </div>
              ))}
            </div>
            {/* /.carousel-inner */}
            {/* Left and right controls */}
            <a
              className="left carousel-control"
              href="#testimonial-carousel-one"
              data-slide="prev"
            >
              <i className="fa fa-chevron-left" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#testimonial-carousel-one"
              data-slide="next"
            >
              <i className="fa fa-chevron-right" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>{" "}
          {/* /.main-wrapper */}
        </div>{" "}
        {/* /#testimonial-carousel-one */}
      </div>{" "}
      {/* /.container */}
    </div>
  );
};

export default Testimonial;
