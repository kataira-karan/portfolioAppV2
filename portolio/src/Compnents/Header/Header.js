import React from "react";

const Header = (props) => {
  const {
    fontSize,
    fontColor,
    padding,
    margin,
    fontWeight,
    text,
    textAlign,
    fontFamily,
  } = props;

  const headerStyle = {
    fontFamily: fontFamily ? fontFamily : null,
    textAlign: textAlign ? textAlign : null,
    display: "block",
    fontSize: fontSize ? fontSize : "1rem",
    fontWeight: fontWeight ? fontWeight : 100,
    fontColor: fontColor ? fontColor : "black",
    padding: padding ? padding : 0,
    margin: margin ? margin : 0,
  };

  return <span style={headerStyle}> {text ? text : "Header"} </span>;
};

export default Header;
