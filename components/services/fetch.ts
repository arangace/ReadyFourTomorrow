import { getSession, signOut } from "next-auth/react";
import getTime from "../hooks/useGetTime";
import { Session } from "next-auth";
import { CalendarItem } from "@/types/types";

interface UserSession extends Session {
  accessToken: string;
}

const getCalendar = async (session: UserSession) => {
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
    return response.json();
  } else {
    signOut({ callbackUrl: "/home" });
  }
};

const fetchData = async () => {
  const session = (await getSession()) as UserSession;
  if (session) {
    const fetchedData = await getCalendar(session);

    return fetchedData as CalendarItem;
  }
};
export default fetchData;
