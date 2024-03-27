const ThemeCounter = () => {
  return (
    <div className="theme-counter">
  <div className="count-particles">
    <span className="js-count-particles">--</span>
  </div>
  <div id="particles-js" />
  <div className="opacity">
    <div className="container">
      <div className="row">
        <div className="col-sm-3 col-xs-6">
          <h3>
            <span className="counter">85,873</span>+
          </h3>
          <p>Students</p>
        </div>
        <div className="col-sm-3 col-xs-6">
          <h3>
            <span className="counter">468</span>+
          </h3>
          <p>Courses</p>
        </div>
        <div className="col-sm-3 col-xs-6">
          <h3>
            <span className="counter">1,729</span>+
          </h3>
          <p>Projects</p>
        </div>
        <div className="col-sm-3 col-xs-6">
          <h3>
            <span className="counter">2,560</span>+
          </h3>
          <p>Ratings</p>
        </div>
      </div>
    </div>{" "}
    {/* /.container */}
  </div>{" "}
  {/* /.opacity */}
</div>

  )
}

export default ThemeCounter
