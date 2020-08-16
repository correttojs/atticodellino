import React from "react";
import { pdp_listing_detail } from "../../graphql/airbnDetail";
import { Box, Text, Heading } from "grommet";
import styled from "styled-components";
import { useTranslations } from "../Translations/useTranslations";

const Multi = styled.div`
  column-count: 3;
`;

export const Amenities: React.FC<{
  listing_amenities: pdp_listing_detail["pdp_listing_detail"]["listing_amenities"];
}> = ({ listing_amenities }) => {
  const t = useTranslations();
  return (
    <Box pad="large" background="lighter">
      <Heading level="2">{t("AMENITIES")}</Heading>

      <Multi>
        {listing_amenities.map((s, k) => (
          <div key={k}>
            <Text>{s.name}</Text>
          </div>
        ))}
      </Multi>
    </Box>
  );
};
