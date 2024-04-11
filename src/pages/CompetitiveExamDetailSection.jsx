import React, { useEffect } from "react";
import Img4 from "../assets/images/home/fiitjee_banner-4.jpg";
import Img2 from "../assets/images/home/fiitjee_banner-2.jpg";
import Img3 from "../assets/images/home/fiitjee_banner-3.jpg";
import { useParams } from "react-router-dom";
import { getCourseDetailByProgramId } from "../react-query/api/CompetitiveCourse";
import Loading from "../UI/Loading";

const CompetitiveExamDetailSection = () => {
    const { programId } = useParams();

    const { data, isLoading, refetch, error } =
        getCourseDetailByProgramId(programId);

    console.log("====================================");
    console.log("Program detail by id ", data);
    console.log("====================================");
    useEffect(() => {
        refetch();
    }, [programId]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="course-details">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-xs-12">
                        <div className="details-wrapper">
                            <div className="course-title">
                                <h2>{data?.heading}</h2>
                            </div>{" "}
                            {/* /.course-title */}
                            <div className="course-info row">
                                <div className="col-xs-4">
                                    <div>
                                        <i className="flaticon-user" />
                                        <p>Organising Body</p>
                                        <b>{data?.organisingBody}</b>
                                    </div>
                                </div>
                                <div className="col-xs-4">
                                    <div>
                                        <i className="flaticon-bookmark" />
                                        <p>Eligible Classes</p>
                                        CLASS:
                                        {data?.eligibleClass?.length > 0 &&
                                            data?.eligibleClass.map((val) => (
                                                <b
                                                    key={val._id}
                                                >{` ${val} |`}</b>
                                            ))}
                                    </div>
                                </div>
                                <div className="col-xs-4">
                                    <div>
                                        <i className="flaticon-star" />
                                        <p>Subjects</p>
                                        {data?.subjects?.length > 0 &&
                                            data?.subjects.map((val) => (
                                                <b>{val} &amp; </b>
                                            ))}
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-stylethree">
                                <div
                                    id="testimonial-carousel-one"
                                    className="carousel slide"
                                    data-ride="carousel"
                                    data-interval={5000}
                                >
                                    <div className="main-wrapper">
                                        {/* <div class="shadow"></div> */}
                                        {/* Wrapper for slides */}

                                        <div className="carousel-inner">
                                            {data?.programDetailImg?.length >
                                                0 &&
                                                data?.programDetailImg.map(
                                                    (val, i) => (
                                                        <div
                                                            key={val._id}
                                                            className={
                                                                i === 0
                                                                    ? "item active"
                                                                    : "item"
                                                            }
                                                        >
                                                            <img
                                                                src={`http://35.154.95.255:8000/uploads/${val}`}
                                                                alt=""
                                                                width={"100%"}
                                                                height={393}
                                                            />
                                                        </div>
                                                    )
                                                )}
                                            {/* <div className="item active">
                        <img src={Img2} alt="" />
                      </div>
                      <div className="item">
                        <img src={Img3} alt="" />
                      </div> */}
                                        </div>

                                        {/* /.carousel-inner */}
                                        {/* Left and right controls */}
                                        <a
                                            className="left carousel-control"
                                            href="#testimonial-carousel-one"
                                            data-slide="prev"
                                            style={{
                                                top: 0,
                                                bottom: "auto",
                                            }} // Adjusted style
                                        >
                                            <i
                                                className="fa fa-chevron-left"
                                                aria-hidden="true"
                                            />
                                            <span className="sr-only">
                                                Previous
                                            </span>
                                        </a>
                                        <a
                                            className="right carousel-control"
                                            href="#testimonial-carousel-one"
                                            data-slide="next"
                                            style={{
                                                top: 0,
                                                bottom: "auto",
                                            }} // Adjusted style
                                        >
                                            <i
                                                className="fa fa-chevron-right"
                                                aria-hidden="true"
                                            />
                                            <span className="sr-only">
                                                Next
                                            </span>
                                        </a>
                                    </div>{" "}
                                    {/* /.main-wrapper */}
                                </div>{" "}
                                {/* /#testimonial-carousel-one */}
                            </div>{" "}
                            {/* /.testimonial-styleOne */}
                            <h3 style={{ paddingTop: 35 }}>
                                {data?.programBrief}
                            </h3>
                            <p className="p1">{data?.programDescription}</p>
                            <div className="curriculum-panel">
                                <div
                                    className="panel-group theme-accordion"
                                    id="accordionTwo"
                                >
                                    {data?.programPoint?.length > 0 &&
                                        data?.programPoint.map((val, i) => (
                                            <div className="panel" key={i}>
                                                <div
                                                    className={
                                                        i === 0
                                                            ? "panel-heading active-panel"
                                                            : "panel-heading"
                                                    }
                                                >
                                                    <h5 className="panel-title">
                                                        <a
                                                            data-toggle="collapse"
                                                            data-parent="#accordionTwo"
                                                            href={`#collapse${i}`}
                                                            className="clearfix"
                                                        >
                                                            <h6 className="float-left">
                                                                {val?.title}
                                                            </h6>
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div
                                                    id={`collapse${i}`}
                                                    className={
                                                        i === 0
                                                            ? "panel-collapse collapse in"
                                                            : "panel-collapse collapse"
                                                    }
                                                >
                                                    <div className="panel-body">
                                                        <p>
                                                            {val?.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>{" "}
                                {/* end #accordionTwo */}
                            </div>{" "}
                            {/* End of .curriculum-panel */}
                        </div>
                    </div>
                    {/* /.col- */}
                    {/* ************************* SIDEBAR ***************************** */}
                    <div className="col-md-4 col-sm-6 col-xs-12  theme-sidebar">
                        <div className="course-sidebar">
                            <div className="sidebar-categories">
                                <div
                                    className="panel-group theme-accordion"
                                    id="accordion"
                                >
                                    
                                    <div className="panel-heading">
                                        <div className="panel-heading">
                                            <h6 className="panel-title">
                                                <a
                                                    data-toggle="collapsein"
                                                    data-parent="#accordion"
                                                    href="#collapse2"
                                                >
                                                    Previous Year Papers
                                                </a>
                                            </h6>
                                        </div>
                                        <div
                                            id="collapse2"
                                            className="panel-collapse collapsein"
                                        >
                                            <div className="panel-body">
                                                <ul>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            2022-2023
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            2021-2022
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            2020-2021
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            2019-2020
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            2018-2019
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* /panel 2 */}
                                </div>{" "}
                                {/* end #accordion */}
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
                                                    href="#collapse3"
                                                >
                                                    Class VI
                                                </a>
                                            </h6>
                                        </div>
                                        <div
                                            id="collapse3"
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
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            Item 3
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
                                                    href="#collapse4"
                                                >
                                                    Class VII
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
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            Item 3
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
                                                    href="#collapse5"
                                                >
                                                    Class VIII
                                                </a>
                                            </h6>
                                        </div>
                                        <div
                                            id="collapse5"
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
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            Item 3
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
                                                    href="#collapse6"
                                                >
                                                    Class IX
                                                </a>
                                            </h6>
                                        </div>
                                        <div
                                            id="collapse6"
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
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            Item 3
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* /panel 4 */}
                                    <div className="panel">
                                        <div className="panel-heading">
                                            <h6 className="panel-title">
                                                <a
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapse7"
                                                >
                                                    Class X
                                                </a>
                                            </h6>
                                        </div>
                                        <div
                                            id="collapse7"
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
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            Item 3
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* /panel 5 */}
                                    <div className="panel">
                                        <div className="panel-heading">
                                            <h6 className="panel-title">
                                                <a
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapse8"
                                                >
                                                    Class XI
                                                </a>
                                            </h6>
                                        </div>
                                        <div
                                            id="collapse8"
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
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            Item 3
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* /panel 6 */}
                                    <div className="panel">
                                        <div className="panel-heading">
                                            <h6 className="panel-title">
                                                <a
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapse9"
                                                >
                                                    Class XII
                                                </a>
                                            </h6>
                                        </div>
                                        <div
                                            id="collapse9"
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
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            Item 3
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* /panel 7 */}
                                    <div className="panel">
                                        <div className="panel-heading">
                                            <h6 className="panel-title">
                                                <a
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapse10"
                                                >
                                                    Class XII Pass
                                                </a>
                                            </h6>
                                        </div>
                                        <div
                                            id="collapse10"
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
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            Item 3
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* /panel 5 */}
                                </div>
                            </div>{" "}
                        </div>{" "}
                    </div>{" "}
                    {/* /.col- */}
                </div>{" "}
                {/* /.row */}
            </div>{" "}
            {/* /.container */}
        </div>
    );
};

export default CompetitiveExamDetailSection;
