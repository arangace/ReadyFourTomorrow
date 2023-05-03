import { getSession } from "next-auth/react";
import getTime from "./useGetTime";
import { Session } from "next-auth";
import { CalendarItem } from "@/types/types";

interface UserSession extends Session {
  accessToken: string;
}

const fetchData = async () => {
  const session = (await getSession()) as UserSession;
  if (session) {
    const accessToken = session.accessToken;
    const timePeriod = getTime();
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${timePeriod.startTime}&timeMax=${timePeriod.endTime}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const fetchedData = await response.json();
    return fetchedData as CalendarItem;
  }
};
export default fetchData;
