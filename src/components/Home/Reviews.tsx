import React from "react";
import { pdp_listing_detail } from "../../graphql/_airbn.types";

import { useTranslations } from "../Translations/useTranslations";
import { H2 } from "../@UI/Texts";
import { FaAirbnb } from "react-icons/fa";
import tw from "twin.macro";
import { Section } from "../@UI/Section";

export const Reviews: React.FC<{
  sorted_reviews: pdp_listing_detail["pdp_listing_detail"]["sorted_reviews"];
  review_details_interface: pdp_listing_detail["pdp_listing_detail"]["review_details_interface"];
}> = ({ sorted_reviews, review_details_interface }) => {
  const t = useTranslations();
  return (
    <Section>
      <div css={tw`flex mb-2`}>
        <H2 css={tw`mr-2`}>{t("REVIEWS")}</H2>
        <FaAirbnb size="1.5em" />
      </div>

      <div
        css={`
          column-count: 3;
          margin-bottom: 20px;
          max-width: 90vw;
        `}
      >
        {review_details_interface.review_summary.map((s, k) => (
          <p key={k}>
            {s.label}: {s.localized_rating}/5
          </p>
        ))}
      </div>
      <div
        css={`
          height: 400px;
          overflow: scroll;
        `}
      >
        {sorted_reviews.map((review, k) => (
          <div css={tw`flex flex-col`} key={k}>
            <p css={tw`font-bold`}>
              {review.localized_date} - {review.rating}/5
            </p>
            <p>{review.comments}</p>
            <p css={tw`font-bold self-end`}>{review.reviewer.first_name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
