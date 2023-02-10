import React from "react";
import "./css/movieList.css";
import MovieItem from "./MovieItem";

const MovieList = ({ setIsLoading, movies, getMovie, page, setPage }) => {
  const { results } = movies;
  const changePage = (page) => {
    setIsLoading(true);
    setPage(page);
    getMovie();
  };
  return (
    <div className="container">
      <div className="nav">
        <h1 className="logo">U-MOVIE</h1>
        <div className="userWrap">
          <button type="button" className="signin">
            로그인
          </button>
          <button type="button" className="signup">
            회원가입
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
