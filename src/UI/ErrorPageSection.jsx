import React from "react";
import { Link } from "react-router-dom";

const ErrorPageSection = () => {
  return (
    <>
      <div className="inner-banner">
        <div className="opacity">
          <div className="container">
            <h2>Page Not Found</h2>
            <ul>
              <li>
                <a href="index.php" className="tran3s">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>error</li>
            </ul>
          </div>{" "}
          {/* /.container */}
        </div>{" "}
        {/* /.opacity */}
      </div>{" "}
      <div className="container error-page">
        <h2>404</h2>
        <h3>Looks like somthing went wrong</h3>
        <p>
          The page you are looking for was moved, removed, renamed or might
          never existed.
        </p>
        <div>
          <Link to="/fiitjee_mumbai-v11" className="tran3s s-bg-color hvr-trim">
            Go Home
          </Link>
          <span className="or">Or</span>
          <form action="#">
            <input type="text" placeholder="Search..." />
            <button>
              <i className="fa fa-search" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>{" "}
      {/* /.error-page */}
    </>
  );
};

export default ErrorPageSection;
