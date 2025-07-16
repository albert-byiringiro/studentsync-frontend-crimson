const HeroSection = () => {
  return (
    <div id="hero-container">
      <div id="text-container">
        <h3>Student management platform</h3>
        <h1>STUDENTSYNC MANAGEMENT WEB APP</h1>
        <p>student for academic year 2025/2026</p>
        <button>learn more</button>
        <button id="all-students">all students</button>
      </div>
      <div id="image-container">
        <div>
          <img
            id="first-image"
            src="src/assets/hero_pics/54100351610_b2e6df9d55_o 1.png"
          />
        </div>
        <div id="other-images">
          <img src="src/assets/hero_pics/download 1.png" id="second-im" />
          <img
            src="src/assets/hero_pics/53998174142_660ae8a080_c 1.png"
            id="third-im"
          />
          <img
            src="src/assets/hero_pics/53999073171_9d71b8f1b6_k 2.png"
            id="four-im"
          />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
