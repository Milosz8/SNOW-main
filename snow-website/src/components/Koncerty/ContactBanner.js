import React from "react";
import Button from "../Button/Button";
import styled from "styled-components";

const ContactBannerStyles = styled.div`
  width: 100%;
  .contactBanner__wrapper {
    background-color: black;
    padding: 1rem 0rem;
    text-align: center;
    height: 300px;
  }
  .button__wrapper {
    align-items: center;
    display: inline-block;
  }
  .contactBanner__heading {
    font-size: 2rem;
    color: white;
    margin: 2rem 2rem;
  }

  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <h3 className="contactBanner__heading">Skontaktuj się z nami!</h3>
          <div className="button__wrapper">
            <Button btnText="Kontakt" btnLink="/contact"></Button>
          </div>
        </div>
      </div>
    </ContactBannerStyles>
  );
}
