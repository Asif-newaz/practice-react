import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";

import arrowNext from "../../assets/home-slider-next-arrow.png";

// Components
import SlickCard from "./SlickCard";
import { images } from "./Data";

const NextBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div
      style={{ width: "50px", height: "50px" }}
      className={className}
      onClick={onClick}
    >
      <img src={arrowNext} alt="arrow next" />
    </div>
  );
};

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={arrowNext} alt="arrow next" />
    </div>
  );
};

const ReactSlick = () => {
  const settings = {
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dotsClass: "slick-dots custom-indicator",
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };

  return (
    <div
      style={{
        width: "80%",
        height: "100vh",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",

        backgroundColor: "#141414",
      }}
    >
      <div style={{ width: "100%" }}>
        <Slider {...settings}>
          {images.map((img) => (
            <div>
              <SlickCard img={img} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReactSlick;
