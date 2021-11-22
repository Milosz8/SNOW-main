import React, { useState } from "react";

import { MdEmail, MdLocalPhone } from "react-icons/md";
import styled from "styled-components";
import SectionTitle from "../components/Contact/SectionTitle";
import ContactInfoItem from "../components/Contact/ContactInfoItem";
import ContactForm from "../components/Contact/ContactForm";

const ContactSectionStyle = styled.div`
  padding: 7rem 2rem;

  color: white;
  .contactSection__wrapper {
    display: flex;
    align-items: center;
    gap: 5rem;
    margin-top: 2rem;
    max-width: 1200px;
    justify-content: flex-start;

    margin: 0 auto;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: "";
    width: 5px;
    height: 70%;
    background-color: #b946ea;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    font-size: 2rem;
  }
  .right {
    padding-top: 1rem;
    width: 100%;
    color: white;
  }
  @media only screen and (max-width: 868px) {
    .left {
      font-size: 1.6rem;
      padding-top: 1.8rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
      gap: 0;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 2rem;
    }
  }
`;

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavMenu toggle={toggle} /> */}
      <ContactSectionStyle>
        <div className="container">
          <SectionTitle heading="Kontakt" subheading="" />
          <div className="contactSection__wrapper">
            <div className="left">
              <ContactInfoItem icon={<MdLocalPhone />} text="+48513562671" />
              <ContactInfoItem
                icon={<MdEmail />}
                text="snow.brzeszcze@gmail.com"
              />
              <ContactInfoItem text="Brzeszcze, Małopolska" />
            </div>
            <div className="right">
              <ContactForm />
            </div>
          </div>
        </div>
      </ContactSectionStyle>
    </>
  );
}
