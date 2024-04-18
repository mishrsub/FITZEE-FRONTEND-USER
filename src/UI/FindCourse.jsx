import React, { useEffect, useState } from "react";
import { getGroups, getGroupsById } from "../react-query/api/GroupApi";
import { useNavigate,Link } from 'react-router-dom';

const FindCourse = () => {
    const navigate = useNavigate();

    const [catHandler, setCatHandle] = useState({
        catHandler1: "",
        catHandler2: "",
        catHandler3: "",
    });


    const { isLoading, error, data: groups, refetch } = getGroups();
    const {
        isLoading: groupDataLoading,
        error: error1,
        data: groupData,
        refetch: refetch1,
    } = getGroupsById(catHandler?.catHandler1);

    // console.log("DATA----------->>>>>", groupData);
    // // console.log("_id: ", catHandler.catHandler1);
    // console.log("Cat handler 1 -------->", catHandler.catHandler1);
    // console.log("Cat handler 2 -------->", catHandler.catHandler2);
    const [classData,setClassData] = useState([]);
    const [programData,setProgramData] = useState([]);


    useEffect(() => {
        if (!groupDataLoading && groupData) {
            setClassData(groupData.classData);
        }
    }, [groupDataLoading, groupData]);

    useEffect(() => {
        if (!groupDataLoading && groupData && catHandler.catHandler2) {
            const classPrograms = classData.find((val) => val._id.toString() === catHandler.catHandler2.toString());
            if (classPrograms) {
                setProgramData(classPrograms.programData);
            }
        }
    }, [groupDataLoading, classData, catHandler.catHandler2]);

    const handleButtonClick = () => {
        // Redirect to the desired route
        navigate(`/fiitjee_mumbai-v22/courses/class/${catHandler.catHandler2}/program/${catHandler.catHandler3}`);
    };
    

    const handleSelectChange = (e, fieldName) => {
        const { value } = e.target;
        setCatHandle((prevCatHandler) => ({
            ...prevCatHandler,
            [fieldName]: value,
        }));

        // if(fieldName === "catHandler1") {
        //     setClassData(groupData?.classData)
        // }
        // if(fieldName === "catHandler2") {
        //     const classPrograms = classData.find((val) =>val._id.toString() === catHandler.catHandler2.toString());
        //     setProgramData(classPrograms?.programData)
        // }

    };

    console.log('====================================');
    console.log("Class Data: ",classData);
    console.log("Program Data: ",programData);
    console.log('====================================');
    console.log("Cat handler 2",catHandler.catHandler2);
    console.log("Cat handler 3",catHandler.catHandler3);
    console.log('====================================');
    console.log('====================================');

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
                                        {groups?.length > 0 &&
                                            groups.map((val) => (
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
                                        {
                                            programData.length >0 && programData.map((val) =>(
                                                <option key={val._id} value={val._id}>{val.name}</option>
                                            ))
                                        }
                                        {/* <option>Items</option>
                                        <option>Green Olympiad</option>
                                        <option>ANMC</option>
                                        <option>NMTC</option> */}
                                    </select>
                                </div>{" "}
                                {/* /.single-input */}
                            </div>{" "}
                            {/* /.col */}
                            <div className="col-md-2 col-sm-4 col-xs-12">
                                    <button className="action-button tran3s" onClick={handleButtonClick}>
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
