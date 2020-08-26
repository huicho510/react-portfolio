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
          <a href="#!">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#!">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="#!">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </main>
      </div>
      
  );
};

export default Main;
