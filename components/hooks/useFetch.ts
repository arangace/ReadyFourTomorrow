import { getSession } from "next-auth/react";
import getTime from "./useGetTime";

type CalendarItem = {
  accessRole: string;
  defaultReminders: string[];
  etag: string;
  items: object[];
  kind: string;
  nextSyncToken: string;
  summary: string;
  timeZone: string;
  updated: string;
};

const fetchData = async () => {
  const session = await getSession();
  const timePeriod = getTime();
  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${timePeriod.startTime}&timeMax=${timePeriod.endTime}`,
    {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    }
  );

  const fetchedData = await response.json();
  return fetchedData as CalendarItem;
};
export default fetchData;
