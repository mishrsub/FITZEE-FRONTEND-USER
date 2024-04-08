import React, { useEffect, useState } from 'react';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import Courosel from '../UI/Courosel';
import FindCourse from '../UI/FindCourse';
import FindCourseBlock from '../UI/FindCourseBlock';
import RegistrationBanner from '../UI/RegistrationBanner';
import PopularCourses from '../UI/PopularCourses';
import ThemeCounter from '../UI/ThemeCounter';
import CourseSection from '../UI/CourseSection';
import Testimonial from '../UI/Testimonial';
import RecentNews from '../UI/RecentNews';
import InstructorBanner from '../UI/InstructorBanner';
import PartnerLogo from '../UI/PartnerLogo';

const Home = () => {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  const handleHeaderHover = (isHovered) => {
    setIsHeaderHovered(isHovered);
  };

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const existingScript = document.getElementById(src);
        if (!existingScript) {
          const script = document.createElement('script');
          script.src = src;
          script.id = src;
          script.async = true;
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        } else {
          resolve();
        }
      });
    };

    const scriptsToLoad = [
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js",
      "/vendor/particles.js-master/particles.min.js",
      "/vendor/particles.js-master/demo/js/lib/stats.js",
      "/vendor/particles.js-master/demo/js/app.js",
      "/vendor/WOW-master/dist/wow.min.js",
      "/vendor/Camera-master/scripts/camera.min.js",
      "/vendor/Camera-master/scripts/jquery.mobile.customized.min.js",
      "/vendor/bootstrap-mega-menu/js/menu.js",
      "/vendor/owl-carousel/owl.carousel.min.js",
      "/vendor/Counter/jquery.counterup.min.js",
      "/vendor/Counter/jquery.waypoints.min.js",
      "/js/theme.js",
      "/js/ruby-demo.js",
      "/js/ruby-main.js",
      
  
      // "/vendor/bootstrap.min.js",
      // "/vendor/bootstrap-select/js/bootstrap-select.js",
      // "/vendor/jquery-ui/jquery-ui.min.js",
      "/vendor/jquery.2.2.3.min.js",
      "/vendor/Camera-master/scripts/jquery.easing.1.3.js",
      // "/vendor/bootstrap/bootstrap.min.js",
      // "/vendor/bootstrap-select/dist/js/bootstrap-select.js",
    ];

    const loadAllScripts = async () => {
      for (const script of scriptsToLoad) {
        try {
          await loadScript(script);
          console.log(`${script} loaded successfully`);
        } catch (error) {
          console.error(`Error loading ${script}:`, error);
        }
      }
    };

    loadAllScripts();

    return () => {
      scriptsToLoad.forEach((script) => {
        const existingScript = document.getElementById(script);
        if (existingScript) {
          existingScript.remove();
        }
      });
    };
  }, []);

  return (
    <>
     <div className={`main-page-wrapper`}>
     <Header onHeaderHover={handleHeaderHover} />
     <div className={`main-page-wrapper ${isHeaderHovered ? 'blur' : ''}`}>
        <Courosel />
        <FindCourse />
        <FindCourseBlock />
        <RegistrationBanner />
        <PopularCourses />
        <ThemeCounter />
        <CourseSection />
        <Testimonial />
        <RecentNews />
        <InstructorBanner />
        <PartnerLogo />
        <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
