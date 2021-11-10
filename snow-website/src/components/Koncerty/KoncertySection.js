import { React, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import SectionTitle from "./KoncertySectionTitle";
import PText from "./PText";
import koncerty from "./koncerty";
import background from "../../images/back1.jpg";

const KoncertySectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  color: white;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  font-family: "Special Elite";

  .koncerty__wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
    color: white;
    font-family: "Special Elite";
  }
  .koncerty__info {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: rgba(100, 100, 100, 0.5);

    color: white;
    border-radius: 12px;
    margin-top: 5rem;
    p {
      font-family: "Special Elite";
    }
  }
  .koncerty__desc {
    .para {
      text-align: center;
    }
  }
  .koncerty__name {
    margin-top: 4rem;
    font-family: "Special Elite";
    font-size: 2.2rem;
    opacity: 1;
  }
  .koncerty__title {
    font-size: 1.6rem;
    margin-top: 0.3rem;
    font-family: "Special Elite";
    color: white;
    opacity: 1;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      background-color: rgba(100, 100, 100, 0.5);

      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  .next:hover {
    color: purple;
    transition-duration: 500ms;
  }
  .prev:hover {
    color: purple;
    transition-duration: 500ms;
  }
  .fade-enter {
    opacity: 0;
    transform: scale(0.96);
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in opacity;
    transition-property: opacity, transform;
  }
  .fade-exit {
    opacity: 1;
    transform: scale(1);
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(0.96);
    transition: 250ms ease-in opacity;
    transition-property: opacity, transform;
  }
`;

export default function KoncertySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = koncerty[activeIndex];

  function handlePrev() {
    if (activeIndex <= 0) {
      setActiveIndex(koncerty.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }
  function handleNext() {
    if (activeIndex >= koncerty.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }
  return (
    <KoncertySectionStyles id="Koncerty">
      <div className="container">
        <SectionTitle heading="Koncerty" subheading="zobacz gdzie gramy:" />
        <div className="koncerty__wrapper">
          <SwitchTransition>
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <div className="koncerty__info">
                <div className="koncerty__desc">
                  <PText>{activeSlide.desc}</PText>
                </div>
                <h2 className="koncerty__name">{activeSlide.name}</h2>
                <p className="koncerty__title">
                  {activeSlide.title}
                  <br />
                  {activeSlide.org}
                </p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div
            className="prev"
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBack />
          </div>
          <div
            className="next"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward />
          </div>
        </div>
      </div>
    </KoncertySectionStyles>
  );
}
