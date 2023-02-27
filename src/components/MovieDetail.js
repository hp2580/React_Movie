import React from "react";
import "./css/movieDetail.css";
import { useLocation } from "react-router-dom";

const MovieDetail = () => {
  const location = useLocation();
  const { state } = location;
  const { result } = state;

  if (result.poster_path !== null) {
    return (
      <div className="detailWrap">
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
            alt=""
          />
        </div>
        <div className="desc">
          <h1 className="title">{result.title}</h1>
          <span className="rating">👍{result.vote_average}</span>
          <p className="overview">{result.overview}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="detailWrap">
        <div className="poster">
          <span className="empty">죄송합니다. 포스터가 존재하지 않습니다.</span>
        </div>
        <div className="desc">
          <h1 className="title">{result.title}</h1>
          <span className="rating">👍{result.vote_average}</span>
          <p className="overview">{result.overview}</p>
        </div>
      </div>
    );
  }
};

export default MovieDetail;
