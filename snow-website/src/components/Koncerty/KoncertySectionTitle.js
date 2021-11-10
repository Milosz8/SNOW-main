import React from "react";
import styled from "styled-components";

const KoncertySectionTitleStyle = styled.div`
  text-align: center;
  color: white;
  p {
    font-family: "Encode Sans Expanded", sans-serif;
    font-size: 2rem;
  }
  h2 {
    font-family: "Encode Sans Expanded", sans-serif;
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export default function KoncertySectionTitle({
  subheading = "this is subheading",
  heading = "this is heading",
}) {
  return (
    <KoncertySectionTitleStyle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </KoncertySectionTitleStyle>
  );
}
