import React, { useEffect, useState } from "react";
import { ClockContainer, ClockItem, ClockSetting } from "./ClockStyles";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const hours = time.getHours() % 12 || 12;
  const minutes = time.getMinutes();
  const amPm = time.getHours() >= 12 ? "PM" : "AM";
  return (
    <ClockContainer>
      <ClockItem>
        {hours}:{minutes < 10 ? "0" + minutes : minutes}
        <ClockSetting>{amPm}</ClockSetting>
      </ClockItem>
    </ClockContainer>
  );
};

export default Clock;
