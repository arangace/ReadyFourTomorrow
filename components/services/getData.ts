import { SingleUserEvent, UserEvents } from "@/types/types";
import { signOut } from "next-auth/react";
import fetchData from "./getMeetings";
import sortChronologically from "./sortTime";

const getData = async () => {
  const calendarEvents = await fetchData();
  let loaded = false;
  let chronologicalEvents: UserEvents = [];

  if (calendarEvents) {
    if (calendarEvents.error) {
      signOut({ callbackUrl: "/login" });
    } else if (calendarEvents.items.length === 0) {
      loaded = true;
    } else {
      let userEvents: UserEvents = [];
      calendarEvents.items.map((event) => {
        if (event.status !== "cancelled") {
          let startTime: string = "";
          if (event.start.dateTime !== (null || undefined)) {
            let time = new Date(event.start.dateTime);
            let hours = time.getHours().toString();
            let minutes = time.getMinutes().toString();
            if (minutes.length !== 2) {
              minutes = "0" + minutes;
            }
            startTime = `${hours}${minutes}`;
          }
          let newEvent = { name: event.summary, time: startTime };
          userEvents = [...userEvents, newEvent];

          loaded = true;
        }
      });
      chronologicalEvents = sortChronologically(userEvents);
    }
  } else {
    signOut({ callbackUrl: "/login" });
    return null;
  }
  return {
    userEvents: chronologicalEvents,
    loaded: loaded,
  };
};
export default getData;
