import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

// Components
import SlickCard from "./SlickCard";

const ReactSlick = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <div className="container">
      <h1>Hello React-Slick slider!</h1>
      <Slider {...settings}>
        <div>
          <SlickCard />
        </div>
        <div>
          <SlickCard />
        </div>
        <div>
          <SlickCard />
        </div>
        <div>
          <SlickCard />
        </div>
        <div>
          <SlickCard />
        </div>
        <div>
          <SlickCard />
        </div>
      </Slider>
    </div>
  );
};

export default ReactSlick;
