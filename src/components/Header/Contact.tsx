import React from "react";
import { Box, Text } from "grommet";
import { Phone, MailOption } from "grommet-icons";
import styled from "styled-components";
import { MQ_MOBILE } from "../CssVar/MediaQueries";

const EMAIL = process.env.NEXT_PUBLIC_FROM_EMAIL;
const TEL = process.env.NEXT_PUBLIC_PHONE;

const Link = styled(Text)`
  a {
    color: #fff !important;
    text-decoration: none;
  }
  @media ${MQ_MOBILE} {
    font-size: 0.9rem;
  }
`;

export const Contacts: React.FC<{ direction?; margin? }> = ({
  direction,
  margin,
}) => {
  return (
    <Box direction={direction} margin={margin}>
      <Box
        direction="row"
        onClick={() => {
          window.open(`tel:${TEL}`, "emailWindow");
        }}
      >
        <Phone />
        <Link margin={{ left: "small" }}>{TEL}</Link>
      </Box>
      <Box
        direction="row"
        margin={{ left: margin }}
        onClick={() => {
          window.open(`mailto:${EMAIL}`, "emailWindow");
        }}
      >
        <MailOption />
        <Link margin={{ left: "small" }}>{EMAIL}</Link>
      </Box>
    </Box>
  );
};
