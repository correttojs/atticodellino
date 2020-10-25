import React from "react";
import { pdp_listing_detail } from "../../graphql/_airbn.types";
import { Box, Text, Heading } from "grommet";
import styled from "styled-components";
import SvgAirbnb1 from "../Layout/AirbnbIcon";
import { useTranslations } from "../Translations/useTranslations";
import { H2 } from "../@UI/Texts";

const StyledReview = styled.div`
  height: 400px;
  overflow: scroll;
`;

const Multi = styled.div`
  column-count: 3;
  margin-bottom: 20px;
`;

export const Reviews: React.FC<{
  sorted_reviews: pdp_listing_detail["pdp_listing_detail"]["sorted_reviews"];
  review_details_interface: pdp_listing_detail["pdp_listing_detail"]["review_details_interface"];
}> = ({ sorted_reviews, review_details_interface }) => {
  const t = useTranslations();
  return (
    <Box pad="large">
      <Box align="center" direction="row">
        <H2>{t("REVIEWS")}</H2>
        <SvgAirbnb1 style={{ marginLeft: "20px" }} />
      </Box>

      <Multi>
        {review_details_interface.review_summary.map((s, k) => (
          <Box key={k}>
            <Text>
              {s.label}: {s.localized_rating}/5
            </Text>
          </Box>
        ))}
      </Multi>
      <StyledReview>
        {sorted_reviews.map((review, k) => (
          <Box key={k}>
            <Text weight="bold">
              {review.localized_date} - {review.rating}/5
            </Text>
            <Text>{review.comments}</Text>
            <Text alignSelf="end" weight="bold">
              {review.reviewer.first_name}
            </Text>
          </Box>
        ))}
      </StyledReview>
    </Box>
  );
};
