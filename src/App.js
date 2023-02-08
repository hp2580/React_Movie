import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";

let isLoading = true;
function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=4b61e5cee6c551bf0bc26d42d163a586&language=ko&page=1&region=KR"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data);
        isLoading = false;
      });
  }, []);
  if (isLoading === false) return <MovieList movies={movies} />;
  else
    return (
      <div className="loading">
        <div className="circles">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <h1>Loading...</h1>
      </div>
    );
}

export default App;
