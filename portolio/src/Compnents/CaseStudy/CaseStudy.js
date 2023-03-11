import React from "react";
import ComingSoon from "../ComingSoon/ComingSoon";
import TopNav from "../TopNav/TopNav";
import "./CaseStudyStyle.css";
import { Carousel } from "react-responsive-carousel";
import Header from "../Header/Header";

const CaseStudy = () => {
  return (
    <>
      <TopNav></TopNav>
      <div className="case-study-container">
        <div className="case-study-header">
          <div className="case-study-carousel">
            <img
              className="case-study-img"
              src="https://images.pexels.com/photos/14773255/pexels-photo-14773255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ></img>
          </div>

          <div className="project-info">
            <Header
              text="Project Name"
              fontSize="2rem"
              fontColor="#031C82"
              fontWeight="bold"
              fontFamily="Courier New, Courier, monospace"
            ></Header>
            <span className="project-techs"> React || Node || Mongo </span>
            <div className="project-links">
              <span> Git </span>
              <span> Live </span>
            </div>
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
