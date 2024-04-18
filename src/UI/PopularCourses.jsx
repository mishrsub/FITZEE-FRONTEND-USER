import React, { useEffect, useState } from "react";
import { getAllData } from "../react-query/api/Home";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const PopularCourses = () => {
  const [testData, setTestData] = useState([]);
  const {
    isLoading,
    error,
    newData: test,
  } = getAllData(
    "http://35.154.95.255:8000/api/upcomingTest/getUpcomingTest?enable=true",
    "test"
  );

  useEffect(() => {
    if (!isLoading && !error && test) {
      setTestData(test);
    }
  }, [isLoading, error, test]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <h3>Error: {error.message}</h3>;
  }

  return (
    <div className="popular-course">
      <div className="container">
        <div className="theme-title text-center">
          <h2>Our Upcoming Admission Test</h2>
          {/* <a href="course-grid.html" class="tran3s">See All Course</a> */}
        </div>{" "}
        {/* /.theme-title */}
        <div className="row">
          <div className="col-md-12">
            <div className="table">
              <div className="table__head">
                <div className="table__row">
                  <div className="table__cell">Name of Exam</div>
                  <div className="table__cell">Date of Exam</div>
                  <div className="table__cell">Eligible class</div>
                  <div className="table__cell" />
                </div>
              </div>
              <div className="table__body">
                {testData.map((val, i) => (
                  <div className="table__row fade-in-down" key={val._id}>
                    <div className="table__cell" data-title="Name of Exam">
                      {val.examName}
                    </div>
                    <div className="table__cell" data-title="Date of Exam">
                      {new Date(val.examDate).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                    <div className="table__cell" data-title="Eligible class">
                      {val.eligibleClass.map((val) => `${val.className}, `)}
                    </div>
                    <div className="table__cell">
                      <Link to={val.urlName} target="_blank" className="custom-btn btn-3">
                        To Know More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>{" "}
        {/* /.row */}
      </div>{" "}
      {/* /.container */}
    </div>
  );
};

export default PopularCourses;
