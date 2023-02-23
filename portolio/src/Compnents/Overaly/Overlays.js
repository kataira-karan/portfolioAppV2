import { React, useEffect } from "react";
import "./OverlayStyle.css";
import { gsap, Expo, Power2, Power1 } from "gsap";
import { SlSocialLinkedin, SlSocialGithub } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
const Overlays = () => {
  const openProfile = () => {
    gsap.to(".top-overlay", { y: "-100%", duration: 0.8 });
    gsap.to(".bottom-overlay", { y: "100%", duration: 0.8 });
  };

  useEffect(() => {
    gsap.fromTo(
      ".top-overlay",
      { y: "-100%" },
      { y: 0, duration: 2, ease: Power1.ease }
    );
    gsap.fromTo(
      ".bottom-overlay",
      { y: "100%" },
      { y: 0, duration: 2, ease: Power1.ease }
    );
  }, []);

  return (
    <div className="overlay-container">
      <div className="overlay top-overlay">
        <span className="top-overlay-header"> Hello, </span>
        <button onClick={openProfile}>Open Profile</button>
        <span className="top-overlay-header">There</span>
      </div>

      <div className="overlay bottom-overlay">
        <div className="overlay-bottom-content">
          <div className="name-intro">Hi, I am Karan Kataria</div>
          <span> I am a Frontend Focused Web Developer. </span>
          <span>
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

        <button>Open Profle</button>
      </div>
    </div>
  );
};

export default Overlays;
