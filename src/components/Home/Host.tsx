import React from "react";
import { Box, Text, Heading } from "grommet";
import { Trophy } from "grommet-icons";
import styled from "styled-components";
import { MQ_MOBILE } from "../Layout/MediaQueries";
import SvgAirbnb1 from "../Layout/AirbnbIcon";
import { theme } from "../Layout/theme";
import { useTranslations } from "../Translations/useTranslations";
import { useGlobal } from "../Layout";
import IntersectionImage from "react-intersection-image";

const ImgBox = styled(Box)`
  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
  min-width: 170px;
  padding: 10px;
`;

const Container = styled(Box)`
  @media ${MQ_MOBILE} {
    flex-direction: column-reverse;
  }
`;

export const Host: React.FC<{
  srcImage: string;
  about: string;
  reviews: number;
}> = ({ srcImage, about, reviews }) => {
  const translate = useTranslations();
  const global = useGlobal();
  return (
    <Container
      pad="large"
      direction="row"
      background={theme(global).global.colors.lighter}
    >
      <Box>
        <Heading level="2">{translate("HOST")}</Heading>
        <Text size={"large"}>{about}</Text>
        <Box direction="row" align="center" margin={{ top: "20px" }}>
          <Text weight="bold" margin={{ horizontal: "small" }}>
            {reviews} reviews -{" "}
          </Text>
          <Trophy />
          <Text margin={{ horizontal: "small" }} weight="bold">
            Superhost
          </Text>

          <SvgAirbnb1 />
        </Box>
      </Box>
      <ImgBox>
        <IntersectionImage src={srcImage} width="150" height="150" />
      </ImgBox>
    </Container>
  );
};
