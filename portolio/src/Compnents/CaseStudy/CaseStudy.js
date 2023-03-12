import React from "react";
import ComingSoon from "../ComingSoon/ComingSoon";
import TopNav from "../TopNav/TopNav";
import "./CaseStudyStyle.css";
import { Carousel } from "react-responsive-carousel";
import Header from "../Header/Header";
import { VscLiveShare } from "react-icons/vsc";
import { GoMarkGithub } from "react-icons/go";

const CaseStudy = () => {
  return (
    <>
      <TopNav></TopNav>
      <div className="case-study-container">
        <div className="case-study-header">
          <div className="project-info">
            <Header
              text="Project Name"
              fontSize="2rem"
              fontColor="#031C82"
              fontWeight="bold"
            ></Header>
            <div className="project-links">
              {/* <span className="project-techs"> React || Node || Mongo </span> */}

              <span>
                {" "}
                <GoMarkGithub className="project-link"></GoMarkGithub>{" "}
              </span>
              <span>
                {" "}
                <VscLiveShare className="project-link"> </VscLiveShare>{" "}
              </span>
            </div>
          </div>
          <div className="case-study-carousel">
            <img
              className="case-study-img"
              src="https://images.pexels.com/photos/15760049/pexels-photo-15760049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ></img>
          </div>
        </div>

        <hr className="case-study-divider"></hr>

        <div className="project-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>

        <hr className="case-study-divider"></hr>

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
