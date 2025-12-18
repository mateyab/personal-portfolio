import React from "react";
import "../Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-text">
          <h1 className="name">Mateya Berezowsky</h1>
          <h3 className="subtitle">Software Engineering Student</h3>

          <p className="blurb">
            I am a Software Engineering student at the University of Victoria
            with a specialization in data analysis and artificial intelligence.
            <br></br>
            <br></br>
            See my projects and experience to learn more about me!
          </p>
        </div>

        <div className="home-image">
          <img
            src={`${process.env.PUBLIC_URL}/profile.jpg`}
            alt="Profile"
            className="profile-pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;