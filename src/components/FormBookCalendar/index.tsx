import { FormBook } from "./FormBook";
import React, { useState } from "react";
import { useTranslations } from "../Translations/useTranslations";
import { useGlobal } from "../Layout";
import { H2 } from "../@UI/Texts";
import tw from "twin.macro";

import { CalendarDocument } from "./calendar.generated";
import { PriceDocument } from "./price.generated";
import { Calendar } from "./Calendar.css";
import { useSwrMutation, useSwrQuery } from "../useSwrQuery";

const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${(
    "0" +
    (date.getDate() + 1)
  ).slice(-2)}`;
};

export const BookingCalendar = () => {
  const { apartment, airBnb } = useGlobal();
  const { data } = useSwrQuery("cal", CalendarDocument, { apartment });

  const [calcPrice, { data: price }] = useSwrMutation("/price", PriceDocument);
  const t = useTranslations();

  const [selection, setSelection] = useState([]);

  return (
    <section
      css={`
        ${tw`p-2 md:p-8 max-w-screen-lg mx-auto `}
      `}
    >
      <H2>{t("BOOK")}</H2>
      <div
        css={tw`md:m-4 flex flex-col justify-center items-center md:flex-row`}
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
            data.calendar.forEach((event) => {
              booked =
                booked ||
                (new Date(event.start).getTime() <= e.date.getTime() &&
                  new Date(event.end).getTime() >= e.date.getTime());
            });
            return booked;
          }}
          selectRange={true}
          onChange={(e) => {
            setSelection(e);
            calcPrice({
              from: formatDate(e[0]),
              to: formatDate(e[1]),
              airBnb,
            });
          }}
        />
        <FormBook from={selection[0]} to={selection[1]} price={price?.price} />
      </div>
    </section>
  );
};
