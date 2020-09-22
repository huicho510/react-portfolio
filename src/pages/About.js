import React from "react";
import Portraitsm from "../images/portraitsm.jpg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <main id="about">
        <h1 className="lg-heading">
          About <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">Let Me tell you a few things</h2>
        <div className="about-info">
          <img src={Portraitsm} alt="Luis Cervantes" className="bio-image" />
          <div className="bio">
            <h3 className="text-secondary">Bio</h3>
            <p>
              Hi, i'm Luis. I'm a multi-talented human with a passion for web
              development. I really enjoy developing the front-end of
              applications and producing simple, yet beautiful products. I value
              simple content structure, clean design patterns, and thoughtful
              interactions.
            </p>
            <h4>Skills & Technologies</h4>
            <div id="skills">
            <i  class="fab fa-react">React</i>
            <i class="fab fa-js-square">Javascript</i>
            <i class="fab fa-node">Node.js</i>
            <i class="fab fa-html5">Html</i>
            <i class="fab fa-css3-alt">Css</i>
            <i class="fab fa-sass">Sass</i>
            <i class="fab fa-bootstrap">Bootstrap</i>
            <i class="fas fa-database">MYSQL & MongoDB</i>
            </div>
          </div>
          {/* <div className="job job-1">
          <h3>Diablo Valley College</h3>
          <h5>Associates degree</h5>
          <p>
            Sociology
          </p>
        </div> */}
          <div className="job job-2">
            <h3>Sacramento State</h3>
            <h5>Bachelors degree</h5>
            <p>Sociology</p>
          </div>
          <div className="job job-3">
            <h3>UC Davis</h3>
            <h5>Full-Stack Boot Camp</h5>
            <p>Web Development</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
