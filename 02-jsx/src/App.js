import logo from "./logo.svg";
import "./App.css";

function App() {
  function handleChange() {
    const names = ["dennis", "paixao", "ferreira"];
    const name = Math.floor(Math.random() * 3);
    return names[name];
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {handleChange()}!</p>
      </header>
    </div>
  );
}

export default App;
