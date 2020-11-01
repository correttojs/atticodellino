import React from "react";
import { pdp_listing_detail } from "../../graphql/_airbn.types";
import { Map } from "./Map";
import { BookingCalendar } from "../FormBookCalendar";
import { Hero } from "./Hero";
import { Host } from "./Host";
import { Reviews } from "./Reviews";
import { Amenities } from "./Amenities";
import { useTranslations } from "../Translations/useTranslations";

import { useGlobal } from "../Layout";
import Link from "next/link";
import Head from "next/head";
import tw from "twin.macro";
import { H2, P } from "../@UI/Texts";
import { Section } from "../@UI/Section";
import { Summary } from "./Summary";
import { Collapsible } from "../@UI/Collapsible";
import { ApartmentLink } from "./ApartmentLink";

export const Home: React.FC<pdp_listing_detail> = ({ pdp_listing_detail }) => {
  const translate = useTranslations();
  const { name, sponsor } = useGlobal();

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
          <ApartmentLink backgroundColor={sponsor?.[0]?.brandColor.hex}>
            {translate("ALSO", {
              c: sponsor?.[0]?.location,
            })}
          </ApartmentLink>
        </Link>
      </div>

      <Summary {...pdp_listing_detail} />

      <Collapsible
        Preview={<P>{pdp_listing_detail.sectioned_description.summary}</P>}
        showReadMore={
          !!(
            pdp_listing_detail.sectioned_description.space ??
            pdp_listing_detail.sectioned_description.access ??
            pdp_listing_detail.sectioned_description.notes
          )
        }
      >
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
      </Collapsible>

      <Amenities amenities={pdp_listing_detail.listing_amenities} />
      <BookingCalendar />

      <Map title={pdp_listing_detail.name} />

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
        <ul css={tw`pt-2`}>
          {pdp_listing_detail.guest_controls.structured_house_rules.map(
            (s, k) => (
              <li css={tw`font-bold`} key={k}>
                {s}
              </li>
            )
          )}
        </ul>
      </Section>
    </>
  );
};
