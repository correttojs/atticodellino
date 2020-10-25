import React, { useState } from "react";
import {
  HeroStyle,
  HeroCarousel,
  CloseIcon,
  Cap,
  StyledContacts,
} from "./Hero.css";
import { Box, Layer, Image } from "grommet";
import { CaretNext, CaretPrevious, Close } from "grommet-icons";
import { useGlobal } from "../Layout";
import { Contacts } from "../Layout/Contact";

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
      <HeroStyle apartment={global} direction="row" align="center">
        <StyledContacts>
          <Contacts direction="row" margin="5px" />
        </StyledContacts>
        <HeroCarousel>
          {photos.map((s, i) => (
            <Box key={i} pad="medium" onClick={() => setShow(i)}>
              <Cap
                id={s.id}
                // whileHover={{ scale: 1.05 }}
                alt={s.caption}
                src={s.picture}
              />
            </Box>
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
          <Box direction="row" align="center">
            {show > 0 && (
              <CaretPrevious size="large" onClick={() => setShow(show - 1)} />
            )}
            <Image
              style={{
                height: "90vh",
                width: "90vw",
              }}
              alt={photos[show].caption}
              fit="cover"
              src={photos[show].x_large_cover}
            />

            {show < photos.length - 1 && (
              <CaretNext size="large" onClick={() => setShow(show + 1)} />
            )}
          </Box>
          <CloseIcon direction="row" align="center">
            <Close size="medium" onClick={() => setShow(-1)} />
          </CloseIcon>
        </Layer>
      )}
    </>
  );
};
