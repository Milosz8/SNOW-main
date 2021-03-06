import AboutUsTitle from "../components/AboutSection/AboutUsTitle";

import React, { useState } from "react";

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
    padding-top: 8rem;
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
    line-height: 1.5rem;
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
      {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavMenu toggle={toggle} /> */}
      <AboutPageStyle>
        <div className="container">
          <div className="aboutSection_left">
            <AboutUsTitle subheading="Troch?? o nas" heading="jeste??my snow" />
            <div className="para">
              <p>
                Ko??cem 2018 roku zacz??li??my wsp??lnie tworzy?? d??wi??ki, jako grupa
                czterech przyjaci????, kt??rzy wcze??niej grali w r????nych sk??adach.
                Z czasem u??o??yli??my kilka autorskich utwor??w a finalnie
                za??o??yli??my zesp???? SNOW. Tworzymy klasyczne brzmienie Rocka z
                dawk?? alternatywy. Wieloletnie do??wiadczenie pozwala nam na
                stworzenie dobrej atmosfery podczas wyst??p??w. W 2019 roku
                nagrali??my Demo, w chwili obecnej jeste??my w trakcie nagrywania
                Singla. Podczas uczestnictwa w przegl??dzie pod nazw?? ???K??ckie
                Noce Rockowe 2019??? nasz gitarzysta Pawe?? zdoby?? g????wn?? nagrod??
                dla najlepszego gitarzysty przegl??du.Nagrali??my materia?? demo i
                jeste??my w trakcie nagrywania singla.
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
