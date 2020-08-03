import fetch from "isomorphic-unfetch";
import moment from "moment";
import * as ical from "ical";

const fetchIcal = async (icalUrl) => {
  let data = await fetch(icalUrl).then((r) => r.text());
  data = ical.parseICS(data);

  return Object.keys(data).map((item) => ({
    start: moment(data[item].start).toISOString(),
    end: moment(data[item].end).toISOString(),
    summary:
      icalUrl === process.env.AIRBNB_CAL
        ? "AIRBNB"
        : icalUrl === process.env.BOOKING_URL
        ? "BOOKING"
        : "GOOGLE",
  }));
};

export const fetchPublicIcal = async () => {
  const result = await Promise.all([
    fetchIcal(process.env.AIRBNB_CAL),
    fetchIcal(process.env.BOOKING_URL),
    fetchIcal(process.env.PRIVATE_GOOGLE),
  ]);
  return result.reduce((acc, curr) => [...acc, ...curr], []);
};
