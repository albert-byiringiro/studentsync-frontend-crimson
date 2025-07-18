const HeroSection = () => {
  return (
    <div className="landing-page">
      <div className="hero-container">
        <div className="text-container">
          <h3>Student management platform</h3>
          <h1>STUDENTSYNC MANAGEMENT WEB APP</h1>
          <p className="p1">student for academic year 2025/2026</p>
          <div className="buttons">
            <div className="button-1">
              <p className="learn-more">learn More</p>
            </div>
            <div className="button-2">
              <p className="all-students">all students</p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img
            className="first-image"
            src="src/assets/hero_pics/54100351610_b2e6df9d55_o 1.png"
          />

          <img
            src="src/assets/hero_pics/download 1.png"
            className="second-image"
          />
          <img
            src="src/assets/hero_pics/53998174142_660ae8a080_c 1.png"
            className="third-image"
          />
          <img
            src="src/assets/hero_pics/53999073171_9d71b8f1b6_k 2.png"
            className="forth-image"
          />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
