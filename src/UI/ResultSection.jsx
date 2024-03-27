import React, { useEffect, useState } from "react";
import { getAllResult } from "../react-query/api/result";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const ResultSection = () => {
  const [result, setResult] = useState([]);

  const { isLoading, error, data, refetch } = getAllResult(
    "http://65.1.94.113:8000/api/course/result"
  );

  useEffect(() => {
    refetch();
    setResult(data);
  }, [isLoading, error, data, refetch]); // Maintain consistent order of hooks

  if (isLoading) {
    return <Loading />;
  }

  console.log("====================================");
  console.log("DATA: ", data);
  console.log("====================================");
  return (
    <>
      <div className="our-event">
        <div className="container">
          <div className="row">
            {result?.length > 0 &&
              result?.map((val) => (
                <div className="col-md-4 col-sm-6 col-xs-12" key={val._id}>
                  <div className="single-event">
                    <div className="image-box">
                      <img
                        src={`http://65.1.94.113:8000/uploads/${val?.programImg}`}
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <p>
                        <b>Eligible Class-</b>{" "}
                        {val.eligibleClass.length > 0 &&
                          val?.eligibleClass.map((cls) => cls.name).join(", ")}
                      </p>
                      <p>
                        <b>Subject Covered-</b>{" "}
                        {val?.subjectsCovered.length > 0 &&
                          val?.subjectsCovered
                            .map((subject) => subject.name)
                            .join(", ")}
                      </p>
                      <ul className="clearfix">
                        <li className="float-left">
                          <Link
                            to={`/fiitjee_mumbai-v11/result/${val._id}`}
                            className="default_btn"
                          >
                            Read More
                          </Link>
                        </li>
                        <li className="float-right">
                          <i className="flaticon-time" />{" "}
                          {new Date(val.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <ul className="theme-pagination clearfix text-center">
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default ResultSection;
