import React from "react";
import { UserEvents } from "@/types/types";
import {
  MeetingHeading,
  MeetingItem,
  MeetingName,
  MeetingTime,
  MeetingsContainer,
} from "./MeetingsStyles";

type Meetings = {
  userEvents: UserEvents;
  loaded: boolean;
};

const Meetings = ({ userEvents, loaded }: Meetings) => {
  return (
    <MeetingsContainer>
      <MeetingHeading>Meetings</MeetingHeading>
      {loaded &&
        (userEvents.length !== 0
          ? userEvents.map((event, index) => (
              <MeetingItem key={index}>
                <MeetingName>{event.name}</MeetingName>
                <MeetingTime>{event.time}</MeetingTime>
              </MeetingItem>
            ))
          : "You have no events for tomorrow! Enjoy your day.")}
    </MeetingsContainer>
  );
};

export default Meetings;
