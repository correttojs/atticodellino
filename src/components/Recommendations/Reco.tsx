import { AnchorPointer } from "@/components/AnchorPointer/AnchorPointer";
import { useTranslations } from "@/hooks/useTranslations/useTranslations";
import { useReactQuery } from "@correttojs/next-utils/useReactQuery";
import React from "react";
import tw from "twin.macro";
import { Loading } from "../@UI/Loading";
import { Section } from "../@UI/Section";
import { H2, H3 } from "../@UI/Texts";
import { RecoDocument } from "./reco.generated";

export const RecoPage: React.FC = () => {
  const { data, isLoading, error } = useReactQuery(RecoDocument);

  const translate = useTranslations();
  if (isLoading && !error) {
    return <Loading />;
  }

  return (
    <>
      <Section>
        <AnchorPointer id="reco" />
        <H2 css={tw`mr-2`}>{translate("REVIEWS")}</H2>
      </Section>
      {(data?.reco ?? []).map((item, i) => (
        <div key={"reco" + i}>
          <Section css={[tw` py-4  `]} id={"recos" + i}>
            <a href={item?.link ?? ""} target="_blank" rel="noreferrer">
              <H3>{item?.title}</H3>
            </a>
            <div
              css={`
                min-width: 320px;
              `}
              dangerouslySetInnerHTML={{
                __html: item?.description.html ?? "",
              }}
            />
          </Section>
        </div>
      ))}
    </>
  );
};
