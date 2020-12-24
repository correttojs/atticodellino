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

export const Register: React.FC = () => {
  const router = useRouter();

  const t = useTranslations();

  const [isCompleted, setIsCompleted] = useState(false);

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
        <H2 css={tw`p-4 text-center`}>{t("ERROR_RESERVATION_EXPIRED")}</H2>
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
