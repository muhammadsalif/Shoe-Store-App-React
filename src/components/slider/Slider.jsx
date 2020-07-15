import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const photos = [
    {
      name: "Photo 1",
      url: "https://wallpaperaccess.com/full/680145.jpg",
      alt: "BATA Shoe",
    },
    {
      name: "Photo 2",
      url: "https://wallpapercave.com/wp/wp3182433.jpg",
      alt: "HUSHPUPPIES Shoe",
    },
    {
      name: "Photo 3",
      url:
        "https://i.pinimg.com/originals/a5/3c/59/a53c5901712da82a3f52618f14ab2756.jpg",
      alt: "ADDIDAS Shoe",
    },
    {
      name: "Photo 4",
      url: "https://img.wallpapersafari.com/desktop/1440/900/69/83/mUyLzl.jpg",
      alt: "NIKE Shoe",
    },
    {
      name: "Photo 5",
      url:
        "https://images.wallpaperscraft.com/image/adidas_sneakers_shoes_jeans_legs_stairs_113725_1280x720.jpg",
      alt: "SNEAKER Shoe",
    },
  ];

  return (
    <div className="container">
      <Slider {...settings} className="slider">
        {photos.map((photo, ind) => {
          return (
            <img
              key={ind}
              src={photo.url}
              alt={photo.alt}
              className="image"
            ></img>
          );
        })}
      </Slider>
    </div>
  );
}
