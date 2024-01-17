import React from "react";

function ColorBox({ color }) {
  return (
    <div className="colorBox" style={{ backgroundColor: color }}>
      <p>{color ? color : "Empty value"}</p>
    </div>
  );
}

export default ColorBox;
