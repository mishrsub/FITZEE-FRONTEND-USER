import React, { useEffect, useState } from "react";
import Event13 from "../assets/images/event/13.jpg";
import Course24 from "../assets/images/course/24.jpg";
import Course25 from "../assets/images/course/25.jpg";
import Course26 from "../assets/images/course/26.jpg";
import Course27 from "../assets/images/course/27.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { getAllWorkshop, getWorkshopDetail } from "../react-query/api/workshop";
import Loading from "../UI/Loading";
import ErrorPage from "../component/Error/ErrorPage";

const EventDetailSection = () => {
  const { workshopId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error, refetch } = getWorkshopDetail(
    `http://65.1.94.113:8000/api/workshop/detail/${workshopId}`
  );
  const words = data?.description.split(" ");

  useEffect(() => {
    refetch();
  }, [workshopId,refetch]);

  if (isLoading) {
    return <Loading />;
  }

  if(error) {
    navigate("/fiitjee_mumbai-v11/contentNotFound");
    return <ErrorPage />;
  }

  console.log("====================================");
  console.log("Wokshop DATTA :", error);
  console.log("====================================");

  return (
    <div className="event-details">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-xs-12">
            <div className="details-wrapper">
              <div className="title">
                <h2>{data.title}</h2>
                <ul className="clearfix">
                  <li className="float-left">
                    <div>
                      <i className="flaticon-clock" />
                      <span>Date</span>
                      <p>27 Apr, 2016</p>
                    </div>
                  </li>
                  <li className="float-left">
                    <div>
                      <i className="flaticon-time" />
                      <span>Time</span>
                      <p>
                        {new Date(data.timing).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </li>
                  <li className="float-left">
                    <div>
                      <i className="flaticon-placeholder" />
                      <span>Location</span>
                      <p>{data.address}</p>
                    </div>
                  </li>
                </ul>
              </div>{" "}
              {/* /.title */}
              <img
                src={`http://65.1.94.113:8000/uploads/${data.image}`}
                alt=""
                style={{ width: "100%" }}
              />
              <br />
              <br />
              <div className="counter-wrapper">
                <div id="count" className="clearfix" />
              </div>
              <h3>Event Details</h3>
              <p>{words.slice(0, 50).join(" ")}</p> <br />
              <p>{words.slice(50).join(" ")}</p>
              <br />
              <br />
              {data.detail.subTitle.map((subTitle) => (
                <div key={subTitle.title}>
                  {" "}
                  {/* Add a unique key for each iteration */}
                  <h3>{subTitle.title}</h3>
                  {subTitle.description.map((description, index) => (
                    <div key={index}>
                      <p>{description}</p>
                      <br />
                    </div>
                  ))}
                </div>
              ))}
            </div>{" "}
            {/* /.details-wrapper */}
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 theme-sidebar">
            <div className="course-sidebar">
              <div className="sidebar-course-information">
                <h4>Program Summary</h4>
                <ul className="info-list row">
                  <li className="col-xs-12">
                    <b>Available Slots :</b> 40
                  </li>
                  <li className="col-xs-12">
                    <b>Duration :</b> 2 hr.
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
                    <b>163+</b> Attendees
                  </p>
                </div>
                <a href="#" className="tran3s s-bg-color take-course hvr-trim">
                  Register for Event
                </a>
              </div>{" "}
              {/* /.sidebar-course-information */}
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
                          Workshops
                        </a>
                      </h6>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse in">
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
                          Camps
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
                          Seminars
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
                          Upcomming Admission Tests
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
                        </ul>
                      </div>
                    </div>
                  </div>{" "}
                  {/* /panel 4 */}
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
          {/* /.theme-sidebar */}
        </div>{" "}
        {/* /.row */}
      </div>{" "}
      {/* /.container */}
    </div>
  );
};

export default EventDetailSection;
