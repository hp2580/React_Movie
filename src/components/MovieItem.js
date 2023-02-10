import React from "react";
import { Link } from "react-router-dom";
import "./css/movieItem.css";

const MovieItem = ({ result }) => {
  return (
    <Link to={`/movie/:${result.id}`} state={{ result: result }}>
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
    </Link>
  );
};

export default MovieItem;
