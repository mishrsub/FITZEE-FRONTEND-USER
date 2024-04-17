import React, { useEffect, useState } from "react";
import { getAllWorkshop } from "../react-query/api/workshop";
import Loading from "../UI/Loading";
import { Link } from "react-router-dom";

const EventSection = () => {
    const [filter, setFilter] = useState("");
    const { data, error, refetch, isLoading } = getAllWorkshop(
        `http://35.154.95.255:8000/api/workshop/getWorkshop?catalog=${filter}`
    );

    console.log("====================================");
    console.log("Data section: ", data);
    console.log("====================================");

    useEffect(() => {
        refetch();
    }, [data, isLoading, error, filter]);

    if (isLoading) {
        return <Loading />;
    }

    const filterData = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    return (
        <div className="our-course course-grid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-8 col-xs-12 popular-course float-right">
                        <div className="course-style-filter clearfix">
                            <ul className="float-left clearfix">
                                <li>
                                    <Link
                                        to="#"
                                        className={`tran3s ${
                                            filter === "" ? "active" : ""
                                        }`}
                                        onClick={() => filterData("")}
                                    >
                                        This Week
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className={`tran3s ${
                                            filter === "upcoming"
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() => filterData("upcoming")}
                                    >
                                        Upcoming
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className={`tran3s ${
                                            filter === "paid" ? "active" : ""
                                        }`}
                                        onClick={() => filterData("paid")}
                                    >
                                        Paid
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className={`tran3s ${
                                            filter === "free" ? "active" : ""
                                        }`}
                                        onClick={() => filterData("free")}
                                    >
                                        Free
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="event-container">
                            {data.map((val) => (
                                <div className="event" key={val._id}>
                                    <div className="event-left">
                                        <div className="event-date">
                                            <div className="date">08</div>
                                            <div className="month">
                                                Jan 2024
                                            </div>
                                            <div className="share-button">
                                                <input
                                                    className="toggle-input"
                                                    id="toggle-input"
                                                    type="checkbox"
                                                />
                                                <label
                                                    htmlFor="toggle-input"
                                                    className="toggle"
                                                />
                                                <ul className="network-list">
                                                    <li className="twitter">
                                                        <a href="#">
                                                            Share on Twitter
                                                        </a>
                                                    </li>
                                                    <li className="facebook">
                                                        <a href="#">
                                                            Share on Facebook
                                                        </a>
                                                    </li>
                                                    <li className="googleplus">
                                                        <a href="#">
                                                            Share on Google+
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event-right">
                                        <h3 className="event-title">
                                            {val.title}
                                        </h3>
                                        <ul className="clearfix">
                                            <li className="float-left">
                                                <i className="flaticon-time" />{" "}
                                                {new Date(
                                                    val.timing
                                                ).toLocaleDateString("en-US", {
                                                    day: "numeric",
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </li>
                                            <li className="float-left">
                                                <i className="flaticon-placeholder" />{" "}
                                                {val.address}
                                            </li>
                                            <li>
                                                <span className="event-timing">
                                                    {val.catalog}
                                                </span>
                                            </li>
                                        </ul>
                                        <div className="event-description">
                                            {val.description}
                                        </div>
                                        <div className="event-btn">
                                            <Link
                                                to={`/fiitjee_mumbai-v22/workshop/eventDetail/${val._id}`}
                                            >
                                                Know More
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="event-right">
                                        <img
                                            src={`http://35.154.95.255:8000/uploads/${val.image}`}
                                            alt="fiitjee mumbai"
                                            style={{
                                                width: "750px",
                                                maxWidth: "100%",
                                            }}
                                            loading="lazy"
                                        />
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
                        </ul>{" "}
                        {/* /.theme-pagination */}
                    </div>{" "}
                    {/* /.popular-course */}
                    {/* ************************* SIDEBAR ***************************** */}
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div className="course-sidebar">
                            <div className="sidebar-categories">
                                <h4>Categories</h4>
                                <div
                                    className="panel-group theme-accordion"
                                    id="accordion"
                                >
                                    <div className="panel">
                                        <div className="panel-heading active-panel">
                                            <h6 className="panel-title">
                                                <a
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapse1"
                                                >
                                                    Workshops
                                                </a>
                                            </h6>
                                        </div>
                                        <div
                                            id="collapse1"
                                            className="panel-collapse collapse in"
                                        >
                                            <div className="panel-body">
                                                <ul>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            Item 1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            Item 2
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* /panel 1 */}
                                    <div className="panel">
                                        <div className="panel-heading">
                                            <h6 className="panel-title">
                                                <a
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapse2"
                                                >
                                                    Camps
                                                </a>
                                            </h6>
                                        </div>
                                        <div
                                            id="collapse2"
                                            className="panel-collapse collapse"
                                        >
                                            <div className="panel-body">
                                                <ul>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            Item 1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            Item 2
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* /panel 2 */}
                                    <div className="panel">
                                        <div className="panel-heading">
                                            <h6 className="panel-title">
                                                <a
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapse3"
                                                >
                                                    Seminars
                                                </a>
                                            </h6>
                                        </div>
                                        <div
                                            id="collapse3"
                                            className="panel-collapse collapse"
                                        >
                                            <div className="panel-body">
                                                <ul>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            Item 1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            Item 2
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* /panel 3 */}
                                    <div className="panel">
                                        <div className="panel-heading">
                                            <h6 className="panel-title">
                                                <a
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapse4"
                                                >
                                                    Upcomming Admission Tests
                                                </a>
                                            </h6>
                                        </div>
                                        <div
                                            id="collapse4"
                                            className="panel-collapse collapse"
                                        >
                                            <div className="panel-body">
                                                <ul>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            Item 1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            Item 2
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* /panel 4 */}
                                </div>{" "}
                                {/* end #accordion */}
                            </div>{" "}
                            {/* /.sidebar-categories */}
                        </div>{" "}
                        {/* /.course-sidebar */}
                    </div>{" "}
                    {/* /.col- */}
                </div>{" "}
                {/* /.row */}
            </div>
        </div>
    );
};

export default EventSection;
