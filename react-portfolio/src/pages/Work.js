import React from "react";
import Music from "../images/projects/music.jpg";
import Burg from "../images/projects/burg.jpg";
import Create from "../images/projects/create.jpg";
import Guess from "../images/projects/guess.jpg";
import Notes from "../images/projects/notes.jpg";
import People from "../images/projects/people.jpg";
import Quiz from "../images/projects/quiz.jpg";
import Schedule from "../images/projects/schedule.jpg";
import Staff from "../images/projects/staff.jpg";
import Weather from "../images/projects/weather.jpg";
import Footer from "../components/Footer"

const Work = () => {
  return (
    <div>
      <main id="work">
        <h1 className="lg-heading">
          My <span className="text-secondary">Work</span>
        </h1>
        <h2 className="sm-heading">Check out my projects</h2>
        <div className="projects">
          <div className="item">
            <a href="#!">
              <img src={Music} alt="project" />
            </a>

            <a
              href="https://huicho510.github.io/Music-Buffet/"
              className="btn-light"
            >
              <i className="fas fa-eye"></i>
              Music Buffet
              <p>
                An app that generates artist similar to the ones you already
                like
              </p>
            </a>
            <a
              href="https://github.com/huicho510/Music-Buffet"
              className="btn-dark"
            >
              <i className="fab fa-github"> </i>Github
            </a>
          </div>

          <div className="item">
            <a href="#!">
              <img src={Weather} alt="project" />
            </a>

            <a href="https://huicho510.github.io/Weather" className="btn-light">
              <i className="fas fa-eye"></i>
              Weather App
              <p>A daily and weekly forecast weather generator</p>
            </a>
            <a href="https://github.com/huicho510/Weather" className="btn-dark">
              <i className="fab fa-github"> </i>Github
            </a>
          </div>

          <div className="item">
            <a href="#!">
              <img src={Schedule} alt="project" />
            </a>
            <a
              href="https://huicho510.github.io/Scheduler/"
              className="btn-light"
            >
              <i className="fas fa-eye"></i>
              Daily Scheduler
              <p>An app that allows you to save your hourly routine</p>
            </a>
            <a
              href="https://github.com/huicho510/Scheduler"
              className="btn-dark"
            >
              <i className="fab fa-github"> </i>Github
            </a>
          </div>

          <div className="item">
            <a href="#!">
              <img src={Guess} alt="project" />
            </a>
            <a
              href="https://huicho510.github.io/word-guess-game/"
              className="btn-light"
            >
              <i className="fas fa-eye"></i>
              Word Guess Game
              <p>
                A food themed game where the user guesses the letters to a word
              </p>
            </a>
            <a
              href="https://github.com/huicho510/word-guess-game"
              className="btn-dark"
            >
              <i className="fab fa-github"> </i>Github
            </a>
          </div>

          <div className="item">
            <a href="#!">
              <img src={Quiz} alt="project" />
            </a>
            <a
              href="https://huicho510.github.io/Code-Quiz/"
              className="btn-light"
            >
              <i className="fas fa-eye"></i>
              Code Quiz
              <p>A timed quiz that tests you on your basic coding knowledge</p>
            </a>
            <a
              href="https://github.com/huicho510/Code-Quiz"
              className="btn-dark"
            >
              <i className="fab fa-github"> </i>Github
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <img src={Burg} alt="project" />
            </a>
            <a href="https://burger-dine.herokuapp.com/" className="btn-light">
              <i className="fas fa-eye"></i>
              Burger Handle Bar App
              <p>
                Input a burger name and eat it if you please. All this data is
                being created in MYSQL database using JAWSdb.
              </p>
            </a>
            <a href="https://github.com/huicho510/burger" className="btn-dark">
              <i className="fab fa-github"> </i>Github
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <img src={Notes} alt="project" />
            </a>
            <a
              href="https://notes-app8.herokuapp.com/notes"
              className="btn-light"
            >
              <i className="fas fa-eye"></i>
              Note Taker App
              <p>An app that lets you store notes in a database using CRUD</p>
            </a>
            <a
              href="https://github.com/huicho510/Note-Taker"
              className="btn-dark"
            >
              <i className="fab fa-github"> </i>Github
            </a>
          </div>

          <div className="item">
            <a href="#!">
              <img src={Staff} alt="project" />
            </a>
            <a href="#!" className="btn-light">
              <i className="fas fa-eye"></i>
              Employee Management System
              <p>Keeps track of your staff using Nodejs</p>
            </a>
            <a
              href="https://github.com/huicho510/Employee-Tracker"
              className="btn-dark"
            >
              <i className="fab fa-github"> </i>Github
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <img src={Create} alt="project" />
            </a>
            <a href="#!" className="btn-light">
              <i className="fas fa-eye"></i>
              Team Profile Generator
              <p>Create profiles for everyone on your team with Nodejs</p>
            </a>
            <a
              href="https://github.com/huicho510/employee-generator"
              className="btn-dark"
            >
              <i className="fab fa-github"> </i>Github
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <img src={People} alt="project" />
            </a>
            <a
              href="https://helping-hand-1.herokuapp.com/"
              className="btn-light"
            >
              <i className="fas fa-eye"></i>
              Helping Hand
              <p>
                A volunteer website that allows organizations to post opeings
                and for people to apply for those positions
              </p>
            </a>
            <a
              href="https://github.com/huicho510/Volunteer-Application"
              className="btn-dark"
            >
              <i className="fab fa-github"> </i>Github
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Work;
