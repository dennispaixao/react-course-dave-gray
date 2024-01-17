import React from "react";

const Footer = () => {
  const today = new Date();
  return <footer>&copy; React {today.getFullYear()}</footer>;
};

export default Footer;
