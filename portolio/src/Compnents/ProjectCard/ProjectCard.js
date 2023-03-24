import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import "./ProjectCardStyle.css";

const ProjectCard = (props) => {
  const { imgSrc, projectName, project } = props;

  return (
    <div className="project-card">
      <div className="project-card-overlay">
        <Header
          text={projectName}
          fontSize="1.2rem"
          fontWeight="bold"
          margin="0.5rem 0"
          fontColor="black"
        >
          {" "}
        </Header>
        <hr className="overlay-divider"></hr>
        <span>{project.shortDescription}</span>
        <br></br>
        <Link className="case-study-link" to={`${projectName}/casestudy`}>
          {" "}
          Casestudy{" "}
        </Link>{" "}
      </div>
      <div className="project-card-image-container">
        <img className="project-card-image" src={imgSrc}></img>
      </div>

      <Header
        fontSize="1.2rem"
        fontWeight="bold"
        textAlign="center"
        text={projectName}
      ></Header>
    </div>
  );
};

export default ProjectCard;
