import React from "react";
import { useGlobal } from ".";
import { Contacts } from "./Contact";
import { useRouter } from "next/router";
import tw from "twin.macro";
import { DropDown, DropDownItem } from "../@UI/DropDown";

export const Header: React.FC = () => {
  const { apartment, name, brandColor } = useGlobal();
  const { pathname, asPath, push } = useRouter();

  return (
    <header
      css={`
        background-color: ${brandColor?.hex};
        ${tw`fixed z-10 flex items-center justify-between flex-wrap p-4 w-full text-white`};
      `}
    >
      <div css={tw`flex items-center flex-shrink-0 text-white mr-6`}>
        <a
          css={tw`font-dancing no-underline text-3xl md:text-4xl font-bold`}
          href={`/${apartment.toLowerCase()}`}
        >
          {name}
        </a>
      </div>
      <div css={tw`flex`}>
        <div css={tw` hidden md:block`}>
          <Contacts direction="row" />
        </div>
        <DropDown>
          <DropDownItem
            text="Italiano"
            onClick={() => push(pathname, asPath, { locale: "it" })}
          />
          <DropDownItem
            text="English"
            onClick={() => push(pathname, asPath, { locale: "en" })}
          />
        </DropDown>
      </div>
    </header>
  );
};
