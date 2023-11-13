import React, { Suspense, useEffect, useState } from "react";
import { MainContent } from "./HomeStyles";
import Clock from "../clock/Clock";
import Weather from "../weather/Weather";
import Meetings from "../meetings/Meetings";
import AudioButton from "../audioButton/AudioButton";
import WeatherSummary from "../weather/WeatherSummary";
import ShowMoreButton from "../showMoreButton/ShowMore";
import useFetch from "../hooks/useFetch";

const HomePage = () => {
  const [showMore, setShowMore] = useState(false);
  const { loaded, userEvents } = useFetch();

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <MainContent>
      <Clock />
      <WeatherSummary />
      {loaded && (
        <>
          <AudioButton />
          <ShowMoreButton showMore={showMore} handleClick={handleMoreClick} />
        </>
      )}
      <Weather showMore={showMore} />
      {loaded && userEvents && (
        <Meetings showMore={showMore} userEvents={userEvents} />
      )}
    </MainContent>
  );
};

export default HomePage;
