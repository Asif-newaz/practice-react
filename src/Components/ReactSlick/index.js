import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";

// Components
import SlickCard from "./SlickCard";
import { images } from "./Data";

const ReactSlick = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: true,
    customPaging: (i) => {
      return (
        <div>
          <img
            style={{ height: "50px", width: "50px", borderRadius: "4px" }}
            src={images[i]}
            alt="dots icon"
          />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots custom-indicator"
    // afterChange: function (index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   );
    // },
  };

  return (
    <div style={{ margin: "30px", display: "flex" }}>
      <div style={{ width: "100%" }}>
        <Slider {...settings}>
          {images.map((img) => (
            <div>
              <SlickCard img={img} />
            </div>
          ))}
          {/* <div>
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
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default ReactSlick;
