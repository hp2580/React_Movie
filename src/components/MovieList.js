import React from "react";
import "./css/movieList.css";
import MovieItem from "./MovieItem";

const MovieList = ({ movies }) => {
  const { results } = movies;
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
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">4</button>
      </div>
    </div>
  );
};

export default MovieList;
