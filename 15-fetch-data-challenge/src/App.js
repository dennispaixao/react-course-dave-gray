import { useEffect, useState } from "react";
import ListItems from "./ListItems";

function App() {
  const [menu, setMenu] = useState("users");
  const [list, setList] = useState([]);
  const [fetchErr, setFetchErr] = useState();

  const handleClick = (e) => {
    setMenu(e.target.innerText);
  };
  useEffect(() => {
    try {
      const fetchItems = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${menu}?_limit=10`
        );
        const data = await response.json();
        console.log(data);
        setList(data);
      };
      fetchItems();
    } catch (e) {
      setFetchErr(e);
    }
  }, [menu]);
  return (
    <>
      <nav>
        <button onClick={(e) => handleClick(e)}>users</button>
        <button onClick={(e) => handleClick(e)}>posts</button>
        <button onClick={(e) => handleClick(e)}>comments</button>
      </nav>
      <main>{!fetchErr && <ListItems list={list} />}</main>
    </>
  );
}

export default App;
