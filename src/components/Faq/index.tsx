import { useReactQuery } from "@correttojs/next-utils/useReactQuery";
import { useRouter } from "next/router";
import React from "react";
import tw from "twin.macro";

import { Loading } from "../@UI/Loading";
import { Section } from "../@UI/Section";
import { H2 } from "../@UI/Texts";
import { FaqDocument } from "./faq.generated";

export const FaqPage: React.FC = () => {
  const router = useRouter();
  const { data, isLoading } = useReactQuery(
    FaqDocument,
    {
      hash: router.query.hash as string,
    },
    { enabled: !!router.query.hash }
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Section>
      {(data?.faq ?? []).map((item, i) => (
        <div
          css={tw`m-4`}
          style={{ marginTop: "-80px", paddingTop: "80px" }}
          key={"faq" + i}
          id={"faq" + i}
        >
          <H2>{item?.title}</H2>
          <div dangerouslySetInnerHTML={{ __html: item?.content.html ?? "" }} />
          {item?.media?.map((media, j) => (
            <>
              {media?.url && /video/.test(media.mimeType ?? "") && (
                // eslint-disable-next-line jsx-a11y/media-has-caption
                <video key={"fm" + i + j} width="320" height="240" controls>
                  <source src={media?.url} type={media?.mimeType ?? ""} />
                  Your browser does not support the video tag.
                </video>
              )}
              {media?.url && /image/.test(media.mimeType ?? "") && (
                <img
                  key={"fm" + i + j}
                  width="320"
                  height="240"
                  src={media.url}
                ></img>
              )}
            </>
          ))}
        </div>
      ))}
    </Section>
  );
};
