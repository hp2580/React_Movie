import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MovieDetail from "./components/MovieDetail";
import MovieList from "./components/MovieList";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [region, setRegion] = useState("KR");
  const [movies, setMovies] = useState([]);
  function getMovie() {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=4b61e5cee6c551bf0bc26d42d163a586&language=ko&page=${page}&region=${region}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data);
        setIsLoading(false);
      });
  }
  useEffect(() => {
    getMovie();
  });

  if (isLoading === false)
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <MovieList
                setIsLoading={setIsLoading}
                movies={movies}
                getMovie={getMovie}
                setPage={setPage}
                setRegion={setRegion}
              />
            }
          />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    );
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
