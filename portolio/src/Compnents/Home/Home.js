import { React, useState, useEffect } from "react";
import Overlays from "../Overaly/Overlays";
import TopNav from "../TopNav/TopNav";
import "./HomeStyle.css";
import { AiOutlineClose } from "react-icons/ai";
import { gsap, Power0, Power2, Power4 } from "gsap";
import { Timeline } from "gsap/gsap-core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import karan1 from "./karan1.jpg";

const Home = () => {
  let history = useHistory();

  const navigateSite = (e) => {
    const t = new Timeline();
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

  const closeMobileMenu = () => {
    gsap.to(".navigation-section", { right: "-100%" });
  };

  useEffect(() => {
    const t = new Timeline();

    t.add("start")
      .fromTo(
        ".about-me-section",
        { x: "-100%" },
        { x: 0, duration: 2, delay: 2, ease: Power4.easeInOut },
        "start"
      )
      .fromTo(
        ".navigation-section",
        { x: "100%" },
        { x: 0, duration: 2, delay: 2, ease: Power4.easeInOut },
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
          <TopNav></TopNav>
          {/* <button onClick={openNavigation}>Open</button> */}
        </div>
        <div className="about-me-section">
          <div className="about-me-image-container">
            <img className="about-me-image" src={karan1}></img>
          </div>

          <div className="about-me">
            I am Karan Kataria, I'm a front-end Developer based in
            Ontario,Canda.I have recenlty gradudated from Conestoga College.I
            love creating new intresting stuff and crafting seamless and
            intuitive web designs that simplify user interaction. I am looking
            to join a new team of creative designers and developer. If you think
            we might be a good fit for one another than let's connect.
          </div>
        </div>

        <div className="navigation-section">
          <span className="menu-close-button">
            <AiOutlineClose onClick={closeMobileMenu}></AiOutlineClose>
          </span>

          <ul className="navigation">
            <span onClick={(e) => navigateSite(e, "aboutme")}>
              {" "}
              <li className="navigation-link"> About Me </li>{" "}
            </span>
            <span onClick={(e) => navigateSite(e, "projects")}>
              {" "}
              <li className="navigation-link"> Projects </li>
            </span>
            <span onClick={(e) => navigateSite(e, "skills")}>
              {" "}
              <li className="navigation-link"> Skills </li>
            </span>
            <span onClick={(e) => navigateSite(e, "blogs")}>
              {" "}
              <li className="navigation-link"> Blogs </li>
            </span>
            <span onClick={(e) => navigateSite(e, "connect")}>
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
