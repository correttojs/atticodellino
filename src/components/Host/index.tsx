import React from "react";
import { pdp_listing_detail } from "../../graphql/_airbn.types";
import { Box, Text, Heading } from "grommet";
import { Trophy } from "grommet-icons";
import styled from "styled-components";
import { MQ_MOBILE } from "../CssVar/MediaQueries";
import SvgAirbnb1 from "../Icons/Airbnb";
import { theme } from "../CssVar/theme";
import { useTranslations } from "../Translations/useTranslations";
import { useGlobal } from "../withGrommetTheme";
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

export const Host: React.FC<
  pdp_listing_detail["pdp_listing_detail"]["primary_host"]
> = ({ profile_pic_path, about, badges }) => {
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
            {badges.find((r) => r.id === "reviews").count} reviews -{" "}
          </Text>
          <Trophy />
          <Text margin={{ horizontal: "small" }} weight="bold">
            Superhost
          </Text>

          <SvgAirbnb1 />
        </Box>
      </Box>
      <ImgBox>
        <IntersectionImage src={profile_pic_path} width="150" height="150" />
      </ImgBox>
    </Container>
  );
};
