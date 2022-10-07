import React from "react";

import "./movie-card.scss";

import { Link } from "react-router-dom";

import { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import Button, { OutLineButton } from "../button/Button";

const MovieCard = (props) => {
  const item = props.item;
  const link = "/" + category[props.category] + "/" + item.id;
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
  return (
    <>
      <Link to={link}>
        <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
          {" "}
          <Button>
            Mua Vé
          </Button>
        </div>
        <h3 className="title">{item.title || item.name}</h3>
      </Link>
    </>
  );
};

export default MovieCard;
