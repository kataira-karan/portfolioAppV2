import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./TopNavStyle.css";
import { gsap } from "gsap";
import { GrClose } from "react-icons/gr";

import { GiHamburgerMenu } from "react-icons/gi";

const TopNav = (props) => {
  const { isMobile, openMobileMenu } = props;

  const history = useHistory();
  const openMenu = (e) => {
    console.log("opening menu");
    e.preventDefault();
    history.push("/");
  };

  // const openMobileMenu = () => {
  //   gsap.to(".mobile-menu", { x: 0, duration: 1 });
  // };

  return (
    <div className="top-nav-container">
      <span className="nav-logo"> KK </span>

      {isMobile ? (
        <GiHamburgerMenu onClick={openMobileMenu}></GiHamburgerMenu>
      ) : (
        <Link to="/home" className="ham">
          {" "}
          <GiHamburgerMenu></GiHamburgerMenu>{" "}
        </Link>
      )}

      {/* <ul className="mobile-menu">
        <GrClose className="close-button"></GrClose>
        <li className="mobile-menu-link">
          {" "}
          <Link> About Me </Link>
        </li>
        <li className="mobile-menu-link">
          {" "}
          <Link> Projects </Link>
        </li>{" "}
        <li className="mobile-menu-link">
          {" "}
          <Link> Skills </Link>
        </li>{" "}
        <li className="mobile-menu-link">
          {" "}
          <Link> Contact </Link>
        </li>
      </ul> */}
    </div>
  );
};

export default TopNav;
