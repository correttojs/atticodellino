import styled, { keyframes } from "styled-components";
import { Box, ThemeType } from "grommet";
import { MQ_MOBILE, MQ_NOT_MOBILE, MQ_DESKTOP } from "../CssVar/MediaQueries";
import IntersectionImage from "react-intersection-image";
import { GlobalType } from "../graphql/airbnDetail";

// prettier-ignore
export const HeroStyle = styled(Box)<{ apartment: GlobalType}>`
 

  background: url(https://images.takeshape.io/${({ apartment }) => apartment.coverJpg.path})  center / cover;
  
  @supports (background-image: url("image.webp")) {
     background: url(https://images.takeshape.io/${({ apartment }) => apartment.coverWebp.path})  center / cover;
  }
  align-items: top;
  justify-content: center;
  height: calc(100vw * 0.66);
  width: 100vw;
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const Cap = styled(IntersectionImage)`
  object-fit: cover;
  width: 36rem;
  height: 20rem;
  border-radius: 5px;
  border: 1px solid
    ${({ theme }: { theme: ThemeType }) => `  ${theme.global.colors.brand};`};
  /* box-shadow: ${({ theme }: { theme: ThemeType }) =>
    ` 3px 5px ${theme.global.colors.brand};`}; */

  @media ${MQ_DESKTOP} {
    :hover {
      transform: scale(1.05);
      transition: transform 0.2s ease-in-out;
    }
  }

  @media ${MQ_MOBILE} {
    width: 10rem;
    height: 10rem;
  }
`;

const slidein = keyframes`
   from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const HeroCarousel = styled.div`
  display: flex;
  align-items: flex-start;
  overflow-y: hidden;
  position: absolute;
  left: 0;
  top: calc(100vw * 0.1);
  /* background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.global.colors.light}; */
  background-image: ${({ theme }: { theme: ThemeType }) =>
    `linear-gradient(0deg, rgba(225,223,255,0) 0%, ${theme.global.colors.light} 10%, ${theme.global.colors.light} 90%, rgba(255,255,255,0) 100%);`};
  animation: ${slidein} 1s ease-in;
  div {
    border-radius: 20px;
    padding: 1rem 2rem 1rem 2rem;
    margin: 2rem;
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
  }
`;

export const CloseIcon = styled(Box)`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const StyledContacts = styled(Box)`
  @media ${MQ_NOT_MOBILE} {
    display: none;
  }
  position: fixed;
  top: 80px;
  left: 0;
  background-color: white;
`;
