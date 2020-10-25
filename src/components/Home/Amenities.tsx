import React from "react";
import { Box, Text, Heading } from "grommet";
import { useTranslations } from "../Translations/useTranslations";

export const Amenities: React.FC<{
  amenities: { name: string }[];
}> = ({ amenities }) => {
  const t = useTranslations();
  return (
    <Box pad="large" background="lighter">
      <Heading level="2">{t("AMENITIES")}</Heading>

      <div
        css={`
          column-count: 3;
        `}
      >
        {amenities.map((s, k) => (
          <div key={k}>
            <Text>{s.name}</Text>
          </div>
        ))}
      </div>
    </Box>
  );
};
