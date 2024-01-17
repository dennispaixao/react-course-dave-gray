import React, { useState, useEffect } from "react";

const Content = () => {
  const [cont, setCont] = useState(0);
  const handleCont = () => {
    setCont(cont + 1);
  };
  useEffect(() => {
    //if para não logar o 0 que seria logado na inicialização
    if (cont !== 0) console.log(cont);
  }, [cont]);
  return (
    <main>
      <button onClick={handleCont}>Button</button>
    </main>
  );
};

export default Content;
