import React from "react";
import { pdp_listing_detail } from "../../graphql/_airbn.types";
import { Box, Text, Heading } from "grommet";
import styled from "styled-components";
import { useTranslations } from "../Translations/useTranslations";

const Multi = styled.div`
  column-count: 3;
`;

export const Amenities: React.FC<{
  amenities: { name: string }[];
}> = ({ amenities }) => {
  const t = useTranslations();
  return (
    <Box pad="large" background="lighter">
      <Heading level="2">{t("AMENITIES")}</Heading>

      <Multi>
        {amenities.map((s, k) => (
          <div key={k}>
            <Text>{s.name}</Text>
          </div>
        ))}
      </Multi>
    </Box>
  );
};
