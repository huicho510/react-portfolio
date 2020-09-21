import React from "react";

const Main = () => {
  return (
      <div className = "bg-img">
      <main className="home">
        <h1 className="lg-heading">
          Luis <span className="text-secondary">Cervantes</span>
        </h1>
        <h2 className="sm-heading">Web Developer, Programmer, & Designer</h2>
        <div className="icons">
          <a href="https://www.linkedin.com/in/luis-cervantes-8b4035190/">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/huicho510">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </main>
      </div>
      
  );
};

export default Main;
