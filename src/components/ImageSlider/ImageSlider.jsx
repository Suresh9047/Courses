import React from "react";
import Slider from "react-slick";
import { Button } from 'react-bootstrap'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img_slide from '../assets/images/banner1.avif';
import img_slide1 from '../assets/images/banner1.png';
import img_slide2 from '../assets/images/banner2.avif';
import './ImageSlider.css'

const ImageSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true, 
    speed: 100, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplaySpeed: 3000,
    nextArrow: <Button variant="outline-primary" className="slick-arrow next">Next</Button>, // Custom next button
    prevArrow: <Button variant="outline-primary" className="slick-arrow prev">Prev</Button>, // Custom prev button
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img  src={img_slide} alt="Slide 1" className="slide-image" />
        </div>
        <div>
        <img src={img_slide1} alt="Slide 1" className="slide-image" />
        </div>
        <div>
        <img src={img_slide2} alt="Slide 1" className="slide-image" />
        </div>
        <div>
        <img src={img_slide1} alt="Slide 1" className="slide-image" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
