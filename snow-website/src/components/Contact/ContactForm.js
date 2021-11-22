import React, { useState } from "react";
import styled from "styled-components";

const FormStyles = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 1.1rem;
    padding: 0.8em;
    color: white;
    background-color: #404040;
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 0.8rem;
  }
  textarea {
    min-height: 150px;
    resize: vertical;
  }
  button[type="submit"] {
    background-color: black;
    color: white;
    font-size: 1.1rem;
    padding: 1rem 1rem;
    width: 30%;
    border-radius: 8px;
    border: 2px solid white;
    cursor: pointer;
  }
  button[type="submit"]:hover {
    transition-duration: 500ms;
    color: #b946ea;
    transform: scale(1.025);
  }
`;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <FormStyles>
        <div className="form-group">
          <label htmlFor="name">
            Imie Nazwisko
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email
            <input
              type="text"
              id="email"
              email="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Twoja wiadomość
            <textarea
              type="text"
              id="message"
              message="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Send</button>
      </FormStyles>
    </div>
  );
}
