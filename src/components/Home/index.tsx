import React, { useState } from "react";
import { pdp_listing_detail } from "../../graphql/_airbn.types";
import { Map } from "./Map";
import { BookingCalendar } from "../FormBookCalendar";
import { Box, Collapsible } from "grommet";
import { Hero } from "./Hero";
import { Host } from "./Host";
import { Reviews } from "./Reviews";
import { Amenities } from "./Amenities";
import { useTranslations } from "../Translations/useTranslations";

import { useGlobal } from "../Layout";
import Link from "next/link";
import styled from "styled-components";
import { MQ_MOBILE } from "../Layout/MediaQueries";
import Head from "next/head";
import tw from "twin.macro";
import { H2, P, Span } from "../@UI/Texts";
import { Section } from "../@UI/Section";
import { Summary } from "./Summary";

const ApartmentLink = styled.a<{ backgroundColor: string }>`
  position: absolute;
  padding: 0 20px;
  right: 0px;
  height: 0;
  border-bottom: 30px solid ${({ backgroundColor }) => backgroundColor};
  border-top: 30px solid ${({ backgroundColor }) => backgroundColor};
  border-left: 20px solid transparent;
  cursor: pointer;
  font-size: 1.5em;
  line-height: 0px;
  text-decoration: none;
  @media ${MQ_MOBILE} {
    font-size: 1.2em;
    border-bottom: 20px solid ${({ backgroundColor }) => backgroundColor};
    border-top: 20px solid ${({ backgroundColor }) => backgroundColor};
    border-left: 10px solid transparent;
  }
`;

const Collapse: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <div></div>;
};

export const Home: React.FC<pdp_listing_detail> = ({ pdp_listing_detail }) => {
  const translate = useTranslations();
  const { name, sponsor } = useGlobal();
  const [readMoreOpen, setReadMoreOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta
          name="description"
          content={pdp_listing_detail.sectioned_description.summary}
        />
      </Head>

      <Hero photos={pdp_listing_detail.photos} />
      <div css={tw`px-3 py-1 m-6`}>
        <Link href={sponsor?.[0]?.key.toLowerCase()} passHref={true}>
          <ApartmentLink
            css={tw`text-white`}
            backgroundColor={sponsor?.[0]?.brandColor.hex}
          >
            {translate("ALSO", {
              c: sponsor?.[0]?.location,
            })}
          </ApartmentLink>
        </Link>
      </div>

      <Summary {...pdp_listing_detail} />

      {/* <Link to={apartment === "GARDA" ? "/" : "/garda"}></Link> */}
      <Section>
        <P>{pdp_listing_detail.sectioned_description.summary}</P>
      </Section>
      {!readMoreOpen &&
        (pdp_listing_detail.sectioned_description.space ||
          pdp_listing_detail.sectioned_description.access ||
          pdp_listing_detail.sectioned_description.notes) && (
          <Box pad={{ horizontal: "large" }} margin={{ bottom: "medium" }}>
            <p
              css={tw`text-lg font-semibold cursor-pointer`}
              onClick={() => setReadMoreOpen(true)}
            >
              {translate("RERAD_MORE")}
            </p>
          </Box>
        )}
      <Collapsible open={readMoreOpen}>
        <Section>
          <H2>{translate("SPACE")}</H2>
          <P>{pdp_listing_detail.sectioned_description.space}</P>
        </Section>

        <Section>
          <H2>{translate("GUEST_ACCESS")}</H2>
          <P>{pdp_listing_detail.sectioned_description.access}</P>
        </Section>

        <Section>
          <H2>{translate("OTHER_THINGS")}</H2>
          <P>{pdp_listing_detail.sectioned_description.notes}</P>
        </Section>

        <Box pad={{ horizontal: "large" }} margin={{ bottom: "medium" }}>
          <p
            css={tw`text-lg font-semibold cursor-pointer`}
            onClick={() => setReadMoreOpen(false)}
          >
            {translate("HIDE")}
          </p>
        </Box>
      </Collapsible>
      <Amenities amenities={pdp_listing_detail.listing_amenities} />
      <BookingCalendar />
      <Box>
        <Map title={pdp_listing_detail.name} />
      </Box>
      <Host
        srcImage={pdp_listing_detail.primary_host.profile_pic_path}
        about={pdp_listing_detail.primary_host.about}
        reviews={
          pdp_listing_detail.primary_host.badges.find((r) => r.id === "reviews")
            .count
        }
      />
      <Reviews
        sorted_reviews={pdp_listing_detail.sorted_reviews}
        review_details_interface={pdp_listing_detail.review_details_interface}
      />
      <Section>
        <H2>{translate("NEIGHBORHOOD")}</H2>
        <P>{pdp_listing_detail.sectioned_description.neighborhood_overview}</P>
      </Section>

      <Section>
        <H2>{translate("TRANSIT")}</H2>
        <P>{pdp_listing_detail.sectioned_description.transit}</P>
      </Section>

      <Section>
        <H2>{translate("HOUSE_RULES")}</H2>
        <P>{pdp_listing_detail.sectioned_description.house_rules}</P>
      </Section>

      <Box pad={{ horizontal: "large", bottom: "large" }}>
        {pdp_listing_detail.guest_controls.structured_house_rules.map(
          (s, k) => (
            <Span key={k}>{s}</Span>
          )
        )}
      </Box>
    </>
  );
};
