import { useNavigate, Link } from "react-router-dom";
import React from "react";
import Logo5 from "../../assets/images/logo/logo5.png";
import { getAllData } from "../../react-query/api/Home";
import Loading from "../../UI/Loading";
import CourseDetail from "../CourseDetail/CourseDetail";
import { getAllCompetitiveCourse } from "../../react-query/api/Course";

const Header = () => {
  const navigate = useNavigate();
  const { isLoading, error, newData } = getAllData(
    "http://35.154.95.255:8000/api/course",
    "class"
  );

  //get competitive course data
  const {
    isLoading: compLoader,
    error: compError,
    data: compNewData,
  } = getAllCompetitiveCourse();

  console.log("====================================");
  console.log("COmpetitive exam loader: ", compNewData);
  console.log("====================================");

  if (isLoading || compLoader) {
    return <Loading />;
  }

  if (error) {
    return <h3>Error: {error.message}</h3>;
  }

  return (
    <>
      <header className="theme-menu-wrapper menu-style-two">
        <div className="top-header">
          <div className="container">
            <ul className="float-left left-content">
              <li>
                <i className="flaticon-phone-call" />{" "}
                <a href="#">08080220888</a>
              </li>
              <li>
                <i className="flaticon-envelope" />{" "}
                <a href="#">helpdesk@myfiitjee.com</a>
              </li>
              <li>
                <div
                  className="bfh-selectbox bfh-languages"
                  data-language="en_US"
                  data-available="en_US,fr_CA,es_MX"
                  data-flags="true"
                />
              </li>
            </ul>
            <ul className="float-right right-content">
              <li>
                <a href="#" className="tran3s social">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#" className="tran3s social">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#" className="tran3s social">
                  <i className="fa fa-google-plus" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#" className="tran3s social">
                  <i className="fa fa-dribbble" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="header-wrapper clearfix">
            <div className="logo float-left tran4s hidden-sm hidden-xs">
              <Link className="tran3s" to={`/`}>
                <img src={Logo5} alt="Logo" style={{ width: 130 }} />
              </Link>
            </div>
            <div className="logo float-left tran4s hidden-md hidden-lg">
              <Link className="tran3s" to={`/`}>
                <img src={Logo5} alt="Logo" style={{ width: 130 }} />
              </Link>
            </div>
            <div className="float-right header-widget"></div>
            {/* ============================ Theme Menu ========================= */}
            <nav
              className="theme-main-menu float-right navbar"
              id="mega-menu-wrapper"
            >
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navbar-collapse-1"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse" id="navbar-collapse-1">
                <ul className="nav">
                  <li>
                    <Link className="tran3s" to={`/`}>
                      Home
                    </Link>
                  </li>
                  <li className="dropdown-holder menu-list">
                    <a href="#" className="tran3s">
                      About
                    </a>
                    <ul className="sub-menu">
                      {/* <li>
                        <a href="#">About us</a>
                      </li> */}
                      <li>
                        <a href="#">Mission and Vision</a>
                      </li>
                      <li>
                        <a href="#">Chairman's Message</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-holder menu-list">
                    <a href="" className="tran3s">
                      Programs
                    </a>
                    {/* <Router> */}
                    <ul className="sub-menu">
                      {newData.map((classItem) => (
                        <li key={classItem._id} className="dropdown-holder">
                          <Link
                            to={
                              classItem.programs.length > 0
                                ? `/fiitjee_mumbai-v11/courses/class/${classItem._id}`
                                : `/fiitjee_mumbai-v11/contentNotFound`
                            }
                          >
                            Class {classItem.name}
                          </Link>
                          {classItem.programs &&
                            classItem.programs.length > 0 && (
                              <ul className="second-sub-menu">
                                {classItem.programs.map((program) => (
                                  <li
                                    key={program._id}
                                    className="dropdown-holder"
                                  >
                                    <Link
                                      to={`/fiitjee_mumbai-v11/courses/class/${classItem._id}/program/${program._id}`}
                                    >
                                      {program.name}
                                    </Link>
                                    {program.subprograms &&
                                      program.subprograms.length > 0 && (
                                        <ul className="third-sub-menu">
                                          {program.subprograms.map(
                                            (subprogram) => (
                                              <li key={subprogram._id}>
                                                <Link
                                                  to={`/fiitjee_mumbai-v11/courses/class/${classItem._id}/program/${program._id}/subprogram/${subprogram._id}`}
                                                >
                                                  {subprogram.name}
                                                </Link>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      )}
                                  </li>
                                ))}
                              </ul>
                            )}
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="dropdown-holder menu-list">
                    <a href="#" className="tran3s">
                      Competitive exams
                    </a>
                    <ul className="sub-menu"> 
                      {compNewData?.map((val) => (
                        <li className="dropdown-holder" key={val._id}>
                          <Link to={val.programs.length > 0
                                ? `/fiitjee_mumbai-v11/competitive/course/${val._id}`
                                : `/fiitjee_mumbai-v11/contentNotFound`}>Class {val.name}</Link>
                          {val.programs && val.programs.length > 0 && (
                            <ul
                              className="second-sub-menu"
                              key={val._id.toString() + Math.random().toString()}
                            >
                              {val.programs.map((program) => (
                                <li key={program._id}>
                                  <Link to={`/fiitjee_mumbai-v11/competitive/course/program/${program._id}`}>{program.heading}</Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="dropdown-holder menu-list">
                    <a href="#" className="tran3s">
                      Admission test
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Pattern Proof Teaching</a>
                      </li>
                      <li>
                        <a href="#">Personalized Coaching</a>
                      </li>
                      <li>
                        <a href="#">Study Resources</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-holder menu-list">
                    <a href="#" className="tran3s">
                      Events
                    </a>
                    <ul className="sub-menu">
                      <li className="dropdown-holder">
                        <Link to="/fiitjee_mumbai-v11/workshop">Workshops</Link>
                        {/* <ul className="second-sub-menu">
                          <li>
                            <a href="#">Item 1</a>
                          </li>
                          <li>
                            <a href="#">Item 2</a>
                          </li>
                          <li>
                            <a href="#">Item 3</a>
                          </li>
                          <li>
                            <a href="#">Item 4</a>
                          </li>
                        </ul> */}
                      </li>
                      <li className="dropdown-holder">
                        <a href="#">Camps</a>
                        <ul className="second-sub-menu">
                          <li>
                            <a href="#">Item 1</a>
                          </li>
                          <li>
                            <a href="#">Item 2</a>
                          </li>
                          <li>
                            <a href="#">Item 3</a>
                          </li>
                          <li>
                            <a href="#">Item 4</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-holder">
                        <a href="#">Seminars</a>
                        <ul className="second-sub-menu">
                          <li>
                            <a href="#">Item 1</a>
                          </li>
                          <li>
                            <a href="#">Item 2</a>
                          </li>
                          <li>
                            <a href="#">Item 3</a>
                          </li>
                          <li>
                            <a href="#">Item 4</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-holder">
                        <a href="#">Upcomming Admission Tests</a>
                        <ul className="second-sub-menu">
                          <li>
                            <a href="#">Item 1</a>
                          </li>
                          <li>
                            <a href="#">Item 2</a>
                          </li>
                          <li>
                            <a href="#">Item 3</a>
                          </li>
                          <li>
                            <a href="#">Item 4</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-holder menu-list">
                    <Link to={`/fiitjee_mumbai-v11/result`} className="tran3s">
                      Results
                    </Link>
                    {/* <ul className="sub-menu">
                      <li>
                        <a href="#">Notice-Recent Updates</a>
                      </li>
                      <li>
                        <a href="#">Result</a>
                      </li>
                      <li>
                        <a href="#">Previous Year Solution</a>
                      </li>
                      <li>
                        <a href="#">Time Table</a>
                      </li>
                      <li>
                        <a href="#">Past Results</a>
                      </li>
                      <li>
                        <a href="#">FAQ'S</a>
                      </li>
                      <li>
                        <a href="#">Syllabus</a>
                      </li>
                      <li>
                        <a href="#">FIITJEE Centres</a>
                      </li>
                      <li>
                        <a href="#">Hostels</a>
                      </li>
                    </ul> */}
                  </li>
                  <li className="dropdown-holder menu-list">
                    <a href="#" className="tran3s">
                      Downloads
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Image Gallery</a>
                      </li>
                      <li>
                        <a href="#">Video Gallery</a>
                      </li>
                      <li>
                        <a href="#">Media Gallery</a>
                      </li>
                      <li>
                        <a href="#">Toppers Speak</a>
                      </li>
                    </ul>
                  </li>
                  {/* <li><a href="#" class="tran3s">Contact Us</a></li> */}
                </ul>
              </div>
              {/* /.navbar-collapse */}
            </nav>{" "}
            {/* /.theme-main-menu */}
          </div>{" "}
          {/* /.header-wrapper */}
        </div>
      </header>{" "}
      {/* /.theme-menu-wrapper */}
    </>
  );
};

export default Header;
