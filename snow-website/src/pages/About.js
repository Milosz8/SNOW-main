import AboutUsTitle from "../components/AboutSection/AboutUsTitle";

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import NavMenu from "../components/Navbar";

import styled from "styled-components";
import Button from "../components/Button/Button";
import Slider from "../components/Slider/ImageSlider";
import { SliderData } from "../components/Slider/SliderData";

const AboutPageStyle = styled.div`
  box-sizing: border-box;
  background-color: black;
  height: 800px;

  color: white;
  .container {
    padding-top: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    max-width: 1200px;
    max-height: 1600px;
    width: 90%;
    margin: 0 auto;
  }
  .aboutSection_left,
  .aboutSection_right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    max-width: 600px;
    margin: 1rem 0;
    margin-right: 3rem;
    font-size: 1rem;
    line-height: 1.8rem;
    text-align: left;
  }
  .aboutSection_buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem 0;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection_left {
      flex: 4;
    }
    .aboutSection_right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    height: 1300px;
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection_left,
    .aboutSection_right {
      width: 100%;
      padding-top: 0;
    }
    .aboutSection_right {
      width: 100%;
    }

    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 1rem;
      font-size: 1rem;
    }

    .aboutSection_buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavMenu toggle={toggle} />
      <AboutPageStyle>
        <div className="container">
          <div className="aboutSection_left">
            <AboutUsTitle subheading="Trochę o nas" heading="jesteśmy snow" />
            <div className="para">
              <p>
                Końcem 2018 roku zaczęliśmy wspólnie tworzyć dźwięki, jako grupa
                czterech przyjaciół, którzy wcześniej grali w różnych składach.
                Z czasem ułożyliśmy kilka autorskich utworów a finalnie
                założyliśmy zespół SNOW. Tworzymy klasyczne brzmienie Rocka z
                dawką alternatywy. Wieloletnie doświadczenie pozwala nam na
                stworzenie dobrej atmosfery podczas występów. W 2019 roku
                nagraliśmy Demo, w chwili obecnej jesteśmy w trakcie nagrywania
                Singla. Podczas uczestnictwa w przeglądzie pod nazwą „Kęckie
                Noce Rockowe 2019” nasz gitarzysta Paweł zdobył główną nagrodę
                dla najlepszego gitarzysty przeglądu.Nagraliśmy materiał demo i
                jesteśmy w trakcie nagrywania singla.
              </p>
            </div>
            <div className="aboutSection_buttons">
              <Button btnLink="/rider" btnText="Rider techniczny"></Button>
            </div>
          </div>
          <div className="aboutSection_right">
            <Slider slides={SliderData} />
          </div>
        </div>
      </AboutPageStyle>
    </>
  );
}
