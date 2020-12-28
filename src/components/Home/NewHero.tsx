import React, { useState } from "react";

import Modal from "react-modal";
import { useGlobal } from "../Layout";
import { Contacts } from "../Layout/Contact";
import { GrPrevious, GrNext, GrClose } from "react-icons/gr";
import styled, { keyframes } from "styled-components";
import { MQ_MOBILE } from "../Layout/MediaQueries";
import { MdInsertPhoto } from "react-icons/md";
import { useTranslations } from "../Translations/useTranslations";
import tw from "twin.macro";

const Img = styled.img`
  padding: 2px;
  ${tw`object-cover w-full h-full cursor-pointer bg-white`}/* min-width: 100%; */
`;

const slidein = keyframes`
   from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Hero: React.FC<{
  photos: { id; picture: string; x_large_cover: string; caption: string }[];
}> = ({ photos }) => {
  const [show, setShow] = useState(-1);
  const global = useGlobal();
  const { name, sponsor } = useGlobal();
  const translate = useTranslations();

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
      <div
        css={`
          ${tw`bg-repeat-x h-20 w-screen`}
          @media ${MQ_MOBILE} {
            margin-top: 40px;
          }
          margin-top: 5px;
          background-size: auto 100%;
          background-image: url(${global.apartment === "VR"
            ? "/images/cover.jpg"
            : "/images/cover-garda.jpg"});

          @supports (background-image: url("image.webp")) {
            background-image: url(${global.apartment === "VR"
              ? "/images/cover.webp"
              : "/images/cover-garda.webp"});
          }
        `}
      ></div>

      <div
        css={`
          ${tw`flex flex-row items-center w-screen`}
        `}
      >
        <div
          css={`
            ${tw`md:hidden fixed bg-white w-full`}
            top:77px;
            left: 0px;
          `}
        >
          <Contacts direction="row" />
        </div>

        <div
          css={`
            ${tw`grid w-full  gap-4 p-4 md:p-8 max-w-screen-xl mx-auto relative`}
            grid-template-columns: 50% repeat(auto-fill, minmax(25%, 1fr));
            grid-auto-flow: column;
            grid-template-rows: 15rem 15rem;
            animation: ${slidein} 1s ease-in;
            @media ${MQ_MOBILE} {
              grid-template-columns: calc(85vw);
              grid-auto-columns: calc(85vw);
              grid-template-rows: calc(45vh);
            }
          `}
        >
          {photos.slice(0, 5).map((s, i) => (
            <Img
              css={[
                i === 0 && tw`md:row-span-2 rounded-l-xl `,
                i === 3 && tw`rounded-tr-xl`,
                i === 4 && tw`rounded-br-xl`,
              ]}
              key={i}
              id={s.id}
              alt={s.caption}
              src={s.picture}
              loading="lazy"
              onClick={() => setShow(i)}
              height={500}
              width={650}
            />
          ))}
          <MdInsertPhoto
            css={`
              ${tw`absolute h-10 w-10 cursor-pointer p-2 bg-white`}
              bottom: 3rem;
              left: 4rem;
              @media ${MQ_MOBILE} {
                bottom: 2rem;
                left: 3rem;
              }
            `}
            onClick={() => setShow(0)}
          />
        </div>
      </div>

      <Modal isOpen={show !== -1} shouldCloseOnOverlayClick={true}>
        <div
          css={tw`flex flex-row items-center max-w-full min-w-0 min-h-0 box-border`}
        >
          {show > 0 && (
            <GrPrevious
              // style={{ cursor: "pointer" }}
              // size="5rem"
              css={tw`cursor-pointer h-10 w-10 md:h-20 md:w-20`}
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
              // style={{ cursor: "pointer" }}
              // size="5rem"
              css={tw`cursor-pointer h-10 w-10 md:h-20 md:w-20`}
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
