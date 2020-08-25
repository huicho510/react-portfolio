import React from 'react'
import Portraitsm from '../images/portraitsm.jpg'






const About = () => {
    return (
        <div>
    <main id="about">
      <h1 className="lg-heading">About <span className="text-secondary">Me</span></h1>
      <h2 className="sm-heading">
        Let Me tell you a few things
      </h2>
      <div className="about-info">
    <img src={Portraitsm} alt="Luis Cervantes" className="bio-image" />
        <div className="bio">
          <h3 className="text-secondary">Bio</h3>
          <p>
            Motivated professional looking to positively impact the computer
            programming world
          </p>
        </div>
        <div className="job job-1">
          <h3>Diablo Valley College</h3>
          <h5>Associates degree</h5>
          <p>
            Sociology
          </p>
        </div>
        <div className="job job-2">
          <h3>Sacramento State</h3>
          <h5>Bachelors degree</h5>
          <p>
           Sociology
          </p>
        </div>
        <div className="job job-3">
          <h3>UC Davis</h3>
          <h5>Coding Boot Camp Certificate</h5>
          <p>
           Web Development
          </p>
        </div>
      </div>
    </main>

    <footer id="main-footer">
      Copyright &copy; 2020
    </footer>
        </div>
    )
}

export default About