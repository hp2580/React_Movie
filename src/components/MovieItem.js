import React from "react";
import { Link } from "react-router-dom";
import "./css/movieItem.css";

const MovieItem = ({ result }) => {
  if (result.poster_path !== null) {
    return (
      <Link to={`/React_Movie/movie/:${result.id}`} state={{ result: result }}>
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
  } else {
    return (
      <Link to={`/React_Movie/movie/:${result.id}`} state={{ result: result }}>
        <div className="movieWrap">
          <div className="imgWrap">
            <span className="empty">
              죄송합니다. 포스터가 존재하지 않습니다.
            </span>
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
  }
};

export default MovieItem;
