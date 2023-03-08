import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./TopNavStyle.css";
import { GiHamburgerMenu } from "react-icons/gi";

const TopNav = () => {
  const history = useHistory();
  const openMenu = (e) => {
    console.log("opening menu");
    e.preventDefault();
    history.push("/");
  };

  return (
    <div className="top-nav-container">
      <span className="nav-logo"> KK </span>

      <Link to="/home" className="ham">
        {" "}
        <GiHamburgerMenu></GiHamburgerMenu>{" "}
      </Link>
    </div>
  );
};

export default TopNav;
