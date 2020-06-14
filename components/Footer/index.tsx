import React from "react";
import { Box, Text, Anchor } from "grommet";

import { Phone, MailOption } from "grommet-icons";
import styled from "styled-components";
import SvgAirbnb1 from "../Icons/Airbnb";
import { FacebookOption, Indicator } from "grommet-icons";
import { useGlobal } from "../withGrommetTheme";
import { Contacts } from "../Header/Contact";

const EMAIL = "info@atticodellino.it";
const TEL = "+393477594144";
const Link = styled(Text)`
  a {
    color: #fff !important;
    text-decoration: none;
  }
`;

export const Footer: React.FC = () => {
  const { apartment } = useGlobal();
  const address =
    apartment === "VR"
      ? "San Nazaro st., 60, 4th floor, 37129, Verona - Italy"
      : "Via Guglielmo Marconi, 22, 37016 Garda VR, Italy";
  const airbnbLink =
    apartment === "VR"
      ? "https://www.airbnb.com/rooms/17443763?source_impression_id=p3_1585488245_Ei%2B%2FxYw7wViISchp"
      : "https://www.airbnb.com/rooms/38696794?source_impression_id=p3_1585675864_NaxMK%2FnDj%2FoESRY%2F";
  return (
    <Box
      align="center"
      justify="between"
      background="brand"
      pad="medium"
      color="brand"
      width="100%"
    >
      <Contacts direction="row" margin="5px" />
      <Text alignSelf="center" margin="5px">
        <Indicator /> {address}
      </Text>
      <Box direction="row" justify="center" align="center" margin="5px">
        <FacebookOption />{" "}
        <Anchor
          href="https://www.facebook.com/atticodellino"
          target="_blank"
          alignSelf="center"
          margin={{ right: "20px" }}
          rel="noopener"
        >
          Facebook
        </Anchor>
        <SvgAirbnb1 style={{ color: "#fff", stroke: "#fff" }} />
        <Anchor
          margin={{ left: "5px" }}
          href={airbnbLink}
          target="_blank"
          alignSelf="center"
          rel="noopener"
        >
          Airbnb
        </Anchor>
      </Box>
      <Box width="100%" align="end">
        <Text textAlign="end">© correttoweb 2020 </Text>
      </Box>
    </Box>
  );
};
