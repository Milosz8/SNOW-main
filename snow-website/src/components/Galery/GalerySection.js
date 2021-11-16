import React, { useState, useCallback } from "react";
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

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const GalleryStyles = styled.div`
  padding: 0 15px;

  img {
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease;
    cursor: pointer;
    filter: grayscale(100%);
    transition-duration: 500ms;
    transform: scale(1);
    padding: 10px 15px;

    &:hover {
      filter: grayscale(0%);
      transform: scale(1.01);
    }
  }
`;

export default function GalerySection() {
  let data = [
    {
      id: 1,
      src: Img1,
      width: 3,
      height: 2,
    },
    {
      id: 2,
      src: Img2,
      width: 3,
      height: 4.5,
    },
    {
      id: 3,
      src: Img3,
      width: 3,
      height: 2,
    },
    {
      id: 4,
      src: Img4,
      width: 3,
      height: 2,
    },
    {
      id: 5,
      src: Img5,
      width: 3,
      height: 2,
    },
    {
      id: 6,
      src: Img6,
      width: 3,
      height: 2,
    },
    {
      id: 7,
      src: Img7,
      width: 3,
      height: 2,
    },
    {
      id: 8,
      src: Img8,
      width: 3,
      height: 4.5,
    },
    {
      id: 9,
      src: Img9,
      width: 3,
      height: 2,
    },
    {
      id: 10,
      src: Img10,
      width: 3,
      height: 4.5,
    },
    {
      id: 11,
      src: Img11,
      width: 3,
      height: 4.5,
    },
    {
      id: 12,
      src: Img12,
      width: 3,
      height: 2,
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <GalleryStyles>
        <Gallery photos={data} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={data.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </GalleryStyles>
    </>
  );
}
