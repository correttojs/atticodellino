import React, { useState } from "react";
import { HeroStyle, HeroCarousel, Cap } from "./Hero.css";
import { Layer } from "grommet";
import { CaretNext, CaretPrevious, Close } from "grommet-icons";
import { useGlobal } from "../Layout";
import { Contacts } from "../Layout/Contact";
import tw from "twin.macro";
import { object } from "yup";

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
        <HeroCarousel>
          {photos.map((s, i) => (
            <div key={i} css={tw`p-4`} onClick={() => setShow(i)}>
              <Cap
                id={s.id}
                // whileHover={{ scale: 1.05 }}
                alt={s.caption}
                src={s.picture}
                loading="lazy"
              />
            </div>
          ))}
        </HeroCarousel>
      </HeroStyle>
      {show !== -1 && (
        <Layer
          onEsc={() => setShow(-1)}
          onClickOutside={() => setShow(-1)}
          onKeyDown={(e) => {
            if (e.keyCode === 37 && show > 1) {
              setShow(show - 1);
            }
            if (e.keyCode === 39 && show < photos.length - 1) {
              setShow(show + 1);
            }
          }}
        >
          <div
            css={tw`flex flex-row items-center max-w-full min-w-0 min-h-0 box-border`}
          >
            {show > 0 && (
              <CaretPrevious size="large" onClick={() => setShow(show - 1)} />
            )}
            <img
              style={{
                height: "90vh",
                width: "90vw",
              }}
              alt={photos[show].caption}
              css={tw`flex-auto object-cover overflow-hidden`}
              src={photos[show].x_large_cover}
            />

            {show < photos.length - 1 && (
              <CaretNext size="large" onClick={() => setShow(show + 1)} />
            )}
          </div>
          <div
            css={`
              position: absolute;
              top: 5px;
              right: 5px;
            `}
          >
            <Close size="medium" onClick={() => setShow(-1)} />
          </div>
        </Layer>
      )}
    </>
  );
};
