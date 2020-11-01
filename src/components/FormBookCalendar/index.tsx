import ReactCalendar from "react-calendar";
import { useCalendarQuery, usePriceLazyQuery } from "../../generated/graphql";
import styled from "styled-components";
import { Book } from "./Book";
import React, { useState } from "react";
import { useTranslations } from "../Translations/useTranslations";
import { useGlobal } from "../Layout";
import { H2 } from "../@UI/Texts";
import tw from "twin.macro";
import { MQ_NOT_DESKTOP } from "../Layout/MediaQueries";

const StyledCalendar = styled(ReactCalendar)`
  @media ${MQ_NOT_DESKTOP} {
    .react-calendar {
      min-width: 350px !important;
    }
  }

  .react-calendar__tile--now {
    background: #fff;
    border: solid 1px;
    &:hover {
    }
  }
  .react-calendar__tile--now:enabled:hover {
    background-color: #e6e6e6;
  }
  .react-calendar__tile--active {
    background: ${({ theme }: { theme }) => theme.global.colors.brand};
  }
  .react-calendar__tile--active:enabled:focus,
  .react-calendar__tile--active:enabled:hover {
    background: ${({ theme }: { theme }) => theme.global.colors.active};
  }
`;

const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${(
    "0" +
    (date.getDate() + 1)
  ).slice(-2)}`;
};

export const BookingCalendar = () => {
  const { apartment, airBnb } = useGlobal();
  const { data } = useCalendarQuery({ variables: { apartment } });
  const [calcPrice, { data: price }] = usePriceLazyQuery();
  const t = useTranslations();

  const [selection, setSelection] = useState([]);

  return (
    <section
      css={`
        ${tw`md:p-8 max-w-screen-lg mx-auto `}
      `}
    >
      <H2>{t("BOOK")}</H2>
      <div
        css={tw`md:m-4 flex flex-col justify-center items-center md:flex-row`}
      >
        <StyledCalendar
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
              variables: {
                from: formatDate(e[0]),
                to: formatDate(e[1]),
                airBnb,
              },
            });
          }}
        />
        <Book from={selection[0]} to={selection[1]} price={price?.price} />
      </div>
    </section>
  );
};
