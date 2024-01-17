import React, { useRef } from "react";

function ColorInput({ setColor }) {
  const inputRef = useRef();

  return (
    <input
      ref={inputRef}
      type="text"
      className="colorInput"
      autoFocus
      placeholder="Add a color name"
      onChange={(e) => setColor(e.target.value)}
    ></input>
  );
}

export default ColorInput;
