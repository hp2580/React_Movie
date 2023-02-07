import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const movieArray = [];
  fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=4b61e5cee6c551bf0bc26d42d163a586&language=ko&page=1&region=KR"
  )
    .then((response) => response.json())
    .then(({ results }) => {
      results.map((result) => {
        movieArray.push(result);
      });
    });
  return <MovieList movieArray={movieArray} />;
}

export default App;
