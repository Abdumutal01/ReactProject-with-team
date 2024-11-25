import React from "react";
import "./HomeSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <h2 className="slider-title container">Hamkorlar</h2>
      <Slider {...settings}>
        <div className="slider-item" style={{ backgroundColor: "#f5f5f5" }}></div>
        <div className="slider-item" style={{ backgroundColor: "#ffedb3" }}></div>
        <div className="slider-item" style={{ backgroundColor: "#c8dafc" }}></div>
        <div className="slider-item" style={{ backgroundColor: "#eecdfb" }}></div>
        <div className="slider-item" style={{ backgroundColor: "#f4f59b" }}></div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
