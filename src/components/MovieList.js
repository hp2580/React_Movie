import React from "react";
import "./css/movieList.css";
import MovieItem from "./MovieItem";

const MovieList = ({ setIsLoading, movies, getMovie, setPage, setRegion }) => {
  const { results } = movies;
  const changePage = (page) => {
    setIsLoading(true);
    setPage(page);
    getMovie();
  };
  const changeRegion = (region) => {
    setIsLoading(true);
    setPage(1);
    setRegion(region);
    getMovie();
  };
  return (
    <div className="container">
      <div className="nav">
        <h1 className="logo">U-MOVIE</h1>
        <div className="regionWrap">
          <button type="button" onClick={() => changeRegion("KR")}>
            국내상영
          </button>
          <button type="button" onClick={() => changeRegion("US")}>
            해외상영
          </button>
        </div>
      </div>
      <div className="movieContainer">
        {results.map((result) => {
          return <MovieItem key={result.id} result={result} />;
        })}
      </div>
      <div className="paginations">
        <button type="button" onClick={() => changePage(1)}>
          1
        </button>
        <button type="button" onClick={() => changePage(2)}>
          2
        </button>
        <button type="button" onClick={() => changePage(3)}>
          3
        </button>
        <button type="button" onClick={() => changePage(4)}>
          4
        </button>
      </div>
    </div>
  );
};

export default MovieList;
