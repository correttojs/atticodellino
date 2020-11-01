import React from "react";
import { useTranslations } from "../Translations/useTranslations";
import { Section } from "../@UI/Section";
import { BackgroundWrapper } from "../@UI/BackgroundWrapper";
import { H2, P } from "../@UI/Texts";
import tw from "twin.macro";

export const Amenities: React.FC<{
  amenities: { name: string }[];
}> = ({ amenities }) => {
  const t = useTranslations();

  return (
    <BackgroundWrapper>
      <Section>
        <H2>{t("AMENITIES")}</H2>
        <div
          css={`
            ${tw`pt-5`}
            column-count: 3;
            max-width: 90vw;
          `}
        >
          {amenities.map((s, k) => (
            <P key={k}>{s.name}</P>
          ))}
        </div>
      </Section>
    </BackgroundWrapper>
  );
};
