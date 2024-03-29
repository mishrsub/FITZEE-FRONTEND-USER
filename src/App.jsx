import "./App.css";
import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./component/courses/Course";
import CourseDetail from "./component/CourseDetail/CourseDetail";
import ErrorPage from "./component/Error/ErrorPage";
import CompetitiveExam from "./component/CompetitiveExam/CompetitiveExam";
import CompetitiveExamDetail from "./component/CompetitiveExam/CompetitiveExamDetail";
import Faq from "./component/Faq/Faq";
import Blog from "./component/Blog/Blog";
import BlogDetail from "./component/Blog/BlogDetail";
import Event from "./component/event/event";
import EventDetail from "./component/event/EventDetail";
import Result from "./component/Result/Result";
import ResultDetail from "./component/Result/ResultDetail";
import News from "./component/news/News";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import { useEffect } from "react";

const CourseRoute = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <Routes>
                <Route path="/class/:classId" element={<Course />} />
                <Route
                    path="/class/:classId/program/:programId"
                    element={<Course title={"OUR COURSES"} />}
                />
                <Route
                    path="/class/:classId/program/:programId/subprogram/:subprogramId"
                    element={<CourseDetail />}
                />
            </Routes>
        </>
    );
};

const CompetitiveCourseRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/class/:classId" element={<Course />} />
                <Route
                    path="/class/:classId/program/:programId"
                    element={<Course title={"OUR COURSES"} />}
                />
                <Route
                    path="/class/:classId/program/:programId/subprogram/:subprogramId"
                    element={<CourseDetail />}
                />
            </Routes>
        </>
    );
};

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/fiitjee_mumbai-v11/courses/*"
                        element={<CourseRoute />}
                    />
                    <Route
                        path="/fiitjee_mumbai-v11/contentNotFound"
                        element={<ErrorPage />}
                    />

                    <Route
                        path="/fiitjee_mumbai-v11/courses/competitive/*"
                        element={<CompetitiveCourseRoute />}
                    />

                    <Route
                        path="/fiitjee_mumbai-v11/result"
                        element={<Result />}
                    />
                    <Route
                        path="/fiitjee_mumbai-v11/result/:resultId"
                        element={<ResultDetail />}
                    />

                    {/* Workshop route */}
                    <Route
                        path="/fiitjee_mumbai-v11/workshop"
                        element={<Event />}
                    />
                    <Route
                        path="/fiitjee_mumbai-v11/workshop/eventDetail/:workshopId"
                        element={<EventDetail />}
                    />

                    {/* news */}
                    <Route path="/fiitjee_mumbai-v11/news" element={<News />} />

                    {/* Blog */}
                    <Route path="/fiitjee_mumbai-v11/blog" element={<Blog />} />
                    <Route
                        path="/fiitjee_mumbai-v11/blog/detail/:blogId"
                        element={<BlogDetail />}
                    />

                    {/* About Contact Faq*/}
                    <Route
                        path="/fiitjee_mumbai-v11/about"
                        element={<About />}
                    />
                      <Route
                        path="/fiitjee_mumbai-v11/contact"
                        element={<Contact />}
                    />
                     <Route
                        path="/fiitjee_mumbai-v11/faq"
                        element={<Faq />}
                    />

                    {/* Competitive course list route */}
                    <Route
                        path="/fiitjee_mumbai-v11/competitive/course/:classId"
                        element={<CompetitiveExam/>}
                    />
                    <Route
                        path="/fiitjee_mumbai-v11/competitive/course/program/:programId"
                        element={<CompetitiveExamDetail/>}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;

{
    /* <Footer /> */
}
{
    /* <Home/> */
}
{
    /* <Event/> */
}
{
    /* <EventDetail/> */
}
{
    /* <Blog/> */
}
{
    /* <BlogDetail/> */
}
{
    /* <Faq/> */
}
{
    /* <Course /> */
}
{
    /* <CourseDetail/> */
}
{
    /* <CompetitiveExam/> */
}
{
    /* <CompetitiveExamDetail/> */
}
