import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import styled from "styled-components";

const SectionStyle = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .slide {
    opacity: 0;
    filter: grayscale(0) blur(5px);
    transition-duration: 5000ms;
  }
  .slide.active {
    opacity: 1;
    transition-duration: 5000ms;
    filter: grayscale(1) blur(0px);
    transform: scale(1.08);
  }
  .imageStyle {
    width: 100%;
    height: 40rem;
    border-radius: 20px;
    object-fit: cover;
    /* border: 5px solid white; */
    min-width: 160px;
    /* filter: grayscale(1) blur(1px); */
  }
  .right-arrow {
    position: absolute;
    top: 70%;
    right: 32px;
    font-size: 2rem;
    color: white;
    z-index: 10;
    cursor: pointer;
    user-select: none;
    opacity: 0.6;
    transition-duration: 500ms;
  }
  .left-arrow {
    position: absolute;
    top: 70%;
    left: 32px;
    font-size: 2rem;
    color: white;
    z-index: 10;
    cursor: pointer;
    user-select: none;
    opacity: 0.6;
    transition-duration: 500ms;
  }
  .left-arrow:hover {
    transition-duration: 500ms;
    opacity: 1;
    filter: drop-shadow(16px 16px 20px white);
  }
  .right-arrow:hover {
    transition-duration: 500ms;
    opacity: 1;
    filter: drop-shadow(16px 16px 20px white);
  }
`;

export default function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  //   setTimeout(nextSlide, 10000);

  return (
    <SectionStyle className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="imgelo" className="imageStyle" />
            )}
          </div>
        );
      })}
    </SectionStyle>
  );
}
