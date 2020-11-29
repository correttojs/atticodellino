import React, { useState } from "react";

import Modal from "react-modal";
import { useGlobal } from "../Layout";
import { Contacts } from "../Layout/Contact";
import tw from "twin.macro";
import { GrPrevious, GrNext, GrClose } from "react-icons/gr";
import { ThemeType } from "../Layout/useGlobal";
import { keyframes } from "styled-components";
import { MQ_MOBILE } from "../Layout/MediaQueries";
import { Section } from "../@UI/Section";

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
          ${tw`flex flex-row items-center w-screen`}

          background: url(${global.apartment === "VR"
            ? "/images/cover.jpg"
            : "/images/cover-garda.jpg"})  center / cover;

          @supports (background-image: url("image.webp")) {
            background: url(${global.apartment === "VR"
                ? "/images/cover.webp"
                : "/images/cover-garda.webp"})
              center / cover;
          }
        `}
      >
        <div
          css={`
            ${tw`md:hidden fixed mt-2 bg-white`}
            top:80px;
            left: 0px;
          `}
        >
          <Contacts direction="row" />
        </div>
        <Section
          css={`
            ${tw`mt-4`}
            background-image: ${({ theme }: ThemeType) =>
              `linear-gradient(0deg, rgba(225,223,255,0) 0%, ${theme.colors.light} 10%, ${theme.colors.light} 90%, rgba(255,255,255,0) 100%);`};
          `}
        >
          <div
            css={`
              ${tw`grid my-8 gap-4 px-4`}
              grid-template-columns: 50% repeat(auto-fill, minmax(25%, 1fr));
              grid-auto-flow: column;
              grid-auto-columns: minmax(25%, 1fr);
              overflow-x: auto;
              grid-template-rows: 15rem 15rem;
              animation: ${slidein} 1s ease-in;
              @media ${MQ_MOBILE} {
                grid-template-columns: 100%;
                grid-auto-columns: minmax(100%, 1fr);
                grid-template-rows: 25rem;
              }
            `}
          >
            {photos.map((s, i) => (
              <img
                key={i}
                css={[
                  tw`object-cover w-full h-full cursor-pointer`,
                  i === 0 && tw`md:row-span-2 rounded-l-lg`,
                ]}
                id={s.id}
                alt={s.caption}
                src={s.picture}
                loading="lazy"
                onClick={() => setShow(i)}
              />
            ))}
          </div>
        </Section>
      </div>

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
