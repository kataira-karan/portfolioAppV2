import { React, useState, useEffect } from "react";
import Overlays from "../Overaly/Overlays";
import TopNav from "../TopNav/TopNav";
import "./HomeStyle.css";
import { gsap } from "gsap";
import { Timeline } from "gsap/gsap-core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import karan1 from "./karan1.jpg";

const Home = () => {
  let history = useHistory();

  const navigateSite = (e) => {
    const t = new Timeline();
    console.log("NAvingatin");
    console.log(e.target);
    e.target.classList.remove("navigation-link");
    e.target.classList.add("navigation-link-active");

    gsap.to(".navigation-link-active", {
      scale: 2,
      y: "-30%",
    });

    t.to(".navigation-link", {
      y: "100%",
      duration: 1,
      stagger: 0.2,
      opacity: 0,
    })
      .add("end")
      .to(".about-me-section", { x: "-100%", duration: 2 }, "end")
      .to(".navigation-section", { x: "100%", duration: 2 }, "end");

    e.target.classList.remove("navigation-link-active");
    e.target.classList.add("navigation-link");

    setTimeout(() => {
      history.push("/home/projects");
    }, 3000);
  };

  useEffect(() => {
    console.log("Home");
    const t = new Timeline();

    t.add("start")
      .fromTo(
        ".about-me-section",
        { x: "-100%" },
        { x: 0, duration: 2, delay: 2 },
        "start"
      )
      .fromTo(
        ".navigation-section",
        { x: "100%" },
        { x: 0, duration: 2, delay: 2 },
        "start"
      )
      .fromTo(
        ".about-me-image",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
      .fromTo(
        ".about-me",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
      .fromTo(
        ".navigation-link",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.3 }
      );
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="top-nav">
          <TopNav isMobile={true}></TopNav>
          <button>Open</button>
        </div>
        <div className="about-me-section">
          <div className="about-me-image-container">
            <img className="about-me-image" src={karan1}></img>
          </div>

          <div className="about-me">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with deskto
          </div>
        </div>

        <div className="navigation-section">
          <ul className="navigation">
            <span onClick={(e) => navigateSite(e)}>
              {" "}
              <li className="navigation-link"> About Me </li>{" "}
            </span>
            <span onClick={(e) => navigateSite(e)}>
              {" "}
              <li className="navigation-link"> Projects </li>
            </span>
            <span onClick={(e) => navigateSite(e)}>
              {" "}
              <li className="navigation-link"> Skills </li>
            </span>
            <span onClick={(e) => navigateSite(e)}>
              {" "}
              <li className="navigation-link"> Contact </li>
            </span>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
