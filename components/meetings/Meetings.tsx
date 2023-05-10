import React from "react";
import { UserEvents } from "@/types/types";
import { MeetingsContainer } from "./MeetingsStyles";

type Meetings = {
  userEvents: UserEvents;
  loaded: boolean;
};

const Meetings = ({ userEvents, loaded }: Meetings) => {
  return (
    <MeetingsContainer>
      <h2>Meetings</h2>
      {loaded &&
        (userEvents.length !== 0
          ? userEvents.map((event, index) => (
              <span key={index}>
                {event.name} {event.time}
              </span>
            ))
          : "You have no events for tomorrow! Enjoy your day.")}
    </MeetingsContainer>
  );
};

export default Meetings;
