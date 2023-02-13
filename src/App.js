import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import MovieListKR from "./components/MovieListKR";
import MovieListUS from "./components/MovieListUS";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [region, setRegion] = useState("");
  const [movies, setMovies] = useState([]);
  const paginations = document.querySelectorAll(".paginations button");

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

  const changeRegion = (region) => {
    setIsLoading(true);
    setPage(1);
    setRegion(region);
    getMovie();
  };

  const handlePaging = (e) => {
    paginations.forEach((pagination) => {
      if (pagination.classList.contains("disable"))
        pagination.classList.remove("disable");
    });
    e.target.classList.add("disable");
    setPage(e.target.innerText);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="App">
      <div className="nav">
        <Link to={"/"}>
          <h1 className="logo">U-MOVIE</h1>
        </Link>
        <div className="regionWrap">
          <Link to={"/KR"} onClick={() => changeRegion("KR")}>
            국내상영
          </Link>
          <Link to={"/US"} onClick={() => changeRegion("US")}>
            해외상영
          </Link>
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              isLoading={isLoading}
              getMovie={getMovie}
              movies={movies}
              page={page}
              setPage={setPage}
              changeRegion={changeRegion}
              handlePaging={handlePaging}
            />
          }
        />
        <Route
          path="/KR"
          element={
            <MovieListKR
              isLoading={isLoading}
              getMovie={getMovie}
              movies={movies}
              page={page}
              setPage={setPage}
              changeRegion={changeRegion}
              handlePaging={handlePaging}
            />
          }
        />
        <Route
          path="/US"
          element={
            <MovieListUS
              isLoading={isLoading}
              getMovie={getMovie}
              movies={movies}
              page={page}
              setPage={setPage}
              changeRegion={changeRegion}
              handlePaging={handlePaging}
            />
          }
        />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
