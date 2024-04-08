import React, { useEffect, useState } from "react";
import { getAllData } from "../react-query/api/Home";
import Loading from "./Loading";

const PopularCourses = () => {
  const [testData, setTestData] = useState([]);
  const {
    isLoading,
    error,
    newData: test,
  } = getAllData(
    "http://35.154.95.255:8000/api/upcomingTest/getUpcomingTest",
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

  const calculateDuration = (index) => {
    return `${index + 1}s`;
  };

  const calculateDelay = (index) => {
    return `${index * 2}s`; // Adjust delay as needed
  };

  return (
    <div className="popular-course">
      <div className="container">
        <div className="theme-title text-center">
          <h2>Our Upcoming Admission Test</h2>
        </div>
        {/* /.theme-title */}
        <div className="row">
          <div className="col-md-12">
            <div className="table animated-table">
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
                  <div
                  key={val._id}
                    className="table__row animate fadeInRight animated"
                    data-animate="fadeInRight"
                    data-duration={calculateDuration(i)}
                    data-delay={calculateDelay(i)}
                    style={{
                      animationDuration: calculateDuration(i),
                      animationDelay: calculateDelay(i),
                      visibility: "visible",
                    }}
                  >
                    <div
                      className="table__cell animated-cell"
                      data-title="Name of Exam"
                    >
                      {val.examName}
                    </div>
                    <div
                      className="table__cell animated-cell"
                      data-title="Date of Exam"
                    >
                      {new Date(val.examDate).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                    <div
                      className="table__cell animated-cell"
                      data-title="Eligible class"
                    >
                      {val.eligibleClass.map((val) => `${val.className}, `)}
                    </div>
                    <div className="table__cell">
                      <a href={val.urlName} className="custom-btn btn-3">
                        To Know More
                      </a>
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
