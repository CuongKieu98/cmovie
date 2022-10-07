import React from "react";
import "./timeslide.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import moment, { months } from "moment/moment";
import { useState } from "react";
import _ from "lodash";
import Button from "../button/Button";

const TimeSlide = () => {
  let dayinMonth = [];
  const monthDate = moment().startOf("month");
  _.times(monthDate.daysInMonth(), function (n) {
    dayinMonth.push({
      day: monthDate.format("ddd"),
      date: monthDate.format("DD"),
    });

    monthDate.add(1, "day");
  });
  console.log(dayinMonth);

  return (
    <>
      <Swiper
        slidesPerView={5}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        style={{height:"200px"}}
      >
        {dayinMonth.map((item, index) => (
          <SwiperSlide key={index}>
            <Button>
              <p>{item.day}</p>
              <p> {item.date}</p>
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TimeSlide;
