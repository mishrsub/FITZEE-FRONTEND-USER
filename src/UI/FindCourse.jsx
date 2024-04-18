import React, { useEffect, useState } from "react";
import { getGroups, getGroupsById } from "../react-query/api/GroupApi";
import Loading from "./Loading";

const FindCourse = () => {
    const [options1, setOptions1] = useState([]);
  const [options2, setOptions2] = useState([]);
  const [options3, setOptions3] = useState([]);
    const [catHandler, setCatHandle] = useState({
        catHandler1: "",
        catHandler2: "",
        catHandler3: "",
    });
    const [classItem, setClassItem] = useState([]);

    

    const fetchDataForSelectBox1 = async () => {
        try {
            const { isLoading, error, data: groups, refetch } = getGroups();

            if(isLoading) {
                return <Loading/>
            }
            setOptions1(groups);
        } catch (error) {
          console.error('Error fetching data for Select Box 1:', error);
        }
      };

    useEffect(() => {
        // Fetch data for the first select box when the component mounts
        fetchDataForSelectBox1();
      }, []);

    const {
        isLoading: loader1,
        error: error1,
        data: groupData,
        refetch: refetch1,
    } = getGroupsById(catHandler?.catHandler1);


    const handleSelectChange = (e, fieldName) => {
        const { value } = e.target;
        setCatHandle((prevCatHandler) => ({
            ...prevCatHandler,
            [fieldName]: value,
        }));
    };


    // console.log('====================================');
    // console.log("Groups: ",groups);
    // console.log("Groups Data: ",groupData);
    // console.log('====================================');
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
                                        value={catHandler.catHandler1}
                                        onChange={(e) =>
                                            handleSelectChange(e, "catHandler1")
                                        }
                                    >
                                        <option value="">All Groups</option>
                                        {options1?.length > 0 &&
                                            options1.map((val) => (
                                                <option
                                                    value={val._id}
                                                    key={val._id}
                                                >
                                                    {val.name}
                                                </option>
                                            ))}
                                        {/* <option value={1}>
                                            Class-wise Competitive &amp;
                                            Scholarship Tests
                                        </option>
                                        <option value={2}>
                                            Results &amp; achievements
                                        </option>
                                        <option value={3}>
                                            Programs at FIITJEE, Mumbai
                                        </option>
                                        <option value={4}>
                                            Upcoming admission test
                                        </option>
                                        <option value={5}>Events</option> */}
                                    </select>
                                </div>{" "}
                                {/* /.single-input */}
                            </div>{" "}
                            {/* /.col */}
                            <div className="col-md-3 col-xs-6">
                                <div className="single-input">
                                    <select
                                        className="selectpicker form-control"
                                        value={catHandler.catHandler2}
                                        onChange={(e) =>
                                            handleSelectChange(e, "catHandler2")
                                        }
                                    >
                                        <option>Categories</option>
                                        {groupData?.classData?.length > 0 &&
                                            groupData?.classData.map((val) => (
                                                <option
                                                    value={val._id}
                                                    key={val._id}
                                                >
                                                    {val?.name}
                                                </option>
                                            ))}
                                    </select>
                                </div>{" "}
                                {/* /.single-input */}
                            </div>{" "}
                            {/* /.col */}
                            <div className="col-md-4 col-sm-8 col-xs-12">
                                <div className="single-input">
                                    <select
                                        className="selectpicker form-control"
                                        value={catHandler.catHandler3}
                                        onChange={(e) =>
                                            handleSelectChange(e, "catHandler3")
                                        }
                                    >
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
                                    Search Now{" "}
                                    <i
                                        className="fa fa-search"
                                        aria-hidden="true"
                                    />
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
