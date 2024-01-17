import React, { useState, useEffect } from "react";

const Component = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleSingleOrDoubleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (clickCount === 1) {
      // Se houve um clique, aguarde 300ms para verificar se é um clique duplo
      const timeoutId = setTimeout(() => {
        if (clickCount === 1) {
          console.log("Single Click");
        }
        setClickCount(0);
      }, 300);

      // Limpar o timeout se o componente for desmontado antes de 300ms
      return () => clearTimeout(timeoutId);
    } else if (clickCount === 2) {
      console.log("Double Click");

      // Resetar o contador
      setClickCount(0);
    }
  }, [clickCount]);

  const handleClick = () => {
    console.log("simple click");
  };
  const handleClickParameter = (name) => {
    console.log("hello " + name);
  };
  const handleClickEvent = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <button onClick={handleSingleOrDoubleClick}>Click Me</button>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClickParameter("Dennis")}>Click Me</button>
      <button onClick={(e) => handleClickEvent(e)}>click with Event</button>
    </main>
  );
};

export default Component;
