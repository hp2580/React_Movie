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

  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  useEffect(() => {
    getMovie();
  }, [region, page, getMovie]);

  return (
    <div className="App">
      <div className="nav">
        <Link to={"/React_Movie"}>
          <h1 className="logo">MOVIE</h1>
        </Link>
        <div className="regionWrap">
          <Link to={"/React_Movie/movie/KR"} onClick={() => changeRegion("KR")}>
            국내상영
          </Link>
          <Link to={"/React_Movie/movie/US"} onClick={() => changeRegion("US")}>
            해외상영
          </Link>
        </div>
      </div>
      <Routes>
        <Route
          path="/React_Movie"
          exact
          element={
            <Home
              isLoading={isLoading}
              movies={movies}
              setPage={setPage}
              changeRegion={changeRegion}
              handlePaging={handlePaging}
            />
          }
        />
        <Route
          path="/React_Movie/movie/KR"
          element={
            <MovieListKR
              isLoading={isLoading}
              movies={movies}
              changeRegion={changeRegion}
              handlePaging={handlePaging}
            />
          }
        />
        <Route
          path="/React_Movie/movie/US"
          element={
            <MovieListUS
              isLoading={isLoading}
              movies={movies}
              changeRegion={changeRegion}
              handlePaging={handlePaging}
            />
          }
        />
        <Route path="/React_Movie/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
