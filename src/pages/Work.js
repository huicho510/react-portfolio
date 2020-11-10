import React from "react";
import Music from "../images/projects/music.jpg";
import Burg from "../images/projects/burg.jpg";
import Lash from "../images/projects/eye.jpg";
import People from "../images/projects/people.jpg";
import Weather from "../images/projects/weather.jpg";
import Footer from "../components/Footer";
import Workout from "../images/projects/workout.jpg"
import Card from "../components/Card";
import Netflix from "../images/projects/netflix.jpg"

const Work = () => {
  return (
    <div>
      <main id="work">
        <h1 className="lg-heading">
          My <span className="text-secondary">Work</span>
        </h1>
        <h2 className="sm-heading">Check out my projects</h2>
        <div className="projects">
        <Card
            image={Lash}
            site={"https://dees-cosmetics.herokuapp.com/"}
            repo={"https://github.com/huicho510/Dees-Cosmetics"}
            name={"Dee's Cosmetics"}
            description={
              "Shop for all your beauty needs. Cruelty free and 100% vegan products"
            }
          />
          <Card
            image={Music}
            site={"https://huicho510.github.io/Music-Buffet/"}
            repo={"https://github.com/huicho510/Music-Buffet"}
            name={"Music Buffet"}
            description={
              "An app that generates artist similar to the ones you already like"
            }
          />
          <Card
            image={Weather}
            site={"https://huicho510.github.io/Weather"}
            repo={"https://github.com/huicho510/Weather"}
            name={"Weather App"}
            description={"A daily and weekly forecast weather generator"}
          />
          
          <Card
            image={Workout}
            site={"https://fitness-tracker-3.herokuapp.com/"}
            repo={"https://github.com/huicho510/work-out-tracker"}
            name={"Work-out Tracker"}
            description={
              "A fitness app that allows the user to view, create, and track daily workouts."
            }
          />
          <Card
            image={People}
            site={"https://helping-hand-1.herokuapp.com/"}
            repo={"https://github.com/huicho510/Volunteer-Application"}
            name={"Helping Hand"}
            description={
              "A volunteer website that allows organizations to post opeings and for people to apply for those positions"
            }
          />
           <Card
            image={Burg}
            site={"https://burger-dine.herokuapp.com/"}
            repo={"https://github.com/huicho510/burger"}
            name={"Burger App"}
            description={
              "Input a burger name and eat it. This data is being created in MYSQL database"
            }
          />
           <Card
            image={Netflix}
            site={"https://netflix-clone-d47c3.firebaseapp.com/"}
            repo={"https://github.com/huicho510/Netflix-clone"}
            name={"Netflix Homepage Clone"}
            description={
              "Front-end Netflix landing page clone built with react"
            }
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
