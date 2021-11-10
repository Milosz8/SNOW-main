import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: black;
    padding: 0.7rem 2rem;
    border-radius: 8px;
    display: inline-block;
    border: 5px solid white;
    color: white;
    text-decoration: none;
    padding: 1.5rem;
    width: 100%;
    text-align: center;
  }

  .button:hover {
    transition-duration: 400ms;
    color: purple;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export default function Button({ btnLink = "test", btnText = "test" }) {
  return (
    <ButtonStyle className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
