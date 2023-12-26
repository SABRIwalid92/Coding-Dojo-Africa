import { useState } from "react";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const nameFn = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=2000")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return response["results"];
      })
      .then((response) => {
        setPokemons(response);
      })
      .catch((error) => {
        console.log("errooooooor!!!!", error);
      });
  };
  return (
    <div className="App">
      <button onClick={nameFn}>Fetch Pokemon</button>
      <ul>
        {pokemons.map((el, idx) => {
          return (
            <li
              key={idx}
              style={{
                listStyle: "none",
                margin: "10px",
                background: "orange",
              }}
            >
              {" 🐶"}
              {el.name}
              {"🐱"}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
