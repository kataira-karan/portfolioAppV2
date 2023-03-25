import React from "react";

const ComingSoon = () => {
  const headerStyle = {
    fontSize: "3rem",
    height: "85vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "black",
  };

  return (
    <div style={headerStyle} className="comming-soon">
      <header> Updating Soon </header>
    </div>
  );
};

export default ComingSoon;
