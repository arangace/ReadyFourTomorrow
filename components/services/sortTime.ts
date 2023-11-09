import { SingleUserEvent, UserEvents } from "@/types/types";

const sortChronologically = (eventsArray: UserEvents) => {
  // Sort items chronologically based on their time
  eventsArray.sort((a, b) => {
    const time1 = parseInt(a.time);
    const time2 = parseInt(b.time);
    return time1 - time2;
  });
  // Then construct the event array with a colon and am/pm so it looks like 12hr time. Which is more readable for the user
  eventsArray.map((event: SingleUserEvent) => {
    const time = event.time;
    let isPm = false;
    let hours = parseInt(time.substring(0, time.length - 2));
    let minutes = event.time.substring(
      event.time.length - 2,
      event.time.length
    );

    if (hours >= 12) {
      isPm = true;
      if (hours !== 12) {
        hours = hours - 12;
      }
    }
    event.time = `${hours}:${minutes}${isPm ? "pm" : "am"}`;
    return event.time;
  });
  return eventsArray;
};
export default sortChronologically;
