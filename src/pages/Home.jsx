// import React from 'react'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
import Courosel from '../UI/Courosel'
import FindCourse from '../UI/FindCourse'
import FindCourseBlock from '../UI/FindCourseBlock'
import RegistrationBanner from '../UI/RegistrationBanner'
import PopularCourses from '../UI/PopularCourses'
import ThemeCounter from '../UI/ThemeCounter'
import CourseSection from '../UI/CourseSection'
import Testimonial from '../UI/Testimonial'
import RecentNews from '../UI/RecentNews'
import InstructorBanner from '../UI/InstructorBanner'
import PartnerLogo from '../UI/PartnerLogo'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    // Function to load a script dynamically
    const loadScript = (src, id) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    // Define an array of scripts to load
    const scriptsToLoad = [
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js",
      '/vendor/particles.js-master/particles.min.js',
      '/vendor/particles.js-master/demo/js/lib/stats.js',
      '/vendor/particles.js-master/demo/js/app.js',
      'https://cdn.jsdelivr.net/npm/react-particles-js@3.6.0/umd/particles.min.js'
    ];

    // Load all the scripts
    const loadAllScripts = async () => {
      for (const script of scriptsToLoad) {
        try {
          await loadScript(script, script.split('/').pop().split('.')[0]);
          console.log(`${script} loaded successfully`);
        } catch (error) {
          console.error(`Error loading ${script}:`, error);
        }
      }
    };

    // Call the function to load all scripts
    loadAllScripts();

    // Cleanup function to remove the dynamically added scripts when the component unmounts
    return () => {
      scriptsToLoad.forEach((script) => {
        document.getElementById(script.split('/').pop().split('.')[0])?.remove();
      });
    };
  }, []); // The empty dependency array ensures this useEffect runs once on mount

  return (
    <>  
        <div className="main-page-wrapper">
            {/* <Header/> */}
            {/* <Courosel/>
            <FindCourse/> */}
            {/* <FindCourseBlock/>
            <RegistrationBanner/>
            <PopularCourses/>
            <ThemeCounter/>
            <CourseSection/>
            <Testimonial/>
            <RecentNews/>
            <InstructorBanner/>
            <PartnerLogo/> */}
            <Footer/>
        </div>
    </>
  )
}

export default Home
