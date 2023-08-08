import React, { useEffect, useState } from "react";
import { getSession, signOut, useSession } from "next-auth/react";
import { MainContent, ShowMoreButton } from "./HomeStyles";
import fetchData from "../hooks/useFetch";
import Clock from "../clock/Clock";
import Weather from "../weather/Weather";
import Meetings from "../meetings/Meetings";
import { UserEvents } from "@/types/types";
import AudioButton from "../audioButton/AudioButton";
import WeatherSummary from "../weather/WeatherSummary";

const HomePage = () => {
  const { data, status } = useSession();
  const [userEvents, setUserEvents] = useState<UserEvents>([]);
  const [loaded, setloaded] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleSignOut = () => {
    console.log("signing out..");
    signOut({ callbackUrl: "/login" });
  };

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    console.log(data?.user?.name);
    console.log("done");
    const getCalendarData = async () => {
      const calendarEvents = await fetchData();
      console.log(calendarEvents);
      if (calendarEvents) {
        if (calendarEvents.error) {
          console.log("User not authenticated");
          handleSignOut();
          return;
        } else if (calendarEvents.items.length === 0) {
          setloaded(true);
          return;
        }

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
            setUserEvents((prevEvents) => [...prevEvents, newEvent]);
            setloaded(true);
          }
        });
      }
    };
    getCalendarData();
  }, []);

  return (
    <MainContent>
      <Clock />
      <WeatherSummary />
      <ShowMoreButton onClick={handleMoreClick}>
        {showMore ? "Less" : "More"}
      </ShowMoreButton>
      <Weather showMore={showMore} />
      {loaded && (
        <Meetings showMore={showMore} loaded={loaded} userEvents={userEvents} />
      )}
    </MainContent>
  );
};

export default HomePage;
