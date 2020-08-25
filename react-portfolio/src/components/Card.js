import React from 'react'

const Card = (props) => {
    return (
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
    )
}

export default Card
