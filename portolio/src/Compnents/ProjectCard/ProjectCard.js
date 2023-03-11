import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import "./ProjectCardStyle.css";

const ProjectCard = (props) => {
  const { imgSrc, projectName } = props;

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
        <hr></hr>
        <span className="project-technologies"> React | NodeJS </span>
        <span>
          {" "}
          Code || Live ||{" "}
          <Link to={`${projectName}/casestudy`}> Casestudy </Link>{" "}
        </span>
      </div>
      <div className="project-card-image-container">
        <img className="project-card-image" src={imgSrc}></img>
      </div>

      <Header fontSize="1.2rem" fontWeight="bold" text={projectName}></Header>
    </div>
  );
};

export default ProjectCard;
