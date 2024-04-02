import React, { useEffect } from 'react'
import InnerBanner from '../../pages/InnerBanner'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import CourseDetailSection from '../../pages/CourseDetailSection'
import { useParams } from 'react-router-dom'
import { getCourseByClassId, getCourseDetail } from '../../react-query/api/Course'
import InnerDetailBanner from '../../pages/InnerDetailBanner'

const CourseDetail = () => {

    const { classId,programId,subprogramId } = useParams();
  
    const {data:classData,refetch:classFetch} = getCourseByClassId(classId)
    const { data:courseDetail,refetch:detailFetch } = getCourseDetail(programId,subprogramId);
    
    // console.log('====================================');
    console.log("My Course Detail: ",courseDetail);
    // console.log('====================================');

    useEffect(() =>{
      classFetch();
      detailFetch();
    },[classId,programId,subprogramId])

 
  return (
    <>
    <div className="main-page-wrapper">
        <Header/>
            <InnerDetailBanner title={`CLASS ${classData?.name}`}/>
            <CourseDetailSection  getData={courseDetail}/>
        <Footer/>
    </div>
    </>
  )
}

export default CourseDetail
