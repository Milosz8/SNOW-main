import React from "react";
import { MdPlace } from "react-icons/md";
import styled from "styled-components";
import PText from "./PText";

const ItemStyles = styled.div`
  padding: 0.8rem;
  background-color: #404040;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    background-color: #404040;
    padding: 0.2rem;
    align-items: center;
    justify-content: center;
  }
  svg {
    width: 1.6rem;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = "this is an info",
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}
