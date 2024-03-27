import React, { useEffect } from "react";
import Fitjee1 from "../assets/images/course/18.jpg";
import Fitjee2 from "../assets/images/course/19.jpg";
import { getCourseByClassId } from "../react-query/api/CompetitiveCourse";
import { Link, useParams } from "react-router-dom";
import Loading from "../UI/Loading";
// import "../assets/external-css/coursedetail.css"

const CompetitiveExamSection = () => {
  const { classId } = useParams();
  const { data, isLoading, error, refetch } = getCourseByClassId(classId);

  useEffect(() => {
    refetch();
  }, [classId]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="our-course course-list">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-8 col-xs-12 popular-course float-right">
            <div>
              {data?.programs?.length > 0 &&
                data?.programs.map((val) => (
                  <div className="single-course clearfix" key={val.id}>
                    <div className="image-box float-left">
                      <img
                        src={`http://65.1.94.113:8000/uploads/${val.image}`}
                        alt=""
                      />
                    </div>
                    <div className="text float-left" style={{ width: "58%" }}>
                      <h5>
                        <Link
                          to={`/fiitjee_mumbai-v11/competitive/course/program/${val._id}`}
                          className="tran3s"
                        >
                          {val?.heading}
                        </Link>
                      </h5>
                      <p>
                        <b>Organising Body:</b> {val?.organisingBody}
                      </p>
                      <p>
                        <b>Eligible Class:</b>{" "}
                        {val?.eligibleClass?.length > 0 &&
                          val?.eligibleClass.map((cls, index) => (
                            <span key={index}>{`${cls} | `}</span>
                          ))}
                      </p>
                      <p>
                        <b>Category:</b> {val?.about}
                      </p>
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
                  </div>
                ))}

              {/* /.single-course */}
            </div>
            <ul className="theme-pagination clearfix">
              <li>
                <a href="#" className="tran3s active">
                  1
                </a>
              </li>
              <li>
                <a href="#" className="tran3s">
                  2
                </a>
              </li>
              <li>
                <a href="#" className="tran3s">
                  3
                </a>
              </li>
              <li>
                <a href="#" className="tran3s">
                  Next
                </a>
              </li>
            </ul>{" "}
            {/* /.theme-pagination */}
          </div>{" "}
          {/* /.popular-course */}
          {/* ************************* SIDEBAR ***************************** */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="course-sidebar">
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
            </div>{" "}
            {/* /.course-sidebar */}
          </div>{" "}
          {/* /.col- */}
        </div>{" "}
        {/* /.row */}
      </div>{" "}
      {/* /.container */}
    </div>
  );
};

export default CompetitiveExamSection;
