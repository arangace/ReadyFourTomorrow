import React, { useEffect, useState } from "react";
import styled, { CSSProperties, Keyframes } from "styled-components";
import { Flex } from "@/shared/globalStyles";
import useFetch from "./hooks/useFetch";
import { getSession, useSession } from "next-auth/react";

const MainContent = styled(Flex)`
  outline: 10px solid red;
  padding: 2.5rem;
  margin: 0.5rem;
`;
type Time = {
  startTime: string;
  endTime: string;
};
const HomePage = () => {
  const { data, status } = useSession();
  const [currentUser, setCurrentUser] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const session = await getSession();
      setCurrentUser(session);
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
      console.log(fetchedData);
      console.log(session);
      console.log(session.accessToken);
    };
    fetchData();
  }, []);
  // const { fetchData as Data } = await useFetch("https://pokeapi.co/api/v2/pokemon/ditto");
  // console.log(fetchData);
  // console.log(currentUser);
  const getTime = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();
    const tomorrowDate = new Date(
      currentDate.getTime() + 24 * 60 * 60 * 1000
    ).toISOString();
    return {
      startTime: formattedDate,
      endTime: tomorrowDate,
    };
  };
  return (
    <MainContent>
      <h1>Ready For Tomorrow</h1>
    </MainContent>
  );
};

export default HomePage;
