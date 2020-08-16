import fetch from "isomorphic-unfetch";
import moment from "moment";
import * as ical from "ical";
import { takeShapeGQLClient } from "../takeshape/takeShapeClient";

const fetchIcal = async (icalUrl, summary: string) => {
  let data = await fetch(icalUrl).then((r) => r.text());
  data = ical.parseICS(data);

  return Object.keys(data).map((item) => ({
    start: moment(data[item].start).toISOString(),
    end: moment(data[item].end).toISOString(),
    summary,
  }));
};

export const calendarResolver = async (_, { apartment }) => {
  const apartmentObj = await takeShapeGQLClient.ApartmentSecret({
    key: apartment,
  });

  const promises = [];
  if (apartmentObj.getApartmentList.items?.[0]?.airbnbIcal) {
    promises.push(
      fetchIcal(apartmentObj.getApartmentList.items?.[0]?.airbnbIcal, "AIRBNB")
    );
  }
  if (apartmentObj.getApartmentList.items?.[0]?.bookingIcal) {
    promises.push(
      fetchIcal(
        apartmentObj.getApartmentList.items?.[0]?.bookingIcal,
        "BOOKING"
      )
    );
  }

  const result = await Promise.all(promises);

  return result.reduce((acc, curr) => [...acc, ...curr], []);
};
