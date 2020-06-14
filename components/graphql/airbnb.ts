import fetch from "isomorphic-unfetch";
import queryString from "query-string";
import { pdp_listing_detail, Review, GlobalType } from "./airbnDetail";

const BASE_URL = process.env.AIRBNB_BASEURL;
const LOCALE = "it";
const KEY = process.env.AIRBNB_KEY;
const LISTING_IDS = {
  VR: process.env.AIRBNB_VR,
  GARDA: process.env.AIRBNB_GARDA,
};

export const calculatePrice = async (from: string, to: string) => {
  // tslint:disable-next-line:max-line-length
  const url = `${BASE_URL}pdp_listing_booking_details?guests=2&listing_id=${LISTING_IDS.VR}&_format=for_web_with_date&_interaction_type=dateChanged&_intents=p3_book_it&_parent_request_uuid=f567fc7f-3922-4c8a-8fc6-db8ee3f02d02&_p3_impression_id=p3_1505504996_%2BSBaBxbLCLhmc09Y&show_smart_promotion=0&check_in=${from}&check_out=${to}&number_of_adults=2&number_of_children=0&number_of_infants=0&key=${KEY}&currency=EUR&locale=${LOCALE}`;
  const response = await fetch(url).then((r) => r.json());
  const price = response.pdp_listing_booking_details[0].price.total.amount;
  return parseInt(price, 10) * 0.9;
};

export const getReviews = (): Promise<{ reviews: Review[] }> =>
  fetch(
    `${BASE_URL}reviews?key=${KEY}&currency=EUR&listing_id=${LISTING_IDS.VR}&role=guest&_format=for_p3&_limit=15&_offset=7&_order=language_country`
  ).then((r) => r.json());

export const getDetails = async (
  apartment: GlobalType["apartment"],
  locale: GlobalType["lang"]
): Promise<pdp_listing_detail> => {
  const url = queryString.stringifyUrl({
    url: `${BASE_URL}pdp_listing_details/${LISTING_IDS[apartment]}`,
    query: {
      _format: "for_rooms_show",
      key: KEY,
      locale,
    },
  });
  console.log(url);
  const res: pdp_listing_detail = await fetch(url).then((r) => r.json());
  res.global = { apartment, lang: locale };
  return res;
};
