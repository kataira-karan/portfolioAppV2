import React from "react";
import "./ProjectCardStyle.css";

const ProjectCard = (props) => {
  const { imgSrc, projectName } = props;

  //   const openOverlay = (e) => {
  //     console.log(e.target);
  //     console.log("hovering");
  //     gsap.to(e.target, { y: 0, display: "block" });
  //   };

  //   const closeOverlay = (e) => {
  //     console.log("leaving");
  //     gsap.to(e.target, { y: "100%", duration: 1, display: "none" });
  //   };

  return (
    <div className="project-card">
      <div className="project-card-overlay">
        <div>{projectName}</div>
        {/* <span className="project-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </span> */}

        <span className="project-technologies"> React | NodeJS </span>
        <span> Code || Live || Casestudy </span>
      </div>
      <div className="project-card-image-container">
        <img className="project-card-image" src={imgSrc}></img>
      </div>

      <div className="project-name">{projectName}</div>
    </div>
  );
};

export default ProjectCard;
