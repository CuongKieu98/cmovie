import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import tmdbApi from "../api/tmdbApi";
import apiConfig from "../api/apiConfig";

import "../scss/_detail.scss"

const CastList = (props) => {
  const { category } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCreadits = async () => {
      const res = await tmdbApi.credits(category, props.id);
      console.log(res);
      setCasts(res.cast.slice(0, 5));
    };
    getCreadits();
  }, [category, props.id]);

  return (
    <div className="casts">
      {casts.map((item, index) => (
        <div className="casts__item" key={index}>
          <div
            className="casts__item__img"
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
            }}
          ></div>
          <p className="casts__item__name">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList;
