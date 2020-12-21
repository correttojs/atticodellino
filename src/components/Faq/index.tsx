import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import tw from "twin.macro";
import { useFaqQuery } from "../../generated/graphql";
import { Loading } from "../@UI/Loading";

import { Section } from "../@UI/Section";
import { H2 } from "../@UI/Texts";

export const FaqPage: React.FC = () => {
  const router = useRouter();
  const { data, loading } = useFaqQuery({
    variables: {
      hash: router.query.hash as string,
    },
  });
  if (loading) {
    return <Loading />;
  }

  console.log(data?.faq[0]?.asset?.path);
  return (
    <Section>
      {data?.faq.map((item, i) => (
        <div
          css={tw`m-4`}
          style={{ marginTop: "-80px", paddingTop: "80px" }}
          key={i}
          id={"faq" + i}
        >
          <H2>{item?.question}</H2>
          <div dangerouslySetInnerHTML={{ __html: item?.answerHtml }} />
          {item.asset?.path && (
            <video width="320" height="240" controls>
              <source
                src={`https://assets.takeshape.io/${item.asset.path}`}
                type={item.asset?.mimeType}
              />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ))}
    </Section>
  );
};
