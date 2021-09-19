import {
  useReactMutation,
  useReactQuery,
} from "@correttojs/next-utils/useReactQuery";
import React, { useState } from "react";
import tw from "twin.macro";

import { useTranslations } from "../../hooks/useTranslations/useTranslations";
import { H2 } from "../@UI/Texts";
import { useGlobal } from "../Layout";
import { Calendar } from "./Calendar.css";
import { CalendarDocument } from "./calendar.generated";
import { FormBook } from "./FormBook";
import { PriceDocument } from "./price.generated";

const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${(
    "0" +
    (date.getDate() + 1)
  ).slice(-2)}`;
};

export const BookingCalendar = () => {
  const { apartment, airBnb } = useGlobal();
  const { data } = useReactQuery(CalendarDocument, { apartment });

  const { mutate: calcPrice, data: price } = useReactMutation(PriceDocument);
  const t = useTranslations();

  const [selection, setSelection] = useState<Date[]>([]);

  return (
    <section
      data-cy="book"
      css={`
        ${tw`max-w-screen-lg p-2 mx-auto md:p-8 `}
      `}
    >
      <H2>{t("BOOK")}</H2>
      <div
        css={tw`flex flex-col items-center justify-center md:m-4 md:flex-row`}
      >
        <Calendar
          tileDisabled={(e) => {
            if (!data) {
              return false;
            }
            let booked = false;
            if (e.date.getTime() < new Date().getTime()) {
              return true;
            }
            (data?.calendar ?? []).forEach((event) => {
              booked =
                booked ||
                (new Date(event?.start ?? "").getTime() <= e.date.getTime() &&
                  new Date(event?.end ?? "").getTime() >= e.date.getTime());
            });
            return booked;
          }}
          selectRange={true}
          onChange={(e: any) => {
            if (Array.isArray(e)) {
              setSelection(e);
              calcPrice({
                from: formatDate(e[0]),
                to: formatDate(e[1]),
                airBnb: airBnb ?? "",
              });
            }
          }}
        />
        <FormBook
          from={selection[0]?.toISOString()}
          to={selection[1]?.toISOString()}
          price={price?.price}
        />
      </div>
    </section>
  );
};
