import React from "react";
import AboutUsTitle from "./AboutUsTitle";
import Button from "../Button/Button";
import AboutImg from "../../images/onas1.jpg";
import styled from "styled-components";

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
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
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border: 5px solid white;
    min-width: 160px;
    margin-top: 4.8rem;
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

export default function AboutSection() {
  return (
    <AboutSectionStyle id="About">
      <div className="container">
        <div className="aboutSection_left">
          <AboutUsTitle subheading="Trochę o nas" heading="jesteśmy snow" />
          <div className="para">
            <p>
              Krótki opis zespołu najwyżej na 3-4 linijki na stronie. Lorem
              impsum bla bla bla bla, bla bla bla, bla. Blla. Krótki opis
              zespołu najwyżej na 3-4 linijki na stronie.
            </p>
          </div>
          <div className="aboutSection_buttons">
            <Button to="Koncerty" btnText="koncerty"></Button>
            <Button btnLink="/About" btnText="więcej"></Button>
          </div>
        </div>
        <div className="aboutSection_right">
          <img src={AboutImg} alt="AboutImg" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
