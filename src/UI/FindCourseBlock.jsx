import PNG1 from "../assets/images/icon/1.png"
import PNG2 from "../assets/images/icon/2.png"
import PNG3 from "../assets/images/icon/3.png"

const FindCourseBlock = () => {
  return (
  <div className="find-course-block">
  <div className="container">
    <div className="theme-title text-center">
      <h2>Welcome to a transformative journey with FIITJEE!</h2>
    </div>{" "}
    {/* /.theme-title */}
    <div className="clearfix">
      <div className="single-block float-left tran3s">
        {/* <i class="flaticon-diamond"></i> */}
        <center>
          <img src={PNG1} style={{ width: 75 }} />
        </center>
        <h5>Comprehensive study material</h5>
        <p>
          Our years of expertise has helped us build comprehensive study
          material for various competitive exams.
        </p>
        <a href="#" className="tran3s">
          <i className="flaticon-arrows" />
        </a>
      </div>{" "}
      {/* /.single-block */}
      <div className="single-block float-left tran3s">
        <center>
          <img src={PNG2} style={{ width: 75 }} />
        </center>
        <h5>Personalized Learning</h5>
        <p>
          Every student is unique; hence a unique study plan is developed for
          every student that is enrolled at FIITJEE.
        </p>
        <a href="#" className="tran3s">
          <i className="flaticon-arrows" />
        </a>
      </div>{" "}
      {/* /.single-block */}
      <div className="single-block float-left tran3s">
        <center>
          <img src={PNG3} style={{ width: 75 }} />
        </center>
        <h5>Pattern Proof Teaching</h5>
        <p>
          At FIITJEE, we believe in building up conceptual clarity. So that a
          student can perform well in any exam irrespective of the pattern.
        </p>
        <a href="#" className="tran3s">
          <i className="flaticon-arrows" />
        </a>
      </div>{" "}
      {/* /.single-block */}
    </div>
  </div>{" "}
  {/* /.container */}
</div>

  )
}

export default FindCourseBlock
