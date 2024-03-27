import React, { useEffect } from "react";
import Blog1 from "../assets/images/blog/1.jpg";
import Blog2 from "../assets/images/blog/2.jpg";
import Blog7 from "../assets/images/blog/7.jpg";
import Blog8 from "../assets/images/blog/8.jpg";
import Blog9 from "../assets/images/blog/9.jpg";
import Blog10 from "../assets/images/blog/10.jpg";
import { getAllBlog } from "../react-query/api/Blog";
import Loading from "../UI/Loading";
import { truncateText } from "../utils/wordTruncate";
import { Link } from "react-router-dom";

const BlogSection = () => {
    const { data, isLoading, error, refetch } = getAllBlog(
        "http://localhost:8000/api/news/getNews"
    );

    console.log("DATA LOADER: ", data);

    useEffect(() => {
        refetch();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="our-blog blog-innner-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-xs-12">
                        <div className="row">
                            {data?.length>0 && data?.map((val) => (
                                <div className="col-sm-6">
                                    <div className="single-blog">
                                        <div className="image">
                                            <img
                                                src={`http://localhost:8000/uploads/${val.image}`}
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
                                            <Link
                                                to={`/fiitjee_mumbai-v11/blog/detail/${val._id}`}
                                                className="tran3s"
                                            >
                                                {val.title}
                                            </Link>
                                        </h4>
                                        <p>
                                            {truncateText(val.description, 15)}
                                        </p>
                                        <Link
                                            to={`/fiitjee_mumbai-v11/blog/detail/${val._id}`}
                                            className="tran3s"
                                        >
                                            Read More
                                        </Link>
                                    </div>{" "}
                                    {/* /.single-blog */}
                                </div>
                            ))}

                            {/* /.col- */}
                        </div>{" "}
                        {/* /.row */}
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
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 theme-sidebar">
                        <form action="#" className="sidebar-search">
                            <input type="text" placeholder="Search" />
                            <button className="tran3s">
                                <i className="flaticon-search" />
                            </button>
                        </form>
                        <div className="sidebar-categories">
                            <h4>Top Recommendation</h4>
                            <ul>
                                <li>
                                    <a href="#" className="tran3s">
                                        JEE Advanced
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="tran3s">
                                        JEE Mains
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="tran3s">
                                        NTSE
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="tran3s">
                                        VVM
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="tran3s">
                                        Others
                                    </a>
                                </li>
                            </ul>
                        </div>{" "}
                        {/* /.sidebar-categories */}
                        <div className="sidebar-keyword">
                            <h4>Keyword</h4>
                            <ul className="clearfix">
                                <li>
                                    <a href="#" className="tran3s">
                                        VVM
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="tran3s">
                                        NMIC
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="tran3s">
                                        IPM
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="tran3s">
                                        JEE Mains
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="tran3s">
                                        JEE Advanced
                                    </a>
                                </li>
                            </ul>
                        </div>{" "}
                        {/* /.sidebar-keyword */}
                    </div>{" "}
                    {/* /.theme-sidebar */}
                </div>{" "}
                {/* /.row */}
            </div>{" "}
            {/* /.container */}
        </div>
    );
};

export default BlogSection;
