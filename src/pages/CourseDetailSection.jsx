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
import MultiStepForm from "../component/footer/MultistepForm";

const CourseDetailSection = ({ getData }) => {
  console.log("====================================");
  console.log("GETTING DATA ----> ", getData);
  console.log("====================================");

  const [activePanel, setActivePanel] = useState(0);

  const handlePanelClick = (panelIndex) => {
    setActivePanel(panelIndex === activePanel ? -1 : panelIndex);
  };

  const [showForm, setShowForm] = useState(false);

  const handleGetStartedClick = (e) => {
    e.preventDefault(); // Prevent default anchor tag behavior
    setShowForm(true);
  };

  // 65ba25db3ce7570cd4f51584/65ba2b591bd7713abd353413
  const [review, setReview] = useState({
    name: "",
    email: "",
    programName: "",
    message: "",
    phone: "",
    rating: 0,
  });

  // Define the LetterAvatar function
  function LetterAvatar(name, size) {
    name = name || "";
    size = size || 60;

    var colours = [
      "#1abc9c",
      "#2ecc71",
      "#3498db",
      "#9b59b6",
      "#34495e",
      "#16a085",
      "#27ae60",
      "#2980b9",
      "#8e44ad",
      "#2c3e50",
      "#f1c40f",
      "#e67e22",
      "#e74c3c",
      "#ecf0f1",
      "#95a5a6",
      "#f39c12",
      "#d35400",
      "#c0392b",
      "#bdc3c7",
      "#7f8c8d",
    ];

    var nameSplit = String(name).toUpperCase().split(" ");
    var initials = "";
    var charIndex, colourIndex, canvas, context, dataURI;

    nameSplit.forEach((word) => {
      initials += word.charAt(0);
    });

    if (window.devicePixelRatio) {
      size = size * window.devicePixelRatio;
    }

    charIndex = (initials == "" ? 72 : initials.charCodeAt(0)) - 64;
    colourIndex = charIndex % 20;
    canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    context = canvas.getContext("2d");

    context.fillStyle = colours[colourIndex - 1];
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = Math.round(canvas.width / 2) + "px Arial";
    context.textAlign = "center";
    context.fillStyle = "#FFF";
    context.fillText(initials, size / 2, size / 1.5);

    dataURI = canvas.toDataURL();
    canvas = null;

    return dataURI;
  }

  // Convert Roman numeral to spaced format
  function convertRomanToSpaced(roman) {
    const romanNumerals = {
      I: "I",
      V: "V",
      X: "X",
      L: "L",
      C: "C",
      D: "D",
      M: "M",
    };
    let result = "";
    for (let i = 0; i < roman.length; i++) {
      result += romanNumerals[roman[i]] + " ";
    }
    return result.trim();
  }

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
      Math.floor(
        (total_review_according_star?.length / reviews.length) * 100
      ) || 0;
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
                        {getData?.programDetailImg?.length > 0 ? (
                          getData?.programDetailImg.map((val, index) => (
                            <div
                              key={val}
                              className={`item ${index === 0 ? "active" : ""}`}
                            >
                              <img
                                src={`http://35.154.95.255:8000/uploads/${val}`}
                                alt=""
                                width="100%"
                                height={393}
                              />
                            </div>
                          ))
                        ) : (
                          <>
                            <img
                              src={`https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=740&t=st=1712398282~exp=1712398882~hmac=d07d5e78635e403915061396145ad94e42a9fbe86a7bdbaea348b18400266e1e`}
                              alt=""
                              width="100%"
                              height={393}
                            />
                            <h4 style={{ color: "red", marginBottom: "5%" }}>
                              Please add program details
                            </h4>
                          </>
                        )}
                      </div>
                      {/* Left and right controls */}
                      <a
                        className="left carousel-control"
                        href="#testimonial-carousel-one"
                        data-slide="prev"
                        style={{
                          top: 0,
                          bottom: "auto",
                        }} // Adjusted style
                      >
                        <i className="fa fa-chevron-left" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="right carousel-control"
                        href="#testimonial-carousel-one"
                        data-slide="next"
                        style={{
                          top: 0,
                          bottom: "auto",
                        }} // Adjusted style
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
                  {getData?.programPoint?.length > 0 &&
                    getData?.programPoint.map((val, i) => (
                      <div
                        className="panel-group theme-accordion"
                        id={`accordion${i + 111}`}
                        key={val._id}
                      >
                        <div
                           className={`panel ${i === activePanel ? 'active-panel' : ''}`}
                        >
                          <div
                            className="panel-heading"
                            onClick={() => handlePanelClick(i)}
                          >
                            <h5 className="panel-title">
                              <a
                                data-toggle="collapse"
                                href={`#collapse${i + 111}`} // Ensure each href has a unique ID
                                className="clearfix"
                              >
                                <h6 className="float-left">{val.title}</h6>
                              </a>
                            </h5>
                          </div>
                          <div
                            id={`collapse${i + 111}`} // Ensure each id is unique
                            className={`panel-collapse collapse ${
                              i === activePanel ? "in" : ""
                            }`}
                          >
                            <div className="panel-body">
                              <p>{val.description}</p>
                              {val.details && (
                                <div className="learn-list">
                                  <ul className="row">
                                    {val.details.map((detail, index) => (
                                      <li
                                        className="col-sm-12 col-xs-12"
                                        key={index}
                                      >
                                        <span>{detail}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
                          ) || 0}
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
                                {
                                  length: val.rating,
                                },
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
                            setReview({
                              ...review,
                              name: e.target.value,
                            })
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
                            setReview({
                              ...review,
                              email: e.target.value,
                            })
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
                            setReview({
                              ...review,
                              phone: e.target.value,
                            })
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
                        setReview({
                          ...review,
                          message: e.target.value,
                        })
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

                  <ul className="info-list row">
                    <li className="col-xs-6">
                      <b>Phases :</b> {getData?.programSummary?.phases}
                    </li>
                    <li className="col-xs-6">
                      <b>Duration :</b> {getData?.programSummary?.duration}
                    </li>
                    <li className="col-xs-12">
                      <b>Hours :</b> {getData?.programSummary?.numOfHrs}
                    </li>
                    <li className="col-xs-12">
                      <b>Rating :</b>
                      <ul
                        className="float-right"
                        style={{ marginRight: "120px" }}
                      >
                        {getData?.programSummary?.ratingOfCourse ? (
                          Array.from({
                            length: getData?.programSummary?.ratingOfCourse,
                          }).map((_, index) => (
                            <li key={index}>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </li>
                          ))
                        ) : (
                          <span>{""}</span>
                        )}
                      </ul>
                    </li>
                  </ul>
                  <div>
                    <ul className="clearfix student-image">
                      <li>
                        <img src={LetterAvatar("SAARTH AGARWAL", 60)} alt="" />
                      </li>
                      <li>
                        <img src={LetterAvatar("KRISHIV KEDIA", 60)} alt="" />{" "}
                      </li>
                      <li>
                        <img src={LetterAvatar("Sanjay", 60)} alt="" />{" "}
                      </li>
                      <li>
                        <img src={LetterAvatar("Dhiraj", 60)} alt="" />
                      </li>
                      <li>
                        <div className="image">
                          <img src={LetterAvatar("PALASH PRABHU", 60)} alt="" />
                          <div className="opacity">20+</div>
                        </div>
                      </li>
                    </ul>
                    <p>
                      <b>20+</b> students have already been transformed through
                      the program.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="tran3s s-bg-color take-course hvr-trim"
                    onClick={handleGetStartedClick}
                  >
                    Book An Appointment
                  </a>
                  {showForm && (
                    <MultiStepForm
                      isOpen={showForm}
                      onClose={() => setShowForm(false)}
                    />
                  )}
                </div>{" "}
                {/* /.sidebar-course-information */}
                <div className="sidebar-instructor-info">
                  <div className="wrapper sidebar-course-information">
                    <h4>Upcoming Batch Start Date-</h4>

                    <ul class="info-list row">
                      <li class="col-xs-6">
                        <b>Date :</b>{" "}
                        {getData?.batchStartDate?.date.slice(0, 10)}
                      </li>
                      <li class="col-xs-6">
                        <b>Day :</b> {getData?.batchStartDate?.day}
                      </li>
                      <li class="col-xs-6">
                        <b>Center :</b> {getData?.batchStartDate?.center}
                      </li>
                      <li class="col-xs-6">
                        <b>Batch :</b> {getData?.batchStartDate?.batch}{" "}
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="tran3s p-bg-color follow hvr-trim"
                      onClick={handleGetStartedClick}
                    >
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
                </div>
                {/* /.sidebar-categories */}
                <div className="sidebar-keyword">
                  <h4>Keyword</h4>
                  <ul className="clearfix">
                    {getData?.keyword?.length > 0 &&
                      getData.keyword.map((val) => (
                        <li>
                          <a href="#" className="tran3s">
                            {val.keywordName}
                          </a>
                        </li>
                      ))}
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
