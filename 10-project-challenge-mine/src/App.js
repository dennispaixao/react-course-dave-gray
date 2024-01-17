import "./index.css";
import { useState } from "react";
import ColorInput from "./ColorInput";
import ColorBox from "./ColorBox";

function App() {
  const [color, setColor] = useState("");

  return (
    <main className="App">
      <ColorBox color={color} />
      <ColorInput setColor={setColor} />
    </main>
  );
}

export default App;
