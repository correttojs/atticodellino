import React, { useState } from "react";
import { HeroStyle, HeroCarousel, Cap } from "./Hero.css";

import Modal from "react-modal";
import { useGlobal } from "../Layout";
import { Contacts } from "../Layout/Contact";
import tw from "twin.macro";
import { GrPrevious, GrNext, GrClose } from "react-icons/gr";
import { ThemeType } from "../Layout/useGlobal";
import { keyframes } from "styled-components";
import { MQ_MOBILE } from "../Layout/MediaQueries";

const slidein = keyframes`
   from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
// Modal.setAppElement("#__next");

export const Hero: React.FC<{
  photos: { id; picture: string; x_large_cover: string; caption: string }[];
}> = ({ photos }) => {
  const [show, setShow] = useState(-1);
  const global = useGlobal();

  if (global.apartment === "VR") {
    photos = [
      photos.find((p) => p.id === 406200537),
      photos.find((p) => p.id === 406200123),
      ...photos.filter(
        (p) => p.id !== 406200537 && p.id !== 278532343 && p.id !== 406200123
      ),
    ];
  }

  return (
    <>
      <HeroStyle apartment={global}>
        <div
          css={`
            ${tw`md:hidden fixed mt-2 bg-white`}
            top:80px;
            left: 0px;
          `}
        >
          <Contacts direction="row" />
        </div>
        <div
          css={`
            ${tw`flex items-start absolute overflow-y-hidden`}left: 0;
            top: calc(100vw * 0.1);
            background-image: ${({ theme }: ThemeType) =>
              `linear-gradient(0deg, rgba(225,223,255,0) 0%, ${theme.colors.light} 10%, ${theme.colors.light} 90%, rgba(255,255,255,0) 100%);`};
            animation: ${slidein} 1s ease-in;
          `}
        >
          {photos.map((s, i) => (
            <div
              key={i}
              css={`
                border-radius: 20px;
                /* padding: 1rem 1rem 1rem 1rem; */
                /* margin: 0.5rem; */
                border: none;
                box-shadow: none;
                width: 40rem;
                height: 24rem;
                @media ${MQ_MOBILE} {
                  width: 12rem;
                  height: 12rem;
                  padding: 0.5rem 1rem 0.5rem 1rem;
                  margin: 1rem;
                }
              `}
              onClick={() => setShow(i)}
            >
              <Cap
                id={s.id}
                // whileHover={{ scale: 1.05 }}
                alt={s.caption}
                src={s.picture}
                loading="lazy"
              />
              <Cap
                id={s.id}
                // whileHover={{ scale: 1.05 }}
                alt={s.caption}
                src={s.picture}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </HeroStyle>

      <Modal isOpen={show !== -1} shouldCloseOnOverlayClick={true}>
        <div
          css={tw`flex flex-row items-center max-w-full min-w-0 min-h-0 box-border`}
        >
          {show > 0 && (
            <GrPrevious
              style={{ cursor: "pointer" }}
              size="5rem"
              onClick={() => setShow(show - 1)}
            />
          )}
          <img
            style={{
              height: "90vh",
              width: "90vw",
            }}
            alt={photos[show]?.caption}
            css={tw`flex-auto object-cover overflow-hidden`}
            src={photos[show]?.x_large_cover}
          />

          {show < photos.length - 1 && (
            <GrNext
              style={{ cursor: "pointer" }}
              size="5rem"
              onClick={() => setShow(show + 1)}
            />
          )}
        </div>
        <div
          css={`
            position: absolute;
            top: 5px;
            right: 5px;
          `}
        >
          <GrClose
            style={{ cursor: "pointer" }}
            size="2rem"
            onClick={() => setShow(-1)}
          />
        </div>
      </Modal>
    </>
  );
};
