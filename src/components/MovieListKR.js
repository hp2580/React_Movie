import React, { useEffect } from "react";
import "./css/movieList.css";
import MovieItem from "./MovieItem";

const MovieListKR = ({
  isLoading,
  movies,
  getMovie,
  page,
  changeRegion,
  handlePaging,
}) => {
  const { results, total_pages } = movies;
  const pages = [];
  for (let i = 1; i <= total_pages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    changeRegion("KR");
  }, []);

  if (!isLoading) {
    return (
      <div className="container">
        {
          <div className="movieContainer">
            {results.map((result) => {
              return <MovieItem key={result.id} result={result} />;
            })}
          </div>
        }
        <div className="paginations">
          {pages.map((page, idx) => {
            return (
              <button key={idx} type="button" onClick={handlePaging}>
                {page}
              </button>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="loading">
        <h1 className="textLoading">Loading</h1>
        <div className="circles">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
      </div>
    );
  }
};

export default MovieListKR;
