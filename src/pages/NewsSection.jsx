import React, { useEffect, useState } from "react";
import { getAllNews, useLikeDislike } from "../react-query/api/News";
import Loading from "../UI/Loading";

const NewsSection = () => {
    const [activeTab, setActiveTab] = useState("recent");
    const [monthDate, setMonth] = useState({ startDate: "", endDate: "" });
    const { data, isLoading, error, refetch } = getAllNews(
        `http://65.1.94.113:8000/api/mainNews/getNews?startDate=${monthDate.startDate}&endDate=${monthDate.endDate}`
    );

    const { isLoading: likeLoading, handleLikeDislike } = useLikeDislike();

    // Create a state variable for each news item
    const [likeStates, setLikeStates] = useState({});

    useEffect(() => {
        // Initialize the state for each news item
        const initialState = {};
        data?.forEach((val) => {
            initialState[val._id] = {
                likes: val.likes.length,
                isLiked: val.likes.some((like) => like.ip === "::1"),
            };
        });
        setLikeStates(initialState);
    }, [data, activeTab]);

    const handleLike = (id) => {
        // Call the function with the desired URL and method
        handleLikeDislike(
            `http://65.1.94.113:8000/api/mainNews/like/${id}`,
            "POST"
        );
        // Update the state for the specific news item
        setLikeStates((prevStates) => {
            console.log("Prev State: ", prevStates);

            return {
                ...prevStates,
                [id]: {
                    likes: prevStates[id].isLiked
                        ? prevStates[id].likes - 1
                        : prevStates[id].likes + 1,
                    isLiked: !prevStates[id].isLiked,
                },
            };
        });

        // console.log("Like States: ", likeStates);
        // console.log("Like id: ", likeStates[id]);
    };

    const likeButtonStyle = (id) => {
        return {
            // color: likeStates?.isLiked ? "red" : "#cccccc",
            color: likeStates[id]?.isLiked ? "red" : "#cccccc",
            cursor: "pointer",
        };
    };

    const thisMonthData = () => {
        // Get the current date
        var currentDate = new Date();
        // Set the start date to the first day of the current month
        let startDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            1
        );

        // Set the end date to the last day of the current month
        let endDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            0,
            23,
            59,
            59,
            999
        );

        setMonth({ startDate: startDate, endDate: endDate });
    };

    const handleTabChange = (tab) => {
        console.log("DATATATATATATAT: ", data);
        setActiveTab(tab);
        if (tab === "thisMonth") {
            thisMonthData();
        } else {
            // Trigger a refetch with the new tab parameter and empty startDate and endDate
            refetch({
                startDate: "",
                endDate: "",
            });
            // Update the state immediately with empty startDate and endDate
            setMonth({ startDate: "", endDate: "" });
        }
    };

    useEffect(() => {
        refetch();
    }, [data, isLoading, error, activeTab]);

    if (isLoading || likeLoading) {
        return <Loading />;
    }

    return (
        <div className="our-course course-list">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-8 col-xs-12 popular-course float-right">
                        <div className="course-style-filter clearfix">
                            <ul className="float-left clearfix">
                                <li>
                                    <a
                                        href="#"
                                        className={`tran3s ${
                                            activeTab === "recent"
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleTabChange("recent")
                                        }
                                    >
                                        Recent News
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className={`tran3s ${
                                            activeTab === "thisMonth"
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            handleTabChange("thisMonth");
                                        }}
                                    >
                                        This Month
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            {data.map((val) => (
                                <div
                                    className="single-course clearfix"
                                    key={val._id}
                                >
                                    <div className="text float-left" style={{ width: "100%" }}>
                                        <h5>
                                            <a href="" className="tran3s">
                                                {val.title}
                                            </a>
                                        </h5>
                                        <p>{val.description}</p>
                                        <ul className="clearfix">
                                            <li className="float-left">
                                                <i
                                                    className="flaticon-heart"
                                                    style={likeButtonStyle(
                                                        val._id
                                                    )}
                                                    onClick={() =>
                                                        handleLike(val._id)
                                                    }
                                                    disabled={likeLoading}
                                                />
                                                <a href="#" className="tran3s">
                                                    {likeStates[val._id]?.likes}
                                                </a>
                                            </li>
                                            <li className="float-left">
                                                <i className="fa fa-share" />
                                            </li>
                                            <li className="float-right">
                                                <i className="flaticon-people" />
                                                <a href="#" className="tran3s">
                                                    Author: {val.author}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
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
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 theme-sidebar">
                        <div className="sidebar-categories news_cat">
                            <h4>Categories</h4>
                            <ul>
                                <li>
                                    <a href="#" className="tran3s">
                                        IIT-JEE
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="tran3s">
                                        Board
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="tran3s">
                                        Olympiad
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="tran3s">
                                        Ad-Test
                                    </a>
                                </li>
                                <li style={{ borderBottom: "none" }}>
                                    <a href="#" className="tran3s">
                                        Others
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsSection;
