import React from "react";
import styled from "styled-components";

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;

  font-size: 1.3rem;

  line-height: 1.1rem;
  @media only screen and (max-width: 868px) {
    font-size: 1.1rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}
