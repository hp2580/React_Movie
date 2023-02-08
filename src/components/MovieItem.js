import React from "react";
import "./css/movieItem.css";

const MovieItem = ({ result }) => {
  return (
    <div className="movieWrap">
      <div className="imgWrap">
        <img
          src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
          alt=""
        />
      </div>
      <div className="descWrap">
        <h2 className="title">{result.title}</h2>
        <p>
          👍 <span>{result.vote_average}</span>
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
