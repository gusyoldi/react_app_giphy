import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";

export default function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>Pagina de Gifs</h1>
        <Link to="/gif/gatitos">Gifs de Gatitos</Link>
        <Link to="/gif/perritos">Gifs de Perritos</Link>
        <Link to="/gif/postres">Gifs de Postres</Link>
        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}
