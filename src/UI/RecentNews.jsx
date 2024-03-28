import React, { useEffect, useState } from "react";
import Blog1 from "../assets/images/blog/1.jpg";
import Blog2 from "../assets/images/blog/2.jpg";
import Blog3 from "../assets/images/blog/3.jpg";
import { getAllData } from "../react-query/api/Home";
import Loading from "./Loading";
import { truncateText } from "../utils/wordTruncate";
import { Link } from "react-router-dom";

const RecentNews = () => {
    const [apiData, setApiData] = useState([]);
    const {
        isLoading,
        error,
        newData: news,
    } = getAllData("http://35.154.95.255:8000/api/news/getNews", "news");

    useEffect(() => {
        if (!isLoading && !error && news) {
            setApiData(news);
        }
    }, [isLoading, error, news]);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <h3>Error: {error.message}</h3>;
    }

    return (
        <div className="our-blog">
            <div className="container">
                <div className="theme-title">
                    <h2>Recommended Blogs</h2>
                    <Link to="/fiitjee_mumbai-v11/blog" className="tran3s">
                        Go to Blogs
                    </Link>
                </div>{" "}
                {/* /.theme-title */}
                <div className="row">
                    {apiData.splice(0, 3).map((val, i) => {
                        return (
                            <div className="col-md-4 col-sm-6" key={val._id}>
                                <div className="single-blog">
                                    <div className="image">
                                        <img
                                            src={`http://35.154.95.255:8000/uploads/${val.image}`}
                                            alt=""
                                        />
                                    </div>
                                    <ul>
                                        <li>
                                            <i className="flaticon-comments" />
                                            <a href="#" className="tran3s">
                                                13
                                            </a>
                                        </li>
                                        <li>
                                            <i className="flaticon-heart" />
                                            <a href="#" className="tran3s">
                                                3
                                            </a>
                                        </li>
                                    </ul>
                                    <h4>
                                        <a href="#" className="tran3s">
                                            {val.title}
                                        </a>
                                    </h4>
                                    <p>{truncateText(val.description, 10)}</p>
                                    <a href="#" className="tran3s">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                    {/* /.single-blog */}
                </div>{" "}
                {/* /.row */}
            </div>{" "}
            {/* /.container */}
        </div>
    );
};

export default RecentNews;
