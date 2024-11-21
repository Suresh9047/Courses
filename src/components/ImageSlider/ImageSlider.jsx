import React from "react";
import Slider from "react-slick";
import { Button } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img_slide from "../assets/images/banner1.avif";
import img_slide1 from "../assets/images/banner1.png";
import img_slide2 from "../assets/images/banner2.avif";
import "./ImageSlider.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    nextArrow: (
      <Button variant="outline-primary" className="slick-arrow next">
        &#x276F; {/* Right arrow symbol */}
      </Button>
    ),
    prevArrow: (
      <Button variant="outline-primary" className="slick-arrow prev">
        &#x276E; {/* Left arrow symbol */}
      </Button>
    ),
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src={img_slide} alt="Slide 1" className="slide-image" />
        </div>
        <div className="slide">
          <img src={img_slide1} alt="Slide 2" className="slide-image" />
        </div>
        <div className="slide">
          <img src={img_slide2} alt="Slide 3" className="slide-image" />
        </div>
        <div className="slide">
          <img src={img_slide1} alt="Slide 4" className="slide-image" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
