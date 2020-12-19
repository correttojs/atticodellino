import { withGrommetTheme } from "../../components/Layout";
import { NextPage } from "next";
import React from "react";
import { takeShapeGQLClient } from "../../takeshape/takeShapeClient";
import { FaqsQuery } from "../../generated/graphql-takeshape";
import { getGlobalPaths, getGlobalProps } from "../../takeshape/getGlobal";
import { Section } from "../../components/@UI/Section";
import tw from "twin.macro";
import { H2 } from "../../components/@UI/Texts";

export async function getStaticProps({ params, locale }) {
  const globalProps = await getGlobalProps({ params, locale });
  const data = await takeShapeGQLClient.Faqs(globalProps.props.global);

  return {
    props: { ...globalProps.props, data: data },
  };
}

export const getStaticPaths = getGlobalPaths;

const Faq: NextPage<{ data: FaqsQuery }> = ({ data }) => {
  return (
    <Section>
      {data.getFaqList.items.map((item, i) => (
        <div
          css={tw`m-4`}
          style={{ marginTop: "-80px", paddingTop: "80px" }}
          key={i}
          id={"faq" + i}
        >
          <H2>{item?.question}</H2>
          <div dangerouslySetInnerHTML={{ __html: item?.answerHtml }} />
        </div>
      ))}
    </Section>
  );
};

export default withGrommetTheme()(Faq);
