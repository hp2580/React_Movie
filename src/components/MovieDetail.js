import React from "react";
import "./css/movieDetail.css";
import { useLocation, useNavigate } from "react-router-dom";

const MovieDetail = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { result } = state;

  return (
    <div className="contDetail">
      <div className="header">
        <button type="button" className="logo" onClick={() => navigation(-1)}>
          U-MOVIE
        </button>
      </div>
      <div className="detailWrap">
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
            alt=""
          />
        </div>
        <div className="desc">
          <h1 className="title">{result.title}</h1>
          <div className="genres">{result.genre_ids.map((id) => {})}</div>
          <p className="overview">{result.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
