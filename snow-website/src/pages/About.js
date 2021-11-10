import React from "react";
import AboutUsTitle from "../components/AboutSection/AboutUsTitle";

import styled from "styled-components";
import Button from "../components/Button/Button";
import Slider from "../components/Slider/ImageSlider";
import { SliderData } from "../components/Slider/SliderData";

const AboutPageStyle = styled.div`
  padding: 8rem 0;
  box-sizing: border-box;
  background-color: black;
  color: white;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    max-width: 1200px;
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
    margin: 2rem 0;
    margin-right: 3rem;
    font-size: 1.8rem;
    line-height: 2rem;
    text-align: left;
  }
  .aboutSection_buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
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
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection_left,
    .aboutSection_right {
      width: 100%;
    }
    .aboutSection_right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
      font-size: 1.4rem;
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
  return (
    <AboutPageStyle>
      <div className="container">
        <div className="aboutSection_left">
          <AboutUsTitle subheading="Trochę o nas" heading="jesteśmy snow" />
          <div className="para">
            <p>
              Końcem 2018 roku zaczęliśmy wspólnie tworzyć dźwięki, jako grupa
              czterech przyjaciół, którzy wcześniej grali w różnych składach. Z
              czasem ułożyliśmy kilka autorskich utworów a finalnie założyliśmy
              zespół SNOW. Tworzymy klasyczne brzmienie Rocka z dawką
              alternatywy. Wieloletnie doświadczenie pozwala nam na stworzenie
              dobrej atmosfery podczas występów. W 2019 roku nagraliśmy Demo, w
              chwili obecnej jesteśmy w trakcie nagrywania Singla. Podczas
              uczestnictwa w przeglądzie pod nazwą „Kęckie Noce Rockowe 2019”
              nasz gitarzysta Paweł zdobył główną nagrodę dla najlepszego
              gitarzysty przeglądu.Nagraliśmy materiał demo i jesteśmy w trakcie
              nagrywania singla.
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
  );
}
