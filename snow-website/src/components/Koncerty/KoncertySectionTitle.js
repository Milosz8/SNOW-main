import React from "react";
import styled from "styled-components";

const KoncertySectionTitleStyle = styled.div`
  text-align: center;
  color: white;

  h2 {
    font-family: "Encode Sans Expanded", sans-serif;
    font-size: 3rem;
    margin-top: 2.5rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 2.8rem;
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
