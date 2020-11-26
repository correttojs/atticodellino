import React, { useState } from "react";
import { HeroStyle, HeroCarousel, Cap } from "./Hero.css";

import Modal from "react-modal";
import { useGlobal } from "../Layout";
import { Contacts } from "../Layout/Contact";
import tw from "twin.macro";
import { GrPrevious, GrNext, GrClose } from "react-icons/gr";
import { Section } from "../@UI/Section";

// Modal.setAppElement("#__next");

export const Hero: React.FC<{
  photos: { id; picture: string; x_large_cover: string; caption: string }[];
}> = ({ photos }) => {
  const [show, setShow] = useState(-1);
  // const global = useGlobal();

  // if (global.apartment === "VR") {
  //   photos = [
  //     photos.find((p) => p.id === 406200537),
  //     photos.find((p) => p.id === 406200123),
  //     ...photos.filter(
  //       (p) => p.id !== 406200537 && p.id !== 278532343 && p.id !== 406200123
  //     ),
  //   ];
  // }
  const col = [0, 1, 2, 3];

  return (
    <>
      <Section css={tw`flex`}>
        <div css={tw`w-1/2 mr-2`}>
          <img
            src={photos[0].picture}
            css={`
              ${tw`w-full object-cover rounded-l-md`}
              max-height: calc(60vh - 64px) !important;
            `}
          />
        </div>
        <div
          css={`
            ${tw`w-1/2 flex`} max-height: calc(60vh - 64px) !important;
          `}
        >
          {photos.slice(1, 4).map((p) => (
            <div
              css={`
                ${tw`w-1/2  flex`} max-height: calc(60vh - 64px) !important;
              `}
            >
              <img
                src={p.picture}
                css={`
                  max-width: 100%;
                  max-height: 100%;
                  ${tw` object-contain rounded-l-md`}
                `}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* <Modal isOpen={show !== -1} shouldCloseOnOverlayClick={true}>
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
      </Modal> */}
    </>
  );
};
