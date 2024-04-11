import React from "react";

const InnerDetailBanner = ({ title,keywordData }) => {
  console.log("====================================");
  console.log("Title:--------> ", keywordData);
  console.log("====================================");
  return (
    <div className="inner-banner">
      <div className="opacity">
        <div className="container">
          <h2>{title}</h2>
          <h4 style={{ color: "#fff", marginBottom: 12 }}>
            {
              keywordData?.length > 0 && (
                keywordData.slice(0,3).map((val) => (
                  <>
                <button
                key={val._id}
                className="full_form"
                data-tooltip-anchor="top"
                data-tooltip={val?.fullForm}
              >
                {val?.keywordName}
              </button>
              {" "}
                  </>
              
                ))
              )
            }


            {/* <button
              className="full_form"
              data-tooltip-anchor="top"
              data-tooltip="Vidyarthi Vigyan Manthan"
            >
              VVM
            </button>
            ,{" "}
            <button
              className="full_form"
              data-tooltip-anchor="top"
              data-tooltip="NMIC Full form"
            >
              NMIC
            </button>
            ,{" "}
            <button
              className="full_form"
              data-tooltip-anchor="top"
              data-tooltip="IPM full form"
            >
              IPM
            </button> */}
          </h4>
          <ul>
            <li>
              <a href="index.php" className="tran3s">
                Home
              </a>
            </li>
            <li>/</li>
            <li>Class VI</li>
            <li>/</li>
            <li>Offline Classroom Programs</li>
            <li>/</li>
            <li>Math Genie</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InnerDetailBanner;