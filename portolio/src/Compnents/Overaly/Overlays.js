import { React, useEffect } from "react";
import "./OverlayStyle.css";
import { gsap, Expo, Power2, Power1, Power4, Time } from "gsap";
import { Timeline } from "gsap/gsap-core";
import { SlSocialLinkedin, SlSocialGithub } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { useHistory } from "react-router-dom";

const Overlays = () => {
  const history = useHistory();

  useEffect(() => {
    const t = new Timeline();

    t.fromTo(
      ".top-overlay",
      { y: "-100%" },
      { y: 0, duration: 0.8, ease: Power1.ease }
    )
      .fromTo(
        ".bottom-overlay",
        { y: "100%" },
        { y: 0, duration: 1, ease: Power4.ease }
      )
      .fromTo(
        ".intro",
        { y: "100%", opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, ease: Power1.easeIn }
      );
  }, []);

  const openProfile = () => {
    gsap.to(".open-button", { x: "100vw", duration: 2 });
    gsap.to(".top-overlay", { y: "-100%", duration: 0.5, delay: 1 });
    gsap.to(".bottom-overlay", { y: "100%", duration: 0.5, delay: 1 });
    gsap.to(".overlay-container", { duration: 1, display: "none", delay: 1 });

    history.push("/home");
  };

  const scaleButton = () => {
    gsap.to(".open-button", { scale: 2 });
  };

  return (
    <div className="overlay-container">
      <div className="overlay top-overlay">
        <span className="top-overlay-header"> Hello, </span>
        <button
          className="open-button"
          onMouseDown={scaleButton}
          onClick={openProfile}
        >
          Open
        </button>
        <span className="top-overlay-header">There</span>
      </div>

      <div className="overlay bottom-overlay">
        <div className="overlay-bottom-content">
          <div className="name-intro intro">Hi, I am Karan Kataria</div>
          <span className="intro">
            {" "}
            I am a Frontend Focused Web Developer.{" "}
          </span>
          <span className="intro">
            "Designing the web with precision and passion, one pixel at a time."
          </span>

          <div className="social-links">
            <a className="social-link">
              {" "}
              <SlSocialLinkedin></SlSocialLinkedin>{" "}
            </a>
            <a className="social-link">
              {" "}
              <SlSocialGithub></SlSocialGithub>{" "}
            </a>
            <a className="social-link">
              {" "}
              <CiMail></CiMail>{" "}
            </a>
          </div>
        </div>

        <div className="bottom-overlay-image"></div>
      </div>
    </div>
  );
};

export default Overlays;
