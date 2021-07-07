import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";

// Components
import SlickCard from "./SlickCard";

import imageOne from "../../assets/image-1.jpg";
import imageTwo from "../../assets/image-2.jpg";
import imageThree from "../../assets/image-3.jpg";
import imageFour from "../../assets/image-4.jpg";

const images = [imageOne, imageTwo, imageThree, imageFour];

const ReactSlick = () => {
  // const settings = {
  //   className: "center",
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 5,
  //   swipeToSlide: true,
  //   arrows: true,
  //   afterChange: function (index) {
  //     console.log(
  //       `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
  //     );
  //   },
  // };

  return (
    <div style={{ margin: "30px", display: "flex" }}>
      <div style={{ width: "100%" }}>
        <Slider autoplay={true} dots>
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
