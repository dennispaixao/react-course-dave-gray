import React from "react";

const Header = () => {
  const styleHeader = {
    backgroundColor: "royalblue",
    color: "white",
  };
  return (
    <header style={styleHeader}>
      <h1>Groceries list!</h1>
    </header>
  );
};

export default Header;
