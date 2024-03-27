import React, { useState } from "react";

const FindCourse = () => {
  const [catHandler, setCatHandle] = useState({
    catHandler1: "",
    catHandler2: "",
    catHandler3: "",
  });

  return (
    <div className="find-course">
    <div className="opacity color-one">
      <div className="container">
        <form action="#">
          <div className="row">
            <div className="col-md-3 col-xs-6">
              <div className="single-input">
                <select
                  className="selectpicker form-control"
                  id="filter1"
                  onchange=""
                >
                  <option value="">All Groups</option>
                  <option value={1}>
                    Class-wise Competitive &amp; Scholarship Tests
                  </option>
                  <option value={2}>Results &amp; achievements</option>
                  <option value={3}>Programs at FIITJEE, Mumbai</option>
                  <option value={4}>Upcoming admission test</option>
                  <option value={5}>Events</option>
                </select>
              </div>{" "}
              {/* /.single-input */}
            </div>{" "}
            {/* /.col */}
            <div className="col-md-3 col-xs-6">
              <div className="single-input">
                <select
                  className="selectpicker form-control"
                  id="filter2"
                  onChange={""}
                >
                  <option>Categories</option>
                </select>
              </div>{" "}
              {/* /.single-input */}
            </div>{" "}
            {/* /.col */}
            <div className="col-md-4 col-sm-8 col-xs-12">
              <div className="single-input">
                <select className="selectpicker form-control">
                  <option>Items</option>
                  <option>Green Olympiad</option>
                  <option>ANMC</option>
                  <option>NMTC</option>
                </select>
              </div>{" "}
              {/* /.single-input */}
            </div>{" "}
            {/* /.col */}
            <div className="col-md-2 col-sm-4 col-xs-12">
              <button className="action-button tran3s">
                Search Now <i className="fa fa-search" aria-hidden="true" />
              </button>
            </div>
          </div>{" "}
          {/* /.row */}
        </form>
      </div>{" "}
      {/* /.container */}
    </div>{" "}
    {/* /.opacity */}
  </div>
  
  );
};

export default FindCourse;
