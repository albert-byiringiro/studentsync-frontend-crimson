const Gallery = () => {
  return (
    <section>
      <div>
        <h4 className="gallery">Gallery</h4>
        <h2 className="title">The GYM college student lifestyle</h2>
        <br />
        <br />
        <div className="paragraph">
          <p className="p1">All</p>
          <p className="p2">Foundations period </p>
          <p className="p3">Sports culture </p>
          <p className="p4">Project phase</p>
        </div>
        <div className="images">
          <img src="src/assets/Frame 385 (2).png" />
          <img className="img2" src="src/assets/Frame 386.png" />
          <img className="img3" src="src/assets/Frame 387.png" />
        </div>
      </div>
    </section>
  );
};
export default Gallery;
