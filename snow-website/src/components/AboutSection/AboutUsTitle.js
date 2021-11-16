import React from "react";
import styled from "styled-components";

const AboutUsTitleStyle = styled.div`
  text-align: center;
  p {
    font-family: "Encode Sans Expanded", sans-serif;
    font-size: 1.2rem;
  }
  h2 {
    font-family: "Encode Sans Expanded", sans-serif;
    font-size: 3.5rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    p {
      font-size: 1rem;
    }
    h2 {
      font-size: 3.2rem;
    }
  }
`;

export default function AboutUsTitle({
  subheading = "this is subheading",
  heading = "this is heading",
}) {
  return (
    <AboutUsTitleStyle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </AboutUsTitleStyle>
  );
}
