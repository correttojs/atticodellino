import React from "react";
import styled from "styled-components";
import { useTranslations } from "../Translations/useTranslations";
import { useGlobal } from "../Layout";
import IntersectionImage from "react-intersection-image";
import { BackgroundWrapper } from "../@UI/BackgroundWrapper";
import { Section } from "../@UI/Section";
import tw from "twin.macro";
import { H2, P } from "../@UI/Texts";
import { FaAirbnb, FaTrophy } from "react-icons/fa";

const ImgBox = styled.div`
  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
  min-width: 170px;
  padding: 10px;
`;

export const Host: React.FC<{
  srcImage: string;
  about: string;
  reviews: number;
}> = ({ srcImage, about, reviews }) => {
  const translate = useTranslations();
  const { colors } = useGlobal();
  return (
    <BackgroundWrapper>
      <Section css={tw`flex flex-col-reverse md:flex-row`}>
        <div>
          <H2>{translate("HOST")}</H2>
          <P>{about}</P>
          <div css={tw`flex flex-row pt-4`}>
            <P css={tw`font-bold px-4`}>{reviews} reviews - </P>
            <FaTrophy size="2em" />
            <P css={tw`font-bold px-4`}>Superhost</P>
            <FaAirbnb size="2em" color={"red"} />
          </div>
        </div>
        <ImgBox>
          <IntersectionImage src={srcImage} width="150" height="150" />
        </ImgBox>
      </Section>
    </BackgroundWrapper>
  );
};
