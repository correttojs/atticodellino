import React, { useState, useEffect } from "react";
import { pdp_listing_detail, GlobalType } from "../../graphql/_airbn.types";
import { Map } from "../Map";
import { BookingCalendar } from "../BookCalendar";
import { Box, Text, Collapsible } from "grommet";
import { Hero } from "../Hero/Hero";
import { Host } from "../Host";
import { Reviews } from "../Reviews";
import { Amenities } from "../Amenities";
import { useTranslations } from "../Translations/useTranslations";
import { HomeSection } from "./HomeSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPersonBooth,
  faBath,
  faFemale,
} from "@fortawesome/free-solid-svg-icons";
import { useGlobal } from "../withGrommetTheme";
import { useChangeLocale } from "../Translations/useChangeLocale";
import Link from "next/link";
import styled from "styled-components";
import { MQ_MOBILE } from "../CssVar/MediaQueries";
import Head from "next/head";

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

const Icon = styled(FontAwesomeIcon)`
  max-width: 18px;
  max-height: 18px;
`;

export const Home: React.FC<pdp_listing_detail> = ({ pdp_listing_detail }) => {
  const translate = useTranslations();
  const { lang, apartment, name, sponsor } = useGlobal();
  const [readMoreOpen, setReadMoreOpen] = useState(false);
  const { changeLocale, apartmentLink } = useChangeLocale();

  useEffect(() => {
    let navLang: GlobalType["lang"] = navigator.language.split("-")[0] as any;
    if (navLang !== "it" && navLang !== "de") {
      navLang = "en";
    }
    if (
      !localStorage.getItem("lang") ||
      localStorage.getItem("lang") !== lang
    ) {
      changeLocale(
        (localStorage.getItem("lang") as GlobalType["lang"]) ?? navLang
      );
    }
  }, [lang]);

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
      <Box
        pad={{ horizontal: "large", vertical: "small" }}
        margin={{ bottom: "medium" }}
        align="end"
      >
        <Link href={apartmentLink(sponsor?.[0]?.key)} passHref={true}>
          <ApartmentLink backgroundColor={sponsor?.[0]?.brandColor.hex}>
            {translate("ALSO", {
              c: sponsor?.[0]?.location,
            })}
          </ApartmentLink>
        </Link>
      </Box>
      <Box
        direction="row-responsive"
        align="center"
        justify="between"
        pad={{ horizontal: "large", top: "large", bottom: "small" }}
        margin={{ bottom: "large" }}
        border="bottom"
      >
        <Text>
          <Icon icon={faFemale} style={{ marginRight: "5px" }} />
          {pdp_listing_detail.guest_label}
        </Text>
        <Text>
          <Icon icon={faPersonBooth} style={{ marginRight: "5px" }} />
          {pdp_listing_detail.bedroom_label}
        </Text>
        {!/^0/.test(pdp_listing_detail.bed_label) && (
          <Text>
            <Icon
              width={"15px"}
              height={"15px"}
              icon={faBed}
              style={{ marginRight: "5px" }}
            />
            {pdp_listing_detail.bed_label}
          </Text>
        )}
        <Text>
          <Icon icon={faBath} style={{ marginRight: "5px" }} />
          {pdp_listing_detail.bathroom_label}
        </Text>
      </Box>
      {/* <Link to={apartment === "GARDA" ? "/" : "/garda"}></Link> */}
      <Box pad="large">
        <Text size={"large"}>
          {pdp_listing_detail.sectioned_description.summary}
        </Text>
      </Box>
      {!readMoreOpen &&
        (pdp_listing_detail.sectioned_description.space ||
          pdp_listing_detail.sectioned_description.access ||
          pdp_listing_detail.sectioned_description.notes) && (
          <Box pad={{ horizontal: "large" }} margin={{ bottom: "medium" }}>
            <Text
              weight="bold"
              size={"large"}
              onClick={() => setReadMoreOpen(true)}
            >
              {translate("RERAD_MORE")}
            </Text>
          </Box>
        )}
      <Collapsible open={readMoreOpen}>
        <HomeSection
          title={translate("SPACE")}
          content={pdp_listing_detail.sectioned_description.space}
        />
        <HomeSection
          title={translate("GUEST_ACCESS")}
          content={pdp_listing_detail.sectioned_description.access}
        />
        <HomeSection
          title={translate("OTHER_THINGS")}
          content={pdp_listing_detail.sectioned_description.notes}
        />

        <Box pad={{ horizontal: "large" }} margin={{ bottom: "medium" }}>
          <Text
            weight="bold"
            size={"large"}
            onClick={() => setReadMoreOpen(false)}
          >
            {translate("HIDE")}
          </Text>
        </Box>
      </Collapsible>
      <Amenities listing_amenities={pdp_listing_detail.listing_amenities} />
      <BookingCalendar />
      <Box>
        <Map title={pdp_listing_detail.name} />
      </Box>
      <Host {...pdp_listing_detail.primary_host} />
      <Reviews
        sorted_reviews={pdp_listing_detail.sorted_reviews}
        review_details_interface={pdp_listing_detail.review_details_interface}
      />
      <HomeSection
        title={translate("NEIGHBORHOOD")}
        content={pdp_listing_detail.sectioned_description.neighborhood_overview}
      />
      <HomeSection
        title={translate("TRANSIT")}
        content={pdp_listing_detail.sectioned_description.transit}
      />{" "}
      <HomeSection
        title={translate("HOUSE_RULES")}
        content={pdp_listing_detail.sectioned_description.house_rules}
      />
      <Box pad={{ horizontal: "large", bottom: "large" }}>
        {pdp_listing_detail.guest_controls.structured_house_rules.map(
          (s, k) => (
            <Text key={k}>{s}</Text>
          )
        )}
      </Box>
    </>
  );
};
