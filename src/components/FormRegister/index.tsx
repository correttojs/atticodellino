// Render Prop
import React, { useState } from "react";

import { useTranslations } from "../Translations/useTranslations";
import { H2 } from "../@UI/Texts";
import tw from "twin.macro";
import { useRouter } from "next/router";
import { Section } from "../@UI/Section";
import { Loading } from "../@UI/Loading";
import { useQuery } from "@apollo/client";
import { ReservationDocument } from "./register.generated";
import { Detail } from "./Detail";
import { Sponsor } from "./Sponsor";
import { FaqPage } from "../Faq";
import { FormRegister } from "./FormRegister";
import { SiGooglestreetview } from "react-icons/si";
import { FaAirbnb } from "react-icons/fa";
import { reservation } from "../../graphql/_reservations";

export const Register: React.FC = () => {
  const router = useRouter();

  const t = useTranslations();

  const { data, loading, error } = useQuery(ReservationDocument, {
    variables: {
      hash: router.query.hash as string,
    },
  });

  if (loading) {
    return (
      <div css={tw`flex justify-center`}>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <>
        <H2 css={tw`p-4 text-center`}>{t("ERROR_RESERVATION")}</H2>
        <Sponsor />
      </>
    );
  }

  if (data?.reservation?.isExpired) {
    return (
      <>
        <H2 css={tw`p-4 text-center`}>{t("RATE_US")}</H2>
        <div css={tw`flex justify-center`}>
          <a
            href={data?.reservation?.mapLink}
            css={tw`m-2 flex items-center cursor-pointer`}
            target="_blank"
            rel="noopener"
          >
            <SiGooglestreetview css={tw`inline`} /> Google
          </a>
          <a
            href={data?.reservation?.airbnbLink}
            css={tw`m-2 flex items-center cursor-pointer`}
            target="_blank"
            rel="noopener"
          >
            <FaAirbnb css={tw`inline`} /> Airbnb
          </a>
        </div>
        <H2 css={tw`p-4 text-center`}>{t("NEXT_TIME")}</H2>
        <Sponsor />
      </>
    );
  }

  if (data?.reservation?.guests?.length) {
    return (
      <div css={tw`p-2 md:p-8 max-w-screen-lg mx-auto `}>
        {
          <>
            <Section>
              <H2 css={tw` p-4 text-center`}>
                {t("THANKYOU", {
                  data: data?.reservation?.check_in ?? "",
                })}
              </H2>
              <Detail reservation={data?.reservation} />
            </Section>
            <FaqPage />
          </>
        }
      </div>
    );
  }

  return (
    <div css={tw`p-2 md:p-8 max-w-screen-lg mx-auto `}>
      <Sponsor />
      <Section>
        <Detail reservation={data?.reservation} />
      </Section>
      <FormRegister
        reservation={data?.reservation}
        hash={router.query.hash as string}
      />
    </div>
  );
};
