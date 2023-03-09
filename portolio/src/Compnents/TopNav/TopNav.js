import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./TopNavStyle.css";
import { gsap } from "gsap";
import { Power4 } from "gsap";
import { GrClose } from "react-icons/gr";

import { GiHamburgerMenu } from "react-icons/gi";

const TopNav = (props) => {
  const { isMobile, openMobileMenu } = props;

  const openNavigation = () => {
    console.log("opening");
    gsap.to(".navigation-section", { right: 0 });
  };

  const openDesktopNavigation = () => {
    let mql = window.matchMedia("(max-width: 900px)");
    console.log(mql);
    if (mql.matches) {
      gsap.to(".mobile-menu", {
        display: "flex",
        width: "100vw",
        height: "100vh",
        duration: 0.5,
        ease: Power4.easeInOut,
      });
    } else {
      gsap.to(".mobile-menu", {
        display: "flex",
        width: "20rem",
        ease: Power4.easeInOut,
        height: "20rem",
        duration: 0.5,
      });
    }
  };

  const closeMobileMenu = () => {
    gsap.to(".mobile-menu", {
      height: 0,
      width: 0,
      ease: Power4.easeInOut,
      display: "none",
      duration: 0.5,
    });
  };

  useEffect(() => {
    console.log(isMobile);
  }, []);

  const history = useHistory();
  const openMenu = (e) => {
    console.log("opening menu");
    e.preventDefault();
    history.push("/");
  };

  return (
    <div className="top-nav-container">
      <span className="nav-logo"> KK </span>

      {isMobile ? (
        <GiHamburgerMenu onClick={openMobileMenu}></GiHamburgerMenu>
      ) : (
        <GiHamburgerMenu onClick={openDesktopNavigation}></GiHamburgerMenu>
      )}

      <ul className="mobile-menu">
        <GrClose className="close-button" onClick={closeMobileMenu}></GrClose>
        <li className="mobile-menu-link">
          {" "}
          <Link to="/home/aboutme"> About Me </Link>
        </li>
        <li className="mobile-menu-link">
          {" "}
          <Link to="/home/projects"> Projects </Link>
        </li>{" "}
        <li className="mobile-menu-link">
          {" "}
          <Link to="/home/skills"> Skills </Link>
        </li>{" "}
        <li className="mobile-menu-link">
          {" "}
          <Link to="/home/connect"> Contact </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopNav;
