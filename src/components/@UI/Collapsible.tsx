import React, { useState } from "react";
import tw from "twin.macro";
import { useTranslations } from "../Translations/useTranslations";
import { Section } from "./Section";

export const Collapsible: React.FC<{
  showReadMore: boolean;
  Preview: React.ReactNode;
}> = ({ showReadMore, Preview, children }) => {
  const translate = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Section>
        {Preview}
        {showReadMore && !isOpen && (
          <p
            css={tw`text-lg font-semibold cursor-pointer pt-4`}
            onClick={() => setIsOpen(true)}
          >
            {translate("RERAD_MORE")}
          </p>
        )}
      </Section>
      {isOpen && (
        <Section>
          {children}
          <p
            css={tw`text-lg font-semibold cursor-pointer pt-4`}
            onClick={() => setIsOpen(false)}
          >
            {translate("HIDE")}
          </p>
        </Section>
      )}
    </>
  );
};
