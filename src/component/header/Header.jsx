import { useNavigate, Link } from "react-router-dom";
import React from "react";
import Logo5 from "../../assets/images/logo/logo5.png";
import { getAllData } from "../../react-query/api/Home";
import Loading from "../../UI/Loading";
import CourseDetail from "../CourseDetail/CourseDetail";
import { getAllCompetitiveCourse } from "../../react-query/api/Course";

const Header = ({ onHeaderHover }) => {
    const navigate = useNavigate();
    const { isLoading, error, newData } = getAllData(
        "http://35.154.95.255:8000/api/course",
        "class"
    );
    const {
        isLoading: loader1,
        error: error1,
        newData: menuData,
    } = getAllData("http://35.154.95.255:8000/api/downloads/menu/", "menus");

    const {
        isLoading: loader2,
        error: error2,
        newData: menuLink,
    } = getAllData(
        "http://35.154.95.255:8000/api/admissionTest/menu/",
        "menusLink"
    );

    console.log("====================================");
    console.log("Download sections: ", menuData);
    console.log("====================================");

    //get competitive course data..
    const {
        isLoading: compLoader,
        error: compError,
        data: compNewData,
    } = getAllCompetitiveCourse();

    console.log("====================================");
    console.log("Competitive exam loader: ", compNewData);
    console.log("====================================");

    if (isLoading || compLoader) {
        return <Loading />;
    }

    if (error) {
        return <h3>Error: {error.message}</h3>;
    }

    const handleMouseEnter = () => {
        onHeaderHover(true);
    };

    const handleMouseLeave = () => {
        onHeaderHover(false);
    };

    return (
        <>
            <header className="theme-menu-wrapper menu-style-two">
                <div className="top-header">
                    <div className="container">
                        <ul className="float-left left-content">
                            <li>
                                <i className="flaticon-phone-call" />{" "}
                                <a href="#">08080220888</a>
                            </li>
                            <li>
                                <i className="flaticon-envelope" />{" "}
                                <a href="#">helpdesk@myfiitjee.com</a>
                            </li>
                            <li>
                                <div
                                    className="bfh-selectbox bfh-languages"
                                    data-language="en_US"
                                    data-available="en_US,fr_CA,es_MX"
                                    data-flags="true"
                                />
                            </li>
                        </ul>
                        <ul className="float-right right-content">
                            <li>
                                <a href="https://www.facebook.com/fiitjeemumbai/" className="tran3s social" target="_blank">
                                    <i
                                        className="fa fa-facebook"
                                        aria-hidden="true"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Ffiitjeemumbai" className="tran3s social" target="_blank">
                                    <i
                                        className="fa fa-twitter"
                                        aria-hidden="true"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/mumbaifiitjee/" className="tran3s social" target="_blank">
                                    <i
                                        className="fa fa-instagram"
                                        aria-hidden="true"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>{" "}
                    {/* /.container */}
                </div>{" "}
                {/* /.top-header */}
                <div className="container">
                    <div className="header-wrapper clearfix">
                        {/* Logo */}
                        <div className="logo float-left tran4s hidden-sm hidden-xs">
                            <Link className="tran3s" to={`/`}>
                                <img
                                    src={Logo5}
                                    alt="Logo"
                                    style={{ width: 130 }}
                                />
                            </Link>
                        </div>
                        {/* Logo */}
                        <div className="logo float-left tran4s hidden-md hidden-lg">
                            <a href="index.php">
                                <img
                                    src={Logo5}
                                    alt="Logo"
                                    style={{ width: 130 }}
                                />
                            </a>
                        </div>
                        {/* ============================ Theme Menu ========================= */}
                        {/* ####################### */}
                        {/* START: RUBY DEMO HEADER */}
                        <nav
                            id="navigation1"
                            class="navigation navigation-landscape"
                        >
                            <div className="ruby-menu-demo-header">
                                {/* ########################### */}
                                {/* START: RUBY HORIZONTAL MENU */}
                                <div className="ruby-wrapper">
                                    <button className="c-hamburger c-hamburger--htx visible-xs">
                                        <span>toggle menu</span>
                                    </button>
                                    <ul
                                        className="ruby-menu  align-to-right"
                                        id="bg_blur"
                                    >
                                        <li>
                                            <Link className="tran3s" to={`/`}>
                                                Home
                                            </Link>
                                        </li>
                                        <li
                                            className="ruby-menu-mega-blog"
                                            key="programs"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <Link href="">Programs</Link>
                                            <div>
                                                <ul className="ruby-menu-mega-blog-nav">
                                                    {newData.map(
                                                        (classItem, i) => (
                                                            <li
                                                                className={
                                                                    i === 0
                                                                        ? "ruby-active-menu-item"
                                                                        : ""
                                                                }
                                                                key={
                                                                    classItem._id
                                                                }
                                                            >
                                                                <Link
                                                                    to={
                                                                        classItem
                                                                            .programs
                                                                            .length >
                                                                        0
                                                                            ? `/fiitjee_mumbai-v22/courses/class/${classItem._id}`
                                                                            : `/fiitjee_mumbai-v22/contentNotFound`
                                                                    }
                                                                >
                                                                    Class{" "}
                                                                    {
                                                                        classItem?.name
                                                                    }
                                                                </Link>
                                                                <div className="ruby-grid ruby-grid-lined">
                                                                    <div className="ruby-row">
                                                                        {classItem
                                                                            .programs
                                                                            .length >
                                                                            0 &&
                                                                            classItem.programs.map(
                                                                                (
                                                                                    val
                                                                                ) => (
                                                                                    <div
                                                                                        className="ruby-col-6"
                                                                                        key={
                                                                                            val._id
                                                                                        }
                                                                                    >
                                                                                        <span
                                                                                            className="ruby-c-title"
                                                                                            style={{
                                                                                                marginBottom: 15,
                                                                                            }}
                                                                                        >
                                                                                            {
                                                                                                val.name
                                                                                            }
                                                                                        </span>
                                                                                        {val
                                                                                            .subprograms
                                                                                            .length >
                                                                                            0 &&
                                                                                            val.subprograms.map(
                                                                                                (
                                                                                                    subPro
                                                                                                ) => (
                                                                                                    <div
                                                                                                        className="ruby-row"
                                                                                                        key={
                                                                                                            subPro._id
                                                                                                        }
                                                                                                    >
                                                                                                        <div className="ruby-col-12">
                                                                                                            <span className="ruby-c-title">
                                                                                                                <Link
                                                                                                                    to={`/fiitjee_mumbai-v22/courses/class/${classItem._id}/program/${val._id}/subprogram/${subPro._id}`}
                                                                                                                >
                                                                                                                    {
                                                                                                                        subPro.name
                                                                                                                    }
                                                                                                                </Link>
                                                                                                            </span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                )
                                                                                            )}
                                                                                    </div>
                                                                                )
                                                                            )}
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </li>

                                        <li
                                            className="ruby-menu-mega-blog"
                                            key="competitive-exams"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <a href="#">Competitive exams</a>
                                            <div>
                                                <ul className="ruby-menu-mega-blog-nav">
                                                    {compNewData?.map(
                                                        (val, i) => (
                                                            <li
                                                                className={
                                                                    i === 0
                                                                        ? "ruby-active-menu-item"
                                                                        : ""
                                                                }
                                                                key={val._id}
                                                            >
                                                                <Link
                                                                    to={
                                                                        val
                                                                            .programs
                                                                            .length >
                                                                        0
                                                                            ? `/fiitjee_mumbai-v22/competitive/course/${val._id}`
                                                                            : `/fiitjee_mumbai-v22/contentNotFound`
                                                                    }
                                                                >
                                                                    Class{" "}
                                                                    {val.name}
                                                                </Link>
                                                                <div className="ruby-grid ruby-grid-lined">
                                                                    <div className="ruby-row">
                                                                        <div className="ruby-col-12">
                                                                            {val
                                                                                .programs
                                                                                .length >
                                                                                0 &&
                                                                                val.programs.map(
                                                                                    (
                                                                                        program
                                                                                    ) => (
                                                                                        <div
                                                                                            className="ruby-row"
                                                                                            key={
                                                                                                program._id.toString() +
                                                                                                Math.random().toString()
                                                                                            }
                                                                                        >
                                                                                            <div className="ruby-col-12">
                                                                                                <span className="ruby-c-title">
                                                                                                    <Link
                                                                                                        to={`/fiitjee_mumbai-v22/competitive/course/program/${program._id}`}
                                                                                                    >
                                                                                                        {
                                                                                                            program.heading
                                                                                                        }
                                                                                                    </Link>
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    )
                                                                                )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </li>

                                        <li
                                            className="ruby-menu-mega-blog"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <a href="#">Admission test</a>
                                            <div>
                                                <ul className="ruby-menu-mega-blog-nav">
                                                    {menuLink?.length > 0 &&
                                                        menuLink.map(
                                                            (val, i) => (
                                                                <li
                                                                    className={
                                                                        i === 0
                                                                            ? `ruby-active-menu-item`
                                                                            : ``
                                                                    }
                                                                    key={
                                                                        val._id
                                                                    }
                                                                >
                                                                    <a href="#">
                                                                        {
                                                                            val?.title
                                                                        }
                                                                    </a>
                                                                    <div className="ruby-grid ruby-grid-lined">
                                                                        <div className="ruby-row">
                                                                            <div className="ruby-col-12">
                                                                                {val
                                                                                    .subMenus
                                                                                    .length >
                                                                                    0 &&
                                                                                    val.subMenus.map(
                                                                                        (
                                                                                            val
                                                                                        ) => (
                                                                                            <div
                                                                                                className="ruby-row"
                                                                                                key={
                                                                                                    val._id
                                                                                                }
                                                                                            >
                                                                                                <div className="ruby-col-12">
                                                                                                    <span className="ruby-c-title">
                                                                                                        <Link
                                                                                                            to={`${val.link}`}
                                                                                                            target="_blank"
                                                                                                        >
                                                                                                            {
                                                                                                                val?.title
                                                                                                            }
                                                                                                        </Link>
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                        )
                                                                                    )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )
                                                        )}
                                                </ul>
                                            </div>
                                        </li>
                                        <li
                                            className="ruby-menu-mega-blog"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <a href="#">Events</a>
                                            <div>
                                                <ul className="ruby-menu-mega-blog-nav">
                                                    <li className="ruby-active-menu-item">
                                                        <Link to="/fiitjee_mumbai-v22/workshop">
                                                            Workshops
                                                        </Link>
                                                        <div className="ruby-grid ruby-grid-lined">
                                                            <div className="ruby-row">
                                                                <div className="ruby-col-12">
                                                                    <div className="ruby-row">
                                                                        <div className="ruby-col-12">
                                                                            <span className="ruby-c-title">
                                                                                <a href="#">
                                                                                    Item
                                                                                    1
                                                                                </a>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ruby-row">
                                                                        <div className="ruby-col-12">
                                                                            <span className="ruby-c-title">
                                                                                <a href="#">
                                                                                    Item
                                                                                    2
                                                                                </a>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#">Camps</a>
                                                        <div className="ruby-grid ruby-grid-lined">
                                                            <div className="ruby-row">
                                                                <div className="ruby-col-12">
                                                                    <div className="ruby-row">
                                                                        <div className="ruby-col-12">
                                                                            <span className="ruby-c-title">
                                                                                <a href="#">
                                                                                    Item
                                                                                    1
                                                                                </a>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ruby-row">
                                                                        <div className="ruby-col-12">
                                                                            <span className="ruby-c-title">
                                                                                <a href="#">
                                                                                    Item
                                                                                    2
                                                                                </a>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li
                                            className="ruby-menu-mega-blog"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <a href="#">Downloads</a>
                                            <div>
                                                <ul className="ruby-menu-mega-blog-nav">
                                                    {menuData?.length > 0 &&
                                                        menuData?.map(
                                                            (val, i) => {
                                                                console.log(
                                                                    "DEMO VALUE: ---------->>>>",
                                                                    val
                                                                );

                                                                return (
                                                                    <li
                                                                        className={
                                                                            i ===
                                                                            0
                                                                                ? `ruby-active-menu-item`
                                                                                : ``
                                                                        }
                                                                        key={
                                                                            val._id
                                                                        }
                                                                    >
                                                                        <a href="#">
                                                                            {
                                                                                val?.title
                                                                            }
                                                                        </a>
                                                                        <div className="ruby-grid ruby-grid-lined">
                                                                            <div className="ruby-row">
                                                                                <div className="ruby-col-12">
                                                                                    {val
                                                                                        .subMenus
                                                                                        .length >
                                                                                        0 &&
                                                                                        val.subMenus.map(
                                                                                            (
                                                                                                value
                                                                                            ) => (
                                                                                                <div
                                                                                                    className="ruby-row"
                                                                                                    key={
                                                                                                        value._id
                                                                                                    }
                                                                                                >
                                                                                                    <div className="ruby-col-12">
                                                                                                        <span className="ruby-c-title">
                                                                                                            <Link
                                                                                                                to={`http://35.154.95.255:8000/downloads/${value.pdfFile}`}
                                                                                                                target="_blank"
                                                                                                            >
                                                                                                                {
                                                                                                                    value?.title
                                                                                                                }
                                                                                                            </Link>
                                                                                                        </span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            )
                                                                                        )}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                );
                                                            }
                                                        )}
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <Link
                                                to={`/fiitjee_mumbai-v22/result`}
                                                className="tran3s"
                                            >
                                                Results
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* END:   RUBY HORIZONTAL MENU */}
                                {/* ########################### */}
                            </div>
                        </nav>
                        {/* END:   RUBY DEMO HEADER */}
                        {/* ######################### */}
                    </div>{" "}
                    {/* /.header-wrapper */}
                </div>
            </header>{" "}
            {/* /.theme-menu-wrapper */}
        </>
    );
};

export default Header;
