import { SingleUserEvent } from "@/types/types";
import { signOut } from "next-auth/react";
import fetchData from "./fetch";

const getData = async () => {
  const calendarEvents = await fetchData();

  let loaded = false;
  let userEvents: Array<SingleUserEvent> = [];
  if (calendarEvents) {
    if (calendarEvents.error) {
      console.log("User not authenticated");
      signOut({ callbackUrl: "/login" });
      return;
    } else if (calendarEvents.items.length === 0) {
      loaded = true;
      return;
    } else {
      calendarEvents.items.map((event) => {
        if (event.status !== "cancelled") {
          console.log("event");
          console.log(event.summary);
          console.log(event.start.dateTime);
          let startTime: string = "";
          if (event.start.dateTime !== (null || undefined)) {
            let time = new Date(event.start.dateTime);
            let hours = time.getHours();
            let minutes = time.getMinutes().toString();
            let isPm = false;
            if (minutes.length !== 2) {
              minutes = "0" + minutes;
            }
            if (hours >= 12) {
              isPm = true;
              if (hours !== 12) {
                hours = hours - 12;
              }
            }
            startTime = `${hours}:${minutes} ${isPm ? "pm" : "am"}`;
          }
          let newEvent = { name: event.summary, time: startTime };
          console.log(newEvent);
          userEvents = [...userEvents, newEvent];

          loaded = true;
        }
      });
    }
  }

  const data = {
    userEvents: userEvents,
    loaded: loaded,
  };
  return data;
};
export default getData;
