import { React, useEffect } from "react";
import TopNav from "../TopNav/TopNav";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectsStyle.css";
import { gsap } from "gsap";
import projects from "../../data/projects.json";

const Projects = () => {
  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { y: "100%", opacity: 0 },
      { y: 0, duration: 1, stagger: 0.2, opacity: 1 }
    );

    console.log("project page");
  }, []);

  return (
    <>
      <TopNav> </TopNav>
      <div className="projects-container">
        <header className="project-container-header"> Some Of My Work</header>

        <div className="projects">
          {projects.map((project) => {
            return (
              <ProjectCard
                className="project"
                projectName={project.name}
                imgSrc={project.logo}
              ></ProjectCard>
            );
          })}

          {/* <ProjectCard
            className="project"
            projectName="Ecom Marketplace"
            imgSrc="https://www.pngitem.com/pimgs/m/529-5295750_facebook-marketplace-01-marketplace-facebook-logo-png-transparent.png"
          ></ProjectCard>
          <ProjectCard
            className="project"
            projectName="PortfolioV1"
            imgSrc="https://cdn.dribbble.com/users/3912043/screenshots/16016566/media/2202673b9f11f904feaf0298ef5d67fd.jpg?compress=1&resize=400x300"
          ></ProjectCard>
          <ProjectCard
            className="project"
            projectName="PortfolioV2"
            imgSrc="https://cdn.dribbble.com/users/3912043/screenshots/16016566/media/2202673b9f11f904feaf0298ef5d67fd.jpg?compress=1&resize=400x300"
          ></ProjectCard>
          <ProjectCard></ProjectCard> */}
        </div>
      </div>
    </>
  );
};

export default Projects;
