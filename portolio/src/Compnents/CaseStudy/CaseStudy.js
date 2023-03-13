import { React, useEffect, useState } from "react";
import ComingSoon from "../ComingSoon/ComingSoon";
import TopNav from "../TopNav/TopNav";
import "./CaseStudyStyle.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Header from "../Header/Header";
import { VscLiveShare } from "react-icons/vsc";
import { GoMarkGithub } from "react-icons/go";
import projects from "../../data/projects.json";
import { Link } from "react-router-dom";

const CaseStudy = () => {
  const [project, setproject] = useState(null);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    let currentProject = projects.filter((project) => {
      console.log(project);
      return project.name === params.projectName;
    });
    setproject(currentProject[0]);
    console.log(currentProject);
    console.log(project);
  }, []);

  return (
    <>
      <TopNav></TopNav>
      <div className="case-study-container">
        {project ? (
          <>
            {" "}
            <div className="case-study-header">
              <div className="project-info">
                <Header
                  text={project.name}
                  fontSize="2rem"
                  fontColor="#3D155F"
                  fontWeight="bold"
                ></Header>
                <div className="project-links">
                  {/* <span className="project-techs"> React || Node || Mongo </span> */}

                  <span>
                    {" "}
                    <a target="_blank" href={project.githubLink}>
                      <GoMarkGithub className="project-link"></GoMarkGithub>{" "}
                    </a>
                  </span>
                  <span>
                    {" "}
                    <VscLiveShare className="project-link"> </VscLiveShare>{" "}
                  </span>
                </div>
              </div>
              <div className="case-study-carousel">
                {/* <img
                  className="case-study-img"
                  src={require(`./images/${project.image}`)}
                ></img> */}
                <Carousel>
                  {project.images.map((img) => {
                    return (
                      <div>
                        <img
                          className="case-study-img"
                          src={require(`./images/${img}`)}
                        ></img>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
            <hr className="case-study-divider"></hr>
            <div className="project-description">{project.description}</div>
            <hr className="case-study-divider"></hr>{" "}
          </>
        ) : (
          "Loading"
        )}

        {/* <div className="work-together">
          <div className="work-together-tagline">
            <Header
              textAlign="center"
              fontSize="1.8rem"
              text="Liked My Work?"
              fontFamily="Courier New, Courier, monospace"
            ></Header>
            <Header
              fontSize="1.5rem"
              text="Let's Connect"
              textAlign="center"
              fontFamily="Courier New, Courier, monospace"
            ></Header>
            <Header
              fontSize="1.5rem"
              textAlign="center"
              fontFamily="Courier New, Courier, monospace"
              text="Work together And Build Somthing Awsome"
            ></Header>
          </div>

          <div className="work-together-form">
            <form>
              <div className="name">
                <div className="form-field">
                  <label> First Name: </label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label> Email: </label>
                  <input type="text" />
                </div>
              </div>

              <div className="form-field">
                <label> Your Message: </label>
                <input type="text" />
              </div>

              <button>Connect</button>
            </form>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default CaseStudy;
