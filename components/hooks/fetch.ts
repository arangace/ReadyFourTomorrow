import { getSession } from "next-auth/react";
import getTime from "./useGetTime";
import { Session } from "next-auth";
import { CalendarItem } from "@/types/types";

interface UserSession extends Session {
  accessToken: string;
}

const fetchData = async () => {
  console.log("fetching..");
  const session = (await getSession()) as UserSession;
  if (session) {
    console.log("session valid");
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
    if (response.status === 200) {
      const fetchedData = await response.json();
      return fetchedData as CalendarItem;
    } else {
      throw new Error();
    }
  }
};
export default fetchData;
