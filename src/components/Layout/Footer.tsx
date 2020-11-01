import React from "react";

import { useGlobal } from ".";
import { Contacts } from "./Contact";
import Link from "next/link";
import { useTranslations } from "../Translations/useTranslations";
import { useRouter } from "next/router";
import tw from "twin.macro";
import { FaAirbnb, FaFacebookSquare, FaMapMarker } from "react-icons/fa";

export const Footer: React.FC = () => {
  const {
    address,
    airbnbLink,
    facebookLink,
    apartment,
    brandColor,
  } = useGlobal();
  const { locale } = useRouter();
  const t = useTranslations();

  return (
    <footer
      css={`
        background-color: ${brandColor.hex};
        ${tw` flex flex-col items-center justify-between flex-wrap p-4 w-full text-white`};
      `}
    >
      <div css={tw`max-w-screen-lg mx-auto`}>
        <Contacts direction="row" />

        <div css={tw`flex flex-row justify-center m-2 items-center`}>
          <FaMapMarker /> <span css={tw`m-1`}>{address}</span>
        </div>
        <div css={tw`flex flex-row justify-center m-2 items-center`}>
          <FaFacebookSquare />
          <a
            href={facebookLink}
            target="_blank"
            css={tw`self-center mr-4 ml-1`}
            rel="noopener"
          >
            Facebook
          </a>
          <FaAirbnb />
          <a
            href={airbnbLink}
            target="_blank"
            css={tw`self-center  ml-1`}
            rel="noopener"
          >
            Airbnb
          </a>
        </div>
        <div css={tw`flex flex-row justify-center m-2`}>
          <Link
            href="/[apartment]/faq"
            as={`/${apartment.toLowerCase()}/faq`}
            locale={locale}
          >
            <a css={tw`mx-2`}>FAQ</a>
          </Link>
          -
          <Link
            href="/[apartment]/register"
            as={`/${apartment.toLowerCase()}/register`}
            locale={locale}
          >
            <a css={tw`mx-2`}>{t("REGISTER")}</a>
          </Link>
          -
          <Link
            href="/[apartment]/privacy"
            as={`/${apartment.toLowerCase()}/privacy`}
            locale={locale}
          >
            <a css={tw`mx-2`}>{t("PRIVACY")}</a>
          </Link>
        </div>
      </div>
      <div css={tw`flex flex-row justify-end w-full`}>
        <p>© correttoweb 2020 </p>
      </div>
    </footer>
  );
};
