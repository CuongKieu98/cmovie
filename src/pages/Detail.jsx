import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import tmdbApi from "../api/tmdbApi";
import apiConfig from "../api/apiConfig";
import "../scss/_detail.scss";
import CastList from "./CastList";
import VideoList from "./VideoList";
import MovieList from "../components/movie-list/MovieList";
import Button from "../components/button/Button";
import TimeSlide from "../components/time-slide/TimeSlide";

const Detail = () => {
  const { category, id } = useParams();

  const [item, setItem] = useState(null);
  useEffect(() => {
    const getDetail = async () => {
      const res = await tmdbApi.detail(category, id, { params: {} });
      setItem(res);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h1 className="title">{item.title || item.name}</h1>
              <Button>{item.vote_average.toFixed(1)}</Button>
              <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((grence, index) => (
                    <span key={index} className="genres__item">
                      {grence.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{item.overview}</p>
              <p>Release Date: {item.release_date}</p>
              <p>
                Languages:{" "}
                {item.spoken_languages
                  .map((item) => item.english_name)
                  .join(", ")}
              </p>
              <p>Duration: {item.runtime} minutes</p>
              <div className="cast">
                <div className="section__header">
                  <h2>Casts</h2>
                </div>
                {/* CastList */}
                <CastList id={item.id} />
              </div>
            </div>
          </div>
          <div className="book-ticked">
            <h3>Đặt vé</h3>
            <TimeSlide />
          </div>
          <div className="container">
            <div className="section mb-3">
              <VideoList id={item.id} />
            </div>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Similar</h2>
              </div>
              <MovieList category={category} type="similar" id={item.id} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
