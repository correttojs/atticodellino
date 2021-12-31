import { useReactQuery } from "@correttojs/next-utils/useReactQuery";
import React, { useRef, useState } from "react";
import tw from "twin.macro";
import Image from "next/image";
import { Loading } from "../@UI/Loading";
import { Section } from "../@UI/Section";
import { H2 } from "../@UI/Texts";
import { FaqDocument } from "./faq.generated";
import { useGlobal } from "@/components/Layout/useGlobal";
import { Button } from "@/components/@UI/Buttons";
import { TwInput } from "@/components/@UI/FieldInput";

export const FaqPage: React.FC = () => {
  const global = useGlobal();
  const ref = useRef<HTMLInputElement>(null);
  const [key, setKey] = useState("");
  const { data, isLoading, error } = useReactQuery(
    FaqDocument,
    {
      hash: key,
    },
    { enabled: !!key }
  );

  if (isLoading && !error) {
    return <Loading />;
  }

  if (!key || error) {
    return (
      <form css={tw`p-4`}>
        <div css={tw`m-2`}>
          {error && <p css={tw`text-red-500`}>Wrong code</p>}
          <label css={tw`block`} htmlFor={"code"}>
            <span css={tw`text-gray-700`}> Enter code</span>
            <input ref={ref} css={TwInput} id="code" />
          </label>
        </div>
        <Button
          type="submit"
          css={tw`m-2`}
          onClick={(e) => {
            e.preventDefault();
            if (ref.current?.value) {
              setKey(ref.current.value);
            }
          }}
        >
          Submit
        </Button>
      </form>
    );
  }

  return (
    <>
      {(data?.faq ?? []).map((item, i) => (
        <div
          key={"faqs" + i}
          style={
            i % 2 === 1 ? { backgroundColor: global.colors.colors.lighter } : {}
          }
        >
          <Section
            css={[
              tw`m-4 py-10 md:flex flex-wrap justify-center`,
              i % 2 == 1 && tw`flex-row-reverse `,
            ]}
            style={{ marginTop: "-80px", paddingTop: "80px" }}
            id={"faq" + i}
          >
            <div css={[tw`md:flex-1`, i % 2 == 1 ? tw`md:pl-4` : tw`md:pr-4`]}>
              <H2>{item?.title}</H2>
              <div
                css={`
                  min-width: 320px;
                `}
                dangerouslySetInnerHTML={{ __html: item?.content.html ?? "" }}
              />
            </div>
            {item?.media?.map((media, j) => (
              <>
                {media?.url && /video/.test(media.mimeType ?? "") && (
                  // eslint-disable-next-line jsx-a11y/media-has-caption
                  <video
                    css={`
                      width: 350px;
                      height: 400px;
                    `}
                    key={"fm" + i + j}
                    width="350"
                    height="400"
                    controls
                  >
                    <source src={media?.url} type={media?.mimeType ?? ""} />
                    Your browser does not support the video tag.
                  </video>
                )}
                {media?.url && /image/.test(media.mimeType ?? "") && (
                  <div css={tw`p-4 `}>
                    <Image
                      key={"fm" + i + j}
                      width="320"
                      height="240"
                      src={media.url}
                      alt=""
                    ></Image>
                  </div>
                )}
              </>
            ))}
          </Section>
        </div>
      ))}
    </>
  );
};
