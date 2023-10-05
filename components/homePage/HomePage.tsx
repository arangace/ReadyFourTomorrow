import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { MainContent, ShowMoreButton } from "./HomeStyles";
import Clock from "../clock/Clock";
import Weather from "../weather/Weather";
import Meetings from "../meetings/Meetings";
import { UserEvents } from "@/types/types";
import AudioButton from "../audioButton/AudioButton";
import WeatherSummary from "../weather/WeatherSummary";
import getData from "../hooks/useGetData";

type Response = {
  response: {
    userEvents: Array<string>;
    loaded: boolean;
  };
};

const HomePage = () => {
  const { data, status } = useSession();
  const [userEvents, setUserEvents] = useState<UserEvents>([]);
  const [loaded, setloaded] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };
  const fetchData = async () => {
    const response = (await getData()) as any;
    setUserEvents(response.userEvents);
    setloaded(response.loaded);
  };
  useEffect(() => {
    console.log(data?.user?.name);
    console.log("done");
    fetchData();
  }, []);

  return (
    <MainContent>
      <Clock />
      <WeatherSummary />
      {loaded && <AudioButton />}
      <ShowMoreButton type="button" onClick={handleMoreClick}>
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
