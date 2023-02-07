import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movieArray }) => {
  return (
    <div className="container">
      {movieArray.map((movie) => {
        return <MovieItem movie={movie} />;
      })}
    </div>
  );
};

export default MovieList;
