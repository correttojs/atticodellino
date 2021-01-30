import fetch from "jest-fetch-mock";

import { fetchIcal } from "../_calendar";

describe("Calendar", () => {
  it("fetchIcal", async () => {
    fetch.mockResponseOnce(`BEGIN:VCALENDAR
PRODID;X-RICAL-TZSOURCE=TZINFO:-//Airbnb Inc//Hosting Calendar 0.8.8//EN
CALSCALE:GREGORIAN
VERSION:2.0
BEGIN:VEVENT
DTEND;VALUE=DATE:20210430
DTSTART;VALUE=DATE:20210128
UID:6fec1092d3fa-bdc539b62825e79828208151543c5dfe@airbnb.com
SUMMARY:Airbnb (Not available)
END:VEVENT
BEGIN:VEVENT
DTEND;VALUE=DATE:20220131
DTSTART;VALUE=DATE:20210729
UID:6fec1092d3fa-bbaf28e08fe4dce175501a85999001b8@airbnb.com
SUMMARY:Airbnb (Not available)
END:VEVENT
END:VCALENDAR`);
    const data = await fetchIcal("https://url", "summay");

    expect(data.length).toEqual(2);
    expect(data.length).toEqual(2);
    expect(data).toEqual([
      {
        start: "2021-01-27T23:00:00.000Z",
        end: "2021-04-29T22:00:00.000Z",
        summary: "summay",
      },
      {
        start: "2021-07-28T22:00:00.000Z",
        end: "2022-01-30T23:00:00.000Z",
        summary: "summay",
      },
    ]);
  });
});
