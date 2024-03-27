import React, { useEffect, useState } from "react";
import { getAllData } from "../react-query/api/Home";
import Loading from "./Loading";

const PopularCourses = () => {
  const [testData, setTestData] = useState([]);
  const { isLoading, error, newData:test } = getAllData(
    "http://65.1.94.113:8000/api/upcomingTest/getUpcomingTest",
    "test"
  );

  useEffect(() => {
    if (!isLoading && !error && test) {
      setTestData(test);
    }
  }, [isLoading, error, test]);

  if (isLoading) {
    return <Loading/>;
  }

  if (error) {
    return <h3>Error: {error.message}</h3>;
  }


  return (
    <div className="popular-course">
      <div className="container">
        <div className="theme-title">
          <h2>Our Upcoming Admission Test</h2>
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
                  <div key={i} className="table__row fade-in-down">
                    <div className="table__cell" data-title="Name of Exam">
                      {val.examName}
                    </div>
                    <div className="table__cell" data-title="Date of Exam">
                      {/* Assuming examDate is a valid Date object */}
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
