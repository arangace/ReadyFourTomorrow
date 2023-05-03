import React, { useEffect, useState } from "react";
import styled, { CSSProperties, Keyframes } from "styled-components";
import { Flex } from "@/shared/globalStyles";
import { getSession, signOut, useSession } from "next-auth/react";
import { MainContent, SignOutButton } from "./HomeStyles";
import fetchData from "../hooks/useFetch";
import { CalendarItem } from "@/types/types";

type UserEvents = {
  name: string;
  time: string;
}[];
const HomePage = () => {
  const { data, status } = useSession();
  const [userEvents, setUserEvents] = useState<UserEvents>([]);

  useEffect(() => {
    const getCalendarData = async () => {
      const calendarEvents = await fetchData();
      console.log(calendarEvents);
      if (calendarEvents) {
        calendarEvents.items.map((event) => {
          console.log(event.summary);
          console.log(event.start.dateTime);
          let time = new Date(event.start.dateTime);
          let hours = time.getHours();
          let minutes = time.getMinutes().toString();
          if (minutes.length !== 2) {
            minutes = "0" + minutes;
          }
          if (hours) {
            hours = hours - 12;
          }
          let startTime = `${hours}:${minutes}`;
          let newEvent = { name: event.summary, time: startTime };
          setUserEvents((prevEvents) => [...prevEvents, newEvent]);
        });
      }
    };
    getCalendarData();
  }, []);

  return (
    <MainContent>
      {data && <h1>Hi {data.user?.name}, are you Ready For Tomorrow?</h1>}
      {userEvents.map((event, index) => (
        <>
          <div key={index}>
            {event.name} {event.time}
          </div>
        </>
      ))}
      <SignOutButton onClick={() => signOut()}>sign out</SignOutButton>;
    </MainContent>
  );
};

export default HomePage;
