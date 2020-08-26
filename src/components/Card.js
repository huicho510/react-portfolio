import React from 'react'

const Card = (props) => {
    return (
        <div className="item">
            <a href="#!">
              <img src={props.image} alt="project" />
            </a>
            <a
              href={props.site}
              className="btn-light"
            >
              <i className="fas fa-eye"></i>
              {props.name}
              <p>
                {props.description}
              </p>
            </a>
            <a
              href={props.repo}
              className="btn-dark"
            >
              <i className="fab fa-github"> </i>Github
            </a>
          </div>
    )
}

export default Card
