import { withGrommetTheme } from "../../components/Layout";
import { NextPage } from "next";
import React, { useState } from "react";
import { takeShapeGQLClient } from "../../takeshape/takeShapeClient";
import { FaqsQuery } from "../../generated/graphql-takeshape";
import { getGlobalPaths, getGlobalProps } from "../../takeshape/getGlobal";
import { Section } from "../../components/@UI/Section";
import tw from "twin.macro";

export async function getStaticProps({ params, locale }) {
  const globalProps = await getGlobalProps({ params, locale });
  const data = await takeShapeGQLClient.Faqs(globalProps.props.global);

  return {
    props: { ...globalProps.props, data: data },
  };
}

export const getStaticPaths = getGlobalPaths;

const Faq: NextPage<{ data: FaqsQuery }> = ({ data }) => {
  const [copied, setCopied] = useState<{ [key: string]: boolean }>({});

  return (
    <Section>
      {data.getFaqList.items.map((item, i) => (
        <div
          css={tw`m-4`}
          style={{ marginTop: "-80px", paddingTop: "80px" }}
          key={i}
          id={"faq" + i}
        >
          <h3
            onClick={() => {
              navigator.clipboard.writeText(
                `${window.location.href.split("#")[0]}#faq` + i
              );
              setCopied({ [i]: true });
              setTimeout(() => {
                setCopied({ [i]: false });
              }, 2000);
            }}
          >
            {item.question}
            {copied[i] && <span style={{ color: "red" }}> copied</span>}
          </h3>
          <p dangerouslySetInnerHTML={{ __html: item.answerHtml }} />
        </div>
      ))}
    </Section>
  );
};

export default withGrommetTheme()(Faq);
