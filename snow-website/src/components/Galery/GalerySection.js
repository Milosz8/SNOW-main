import React, { useState } from "react";
import styled from "styled-components";
import Img1 from "../../images/carousel1.jpg";
import Img2 from "../../images/carousel2.jpg";
import Img3 from "../../images/carousel0.jpg";
import Img4 from "../../images/carousel4.jpg";
import Img5 from "../../images/carousel3.jpg";
import Img6 from "../../images/carousel5.jpg";
import Img7 from "../../images/carousel6.jpg";
import Img8 from "../../images/carousel7.jpg";
import Img9 from "../../images/carousel8.jpg";
import Img10 from "../../images/carousel9.jpg";
import Img11 from "../../images/carousel11.jpg";
import Img12 from "../../images/carousel10.jpg";
import { MdClose } from "react-icons/md";

const GalleryStyles = styled.div`
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
  padding: 0 12px;
  background-color: black;

  .pics {
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease;
    cursor: pointer;
    margin-bottom: 12px;
    img {
      width: 100%;

      filter: grayscale(100%);
    }
  }
  .pics:hover {
    filter: opacity(0.7);
    img {
      filter: grayscale(0%);
    }
  }
  @media screen and (max-width: 991px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }
  @media screen and (max-width: 480px) {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    -webkit-column-width: 100%;
    -moz-column-width: 100%;
    column-width: 100%;
  }
  .model {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    transition: opacity 2s ease, visibility 2s ease, transform 0.5s ease-in-out;
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    overflow: hidden;
    z-index: 999;
  }
  .model.open {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  .model img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    display: block;
    line-height: 0;
    box-sizing: border-box;
    padding: 20px 0 20px;
    margin: 0 auto;
  }
  .model.open svg {
    position: fixed;
    top: 10px;
    right: 10px;
    width: 2rem;
    height: 2rem;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    cursor: pointer;
  }
`;

export default function GalerySection() {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
    {
      id: 12,
      imgSrc: Img12,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <GalleryStyles className="gallery">
        <div className={model ? "model open" : "model"}>
          <img src={tempimgSrc} alt="tempImg" />
          <MdClose onClick={() => setModel(false)} />
        </div>
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} alt="img" />
            </div>
          );
        })}
      </GalleryStyles>
    </>
  );
}
