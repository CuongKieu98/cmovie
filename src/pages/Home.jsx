import React from "react";

import HeroSlide from "../components/hero-slide/HeroSlide";

import {Link} from "react-router-dom"
import { OutLineButton } from "../components/button/Button";
import MovieList from "../components/movie-list/MovieList";
import { category,movieType,tvType } from "../api/tmdbApi";

const Home = () => {
  return (
    <>
      <HeroSlide />
      <div className="container">
        {/* trending slide */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>PHIM ĐANG CHIẾU</h2>
            <Link to={"/movie"}>
              <OutLineButton className="small" >View More</OutLineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>
        {/* rated slide */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>PHIM SẮP CHIẾU</h2>
            <Link to={"/movie"}>
              <OutLineButton className="small" >View More</OutLineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>
        {/* tvshow slide */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV</h2>
            <Link to={"/tv"}>
              <OutLineButton className="small" >View More</OutLineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>
        {/* tvshow slide */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated TV</h2>
            <Link to={"/tv"}>
              <OutLineButton className="small" >View More</OutLineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  );
};

export default Home;
