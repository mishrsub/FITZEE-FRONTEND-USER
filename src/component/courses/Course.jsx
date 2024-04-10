import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import InnerBanner from '../../pages/InnerBanner'
import CourseGrid from './CourseGrid'
import Footer from '../footer/Footer'
import { useParams } from 'react-router-dom'
import { getCourseAndProgramByClassId, getCourseByClassId } from '../../react-query/api/Course'
import Loading from '../../UI/Loading'

const Course = () => {
  const { classId,programId } = useParams();
  let course = {};

  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  const handleHeaderHover = (isHovered) => {
    setIsHeaderHovered(isHovered);
  };

  // State to manage loading indicator
  if(classId && programId) {
    course = getCourseAndProgramByClassId(classId,programId);
  } else {
     course = getCourseByClassId(classId);
  }
  const { isLoading,refetch } = course;

  console.log('====================================');
  console.log("COURSE::::: -->",course);
  console.log('====================================');

  // useEffect to refetch data when the classId changes
  useEffect(() => {
    refetch();
  }, [classId,programId, refetch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="main-page-wrapper">
        <Header onHeaderHover={handleHeaderHover} />
        <div className={`main-page-wrapper ${isHeaderHovered ? 'blur' : ''}`}>
          <InnerBanner title={`Class ${course?.data?.name}`} />
          <CourseGrid course={course} />
          </div>
        <Footer />
      </div>
    </>
  );
}

export default Course;
