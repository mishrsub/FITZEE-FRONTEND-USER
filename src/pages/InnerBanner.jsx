import React from "react";

const InnerBanner = ({title}) => {
  console.log('====================================');
  console.log("Title: ",title);
  console.log('====================================');
  return (
    <div className="inner-banner">
    <div className="opacity">
      <div className="container">
        <h2>{title}</h2>
        <ul>
          <li>
            <a href="index.php" className="tran3s">
              Home
            </a>
          </li>
          <li>/</li>
          <li>Courses</li>
        </ul>
      </div>
    </div>
  </div>
  
  );
};

export default InnerBanner;
