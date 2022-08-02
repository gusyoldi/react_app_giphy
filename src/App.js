import React, { useEffect, useState } from "react";
import "./App.css";
import getGifs from "./services/getGifs";

// const GIFS = [
//   'https://media2.giphy.com/media/mn827Gfu396RG/giphy.gif?cid=ecf05e479d2bd2a62936cdd1e24d3940f795be75d67477a6&rid=giphy.gif&ct=g',

// ]

// const OTROS_GIFS = [
//   'https://media1.giphy.com/media/10vLQlP73s7Mwo/giphy.gif?cid=ecf05e47js0u8jiaz4a6jf2rfiaoi34asysr0gf3jq4xvo6m&rid=giphy.gif&ct=g',
//   'https://media1.giphy.com/media/T8bV7hw3KoFWg/200w.webp?cid=ecf05e47x6h3xnrcgs9kwebhe0uozrpph3ttd8e7lc4zwj43&rid=200w.webp&ct=g'
// ]

function App() {
  const [gifs, setGifs] = useState([]);
  // const state = useState([])
  // const value = state[0]
  // const updateValue = state[1]

  useEffect(function () {
    console.log("%cSe Montó el Componente", "color: green");
    getGifs().then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        <h1>Hola Chess, soy una pagina de gifts de gatitos</h1>
        <div>
          {/* <h2>{title}</h2> */}
          {gifs.map((singleGif) => (
            <div>
              <h4>{singleGif.id}: {singleGif.title}</h4>
              <img alt={singleGif.title}src={singleGif.url} />
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            setGifs();
          }}
        >
          OTROS GISF
        </button>
      </section>
    </div>
  );
}

export default App;
