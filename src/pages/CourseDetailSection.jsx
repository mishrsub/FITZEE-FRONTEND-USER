import React, { useState } from "react";
import FitjeeBanner1 from "../assets/images/home/fiitjee_banner-1.jpg";
import FitjeeBanner2 from "../assets/images/home/fiitjee_banner-2.jpg";
import FitjeeBanner3 from "../assets/images/home/fiitjee_banner-3.jpg";
import Course30 from "../assets/images/course/30.jpg";
import Course31 from "../assets/images/course/31.jpg";
import Course32 from "../assets/images/course/32.jpg";
import Course24 from "../assets/images/course/24.jpg";
import Course25 from "../assets/images/course/25.jpg";
import Course26 from "../assets/images/course/26.jpg";
import Course27 from "../assets/images/course/27.jpg";
import Blog4 from "../assets/images/blog/4.jpg";
import Blog5 from "../assets/images/blog/5.jpg";
import Blog6 from "../assets/images/blog/6.jpg";
import "../assets/external-css/coursedetail.css";
import { GiveReview } from "../react-query/api/Review";
import { Bounce, toast } from "react-toastify";

const CourseDetailSection = ({ getData }) => {

  console.log('====================================');
  console.log("GETTING DATA ----> ",getData);
  console.log('====================================');

  // 65ba25db3ce7570cd4f51584/65ba2b591bd7713abd353413
  const [review, setReview] = useState({
    name: "",
    email: "",
    programName: "",
    message: "",
    phone: "",
    rating: 0,
  });

  const totalReviewAndPercentage = (rating) => {
    const reviews = getData?.matchedSubprogram?.review;

    if (!reviews) {
      console.error("No reviews available.");
      return { ratingPerc: 0, review: 0 };
    }

    const total_review_according_star = reviews.filter(
      (val) => val.rating === rating
    );

    console.log("total_review_according_star: ", total_review_according_star);

    const ratingPerc =
      Math.floor((total_review_according_star?.length / reviews.length) * 100) ||
      0;
    console.log("rating percentage: ", ratingPerc);

    return { ratingPerc, review: total_review_according_star.length };
  };

  const reviewMutation = GiveReview();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Trigger the mutation by calling the mutate function with the data
    reviewMutation.mutate({
      ...review,
      programId: getData.programId,
      subprogramId: getData.subProgramId,
    });
    console.log(review);

    setReview({
      name: "",
      email: "",
      programName: "",
      message: "",
      phone: "",
      rating: 0,
    });

    toast.success("✔ Review Added Successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleStarClick = (clickedRating) => {
    console.log(clickedRating);
    setReview({ ...review, rating: clickedRating });
  };

  return (
    <>
      <div className="course-details" key={getData?._id}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-xs-12">
              <div className="details-wrapper">
                <div className="course-title">
                  <h2
                    style={{ textTransform: "capitalize" }}
                  >{`${getData?.matchedSubprogram?.name} - ${getData?.name}`}</h2>
                  <span>
                    For Students Presently in Class V (Going to VI in the year
                    2024)
                  </span>
                </div>{" "}
                {/* /.course-title */}
                <div className="course-info row">
                  <div className="col-xs-4">
                    <div>
                      <i className="flaticon-time" />
                      <p>Syllabus Covered For</p>
                      <b>{getData?.syllabusCovered}</b>
                    </div>
                  </div>
                  <div className="col-xs-4">
                    <div>
                      <i className="flaticon-bookmark" />
                      <p>Subjects tought</p>
                      <b>
                        {getData?.subjectTaught?.length > 0 &&
                          getData?.subjectTaught.map((val) => `${val}, `)}
                      </b>
                    </div>
                  </div>
                  <div className="col-xs-4">
                    <div>
                      <i className="flaticon-star" />
                      <p>Goals</p>
                      <b>
                        {getData?.goals?.length > 0 &&
                          getData?.goals.map((val) => `${val}, `)}
                      </b>
                    </div>
                  </div>
                </div>
                <div className="testimonial-stylethree">
                  <div
                    id="testimonial-carousel-one"
                    className="carousel slide"
                    data-ride="carousel"
                    data-interval={5000}
                  >
                    <div className="main-wrapper">
                      {/* Wrapper for slides */}
                      <div className="carousel-inner">
                        {getData?.programDetailImg?.length > 0 &&
                          getData?.programDetailImg.map((val, index) => (
                            <div
                              key={val}
                              className={`item ${index === 0 ? "active" : ""}`}
                            >
                              <img
                                src={`http://localhost:8000/uploads/${val}`}
                                alt=""
                              />
                            </div>
                          ))}
                      </div>
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
                    </div>
                  </div>
                </div>
                <h3 style={{ paddingTop: 35 }}>{getData?.programBrief}</h3>
                <p className="p1">{getData?.programDescription}</p>
                <div className="learn-list"></div>
                <div className="curriculum-panel">
                  <div
                    className="panel-group theme-accordion"
                    id="accordionTwo"
                  >
                    {getData?.programPoint?.length > 0 &&
                      getData?.programPoint.map((val, i) => (
                        <div className="panel" key={val._id}>
                          <div
                            className={
                              i === 0
                                ? "panel-heading active-panel"
                                : "panel-heading"
                            }
                          >
                            <h5 className="panel-title">
                              <a
                                data-toggle="collapse"
                                data-parent="#accordionTwo"
                                href="#collapse11"
                                className="clearfix"
                              >
                                <h6 className="float-left">
                                  {/* <span>Lecture 1. 1</span> */}
                                  {val.title}
                                </h6>
                                {/* <p class="float-right">15:12min</p> */}
                              </a>
                            </h5>
                          </div>
                          <div
                            id="collapse11"
                            className={
                              i === 0
                                ? "panel-collapse collapse in"
                                : "panel-collapse collapse"
                            }
                          >
                            <div className="panel-body">
                              <p>{val.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>{" "}
                  {/* end #accordionTwo */}
                </div>{" "}
                {/* End of .curriculum-panel */}
                <div className="course-feedback">
                  <h3>Students Feedback</h3>
                  <div className="feedback-container">
                    <ul className="clearfix">
                      <li className="float-left">
                        <h2>
                          {getData?.matchedSubprogram?.averageRating?.toFixed(
                            1
                          ) || 0.0}
                        </h2>
                        <p>
                          Number of reviews (
                          {getData?.matchedSubprogram?.numOfReviews || 0})
                        </p>
                        <ul>
                          <li>
                            <i className="fa fa-star" aria-hidden="true" />
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true" />
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true" />
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true" />
                          </li>
                          <li>
                            <i
                              className="fa fa-star-half-o"
                              aria-hidden="true"
                            />
                          </li>
                        </ul>
                      </li>
                      <li className="float-left">
                        <ul className="clearfix">
                          <li>5 Star</li>
                          <li>
                            <div
                              style={{
                                width: `${
                                  totalReviewAndPercentage(5)?.ratingPerc
                                }%`,
                              }}
                            />
                          </li>
                          <li>{totalReviewAndPercentage(5)?.ratingPerc}%</li>
                          <li className="float-right">
                            ({totalReviewAndPercentage(5)?.review} Reviews)
                          </li>
                        </ul>
                        <ul className="clearfix">
                          <li>4 Star</li>
                          <li>
                            <div
                              style={{
                                width: `${
                                  totalReviewAndPercentage(4)?.ratingPerc
                                }%`,
                              }}
                            />
                          </li>
                          <li>{totalReviewAndPercentage(4).ratingPerc}%</li>
                          <li className="float-right">
                            ({totalReviewAndPercentage(4).review} Reviews)
                          </li>
                        </ul>
                        <ul className="clearfix">
                          <li>3 Star</li>
                          <li>
                            <div
                              style={{
                                width: `${
                                  totalReviewAndPercentage(3)?.ratingPerc
                                }%`,
                              }}
                            />
                          </li>
                          <li>{totalReviewAndPercentage(3).ratingPerc}%</li>
                          <li className="float-right">
                            ({totalReviewAndPercentage(3).review} Reviews)
                          </li>
                        </ul>
                        <ul className="clearfix">
                          <li>2 Star</li>
                          <li>
                            <div
                              style={{
                                width: `${
                                  totalReviewAndPercentage(2)?.ratingPerc
                                }%`,
                              }}
                            />
                          </li>
                          <li>{totalReviewAndPercentage(2).ratingPerc}%</li>
                          <li className="float-right">
                            ({totalReviewAndPercentage(2).review} Reviews)
                          </li>
                        </ul>
                        <ul className="clearfix">
                          <li>1 Star</li>
                          <li>
                            <div
                              style={{
                                width: `${
                                  totalReviewAndPercentage(1)?.ratingPerc
                                }%`,
                              }}
                            />
                          </li>
                          <li>{totalReviewAndPercentage(1)?.ratingPerc}%</li>
                          <li className="float-right">
                            ({totalReviewAndPercentage(1)?.review} Reviews)
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>{" "}
                  {/* /.feedback-container */}
                  {/* /.single-review */}
                  {getData?.matchedSubprogram?.review?.length > 0 &&
                    getData?.matchedSubprogram?.review?.map((val) => (
                      <div className="single-review clearfix" key={val?.id}>
                        <img src={Course30} alt="" className="float-left" />
                        <div className="text float-left">
                          <div className="clearfix">
                            <div className="float-left">
                              <h6>{val?.name}</h6>
                              <span>{getData?.matchedSubprogram.name}</span>
                            </div>
                            <ul className="float-right">
                              {Array.from(
                                { length: val.rating },
                                (_, index) => (
                                  <li key={index}>
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    />
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                          <p>{val?.message}</p>
                        </div>
                      </div>
                    ))}
                </div>{" "}
                {/* /.course-feedback */}
                <div className="submit-review-form">
                  <h3>Submit a Review</h3>
                  <p>Your Ratings</p>
                  <ul className="star-rating">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <li key={index} onClick={() => handleStarClick(index)}>
                        <i
                          className={`fa ${
                            index <= review.rating ? "fa-star" : "fa-star-o"
                          }`}
                          aria-hidden="true"
                        />
                      </li>
                    ))}
                  </ul>
                  <form action="#" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-sm-4">
                        <label>Your Full Name</label>
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={review.name}
                          onChange={(e) =>
                            setReview({ ...review, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>E-mail</label>
                        <input
                          type="email"
                          placeholder="sample@email.com"
                          value={review.email}
                          onChange={(e) =>
                            setReview({ ...review, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Phone</label>
                        <input
                          type="text"
                          placeholder="+91-8080220888"
                          value={review.phone}
                          onChange={(e) =>
                            setReview({ ...review, phone: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <label>Your Message</label>
                    <textarea
                      placeholder="Write Comment..."
                      defaultValue={""}
                      value={review.message}
                      onChange={(e) =>
                        setReview({ ...review, message: e.target.value })
                      }
                    />
                    <input
                      type="submit"
                      value="Submit Review"
                      className="s-bg-color"
                    />
                  </form>
                </div>{" "}
                {/* /.submit-review-form */}
              </div>{" "}
              {/* /.details-wrapper */}
            </div>{" "}
            {/* /.col- */}
            {/* ************************* SIDEBAR ***************************** */}
            <div className="col-md-4 col-sm-6 col-xs-12  theme-sidebar">
              <div className="course-sidebar">
                <div className="sidebar-course-information">
                  <h4>Program Summary</h4>
                  {/* <ul class="price clearfix">
                      <li class="float-left"><strong class="s-color"><del>119. <sup>99</sup></del>$79<sup>.99</sup></strong></li>
                      <li class="float-right"><a href="#" class="tran3s"><i class="flaticon-like"></i></a></li>
                    </ul> */}
                  <ul className="info-list row">
                    <li className="col-xs-12">
                      <b>Phases :</b> {getData?.programSummary?.phases}
                    </li>
                    <li className="col-xs-12">
                      <b>Duration :</b> {getData?.programSummary?.duration}
                    </li>
                    <li className="col-xs-12">
                      <b>No. of Hrs. :</b> {getData?.programSummary?.numOfHrs}
                    </li>
                    <li className="col-xs-12">
                      <b>Rating of the course :</b> {getData?.programSummary?.ratingOfCourse}
                    </li>
                  </ul>
                  <div>
                    <ul className="clearfix student-image">
                      <li>
                        <img src={Course24} alt="" />
                      </li>
                      <li>
                        <img src={Course25} alt="" />
                      </li>
                      <li>
                        <img src={Course26} alt="" />
                      </li>
                      <li>
                        <img src={Course27} alt="" />
                      </li>
                      <li>
                        <div className="image">
                          <img src={Course24} alt="" />
                          <div className="opacity">163+</div>
                        </div>
                      </li>
                    </ul>
                    <p>
                      <b>163+</b> Students have Already taken the course
                    </p>
                  </div>
                  <a
                    href="#"
                    className="tran3s s-bg-color take-course hvr-trim"
                  >
                    Book An Appointment
                  </a>
                </div>{" "}
                {/* /.sidebar-course-information */}
                <div className="sidebar-instructor-info">
                  <div className="wrapper">
                    <h4>Upcoming Batch Start Date-</h4>

                    <h4>
                      1<sup>st</sup> April, 2024
                    </h4>
                    <a href="#" className="tran3s p-bg-color follow hvr-trim">
                      Take this Course
                    </a>
                  </div>{" "}
                  {/* /.wrapper */}
                </div>{" "}
                {/* /.sidebar-instructor-info */}
                <div className="sidebar-categories">
                  <h4>Categories</h4>
                  <div className="panel-group theme-accordion" id="accordion">
                    <div className="panel">
                      <div className="panel-heading active-panel">
                        <h6 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse1"
                          >
                            Class VI
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapse1"
                        className="panel-collapse collapse in"
                      >
                        <div className="panel-body">
                          <ul>
                            <li>
                              <a href="#" className="tran3s">
                                Item 1
                              </a>
                            </li>
                            <li>
                              <a href="#" className="tran3s">
                                Item 2
                              </a>
                            </li>
                            <li>
                              <a href="#" className="tran3s">
                                Item 3
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>{" "}
                    {/* /panel 1 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse2"
                          >
                            Class VII
                          </a>
                        </h6>
                      </div>
                      <div id="collapse2" className="panel-collapse collapse">
                        <div className="panel-body">
                          <ul>
                            <li>
                              <a href="#" className="tran3s">
                                Item 1
                              </a>
                            </li>
                            <li>
                              <a href="#" className="tran3s">
                                Item 2
                              </a>
                            </li>
                            <li>
                              <a href="#" className="tran3s">
                                Item 3
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>{" "}
                    {/* /panel 2 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse3"
                          >
                            Class VIII
                          </a>
                        </h6>
                      </div>
                      <div id="collapse3" className="panel-collapse collapse">
                        <div className="panel-body">
                          <ul>
                            <li>
                              <a href="#" className="tran3s">
                                Item 1
                              </a>
                            </li>
                            <li>
                              <a href="#" className="tran3s">
                                Item 2
                              </a>
                            </li>
                            <li>
                              <a href="#" className="tran3s">
                                Item 3
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>{" "}
                    {/* /panel 3 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse4"
                          >
                            Class IX
                          </a>
                        </h6>
                      </div>
                      <div id="collapse4" className="panel-collapse collapse">
                        <div className="panel-body">
                          <ul>
                            <li>
                              <a href="#" className="tran3s">
                                Item 1
                              </a>
                            </li>
                            <li>
                              <a href="#" className="tran3s">
                                Item 2
                              </a>
                            </li>
                            <li>
                              <a href="#" className="tran3s">
                                Item 3
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>{" "}
                    {/* /panel 4 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse5"
                          >
                            Class X
                          </a>
                        </h6>
                      </div>
                      <div id="collapse5" className="panel-collapse collapse">
                        <div className="panel-body">
                          <ul>
                            <li>
                              <a href="#" className="tran3s">
                                Item 1
                              </a>
                            </li>
                            <li>
                              <a href="#" className="tran3s">
                                Item 2
                              </a>
                            </li>
                            <li>
                              <a href="#" className="tran3s">
                                Item 3
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>{" "}
                    {/* /panel 5 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse6"
                          >
                            Class XI
                          </a>
                        </h6>
                      </div>
                      <div id="collapse6" className="panel-collapse collapse">
                        <div className="panel-body">
                          <ul>
                            <li>
                              <a href="#" className="tran3s">
                                Item 1
                              </a>
                            </li>
                            <li>
                              <a href="#" className="tran3s">
                                Item 2
                              </a>
                            </li>
                            <li>
                              <a href="#" className="tran3s">
                                Item 3
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>{" "}
                    {/* /panel 6 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse7"
                          >
                            Class XII
                          </a>
                        </h6>
                      </div>
                      <div id="collapse7" className="panel-collapse collapse">
                        <div className="panel-body">
                          <ul>
                            <li>
                              <a href="#" className="tran3s">
                                Item 1
                              </a>
                            </li>
                            <li>
                              <a href="#" className="tran3s">
                                Item 2
                              </a>
                            </li>
                            <li>
                              <a href="#" className="tran3s">
                                Item 3
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>{" "}
                    {/* /panel 7 */}
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse8"
                          >
                            Class XII Pass
                          </a>
                        </h6>
                      </div>
                      <div id="collapse8" className="panel-collapse collapse">
                        <div className="panel-body">
                          <ul>
                            <li>
                              <a href="#" className="tran3s">
                                Item 1
                              </a>
                            </li>
                            <li>
                              <a href="#" className="tran3s">
                                Item 2
                              </a>
                            </li>
                            <li>
                              <a href="#" className="tran3s">
                                Item 3
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>{" "}
                    {/* /panel 5 */}
                  </div>{" "}
                  {/* end #accordion */}
                </div>{" "}
                {/* /.sidebar-categories */}
                <div className="sidebar-keyword">
                  <h4>Keyword</h4>
                  <ul className="clearfix">
                    <li>
                      <a href="#" className="tran3s">
                        VVM
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tran3s">
                        NMIC
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tran3s">
                        IPM
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tran3s">
                        VVM
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tran3s">
                        NMIC
                      </a>
                    </li>
                  </ul>
                </div>{" "}
                {/* /.sidebar-keyword */}
              </div>{" "}
              {/* /.course-sidebar */}
            </div>{" "}
            {/* /.col- */}
          </div>{" "}
          {/* /.row */}
        </div>{" "}
        {/* /.container */}
      </div>{" "}
      {/* /.our-course */}
    </>
  );
};

export default CourseDetailSection;
