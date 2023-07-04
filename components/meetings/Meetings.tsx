import React, { useEffect } from "react";
import { MeetingInformation, UserEvents } from "@/types/types";
import {
  MeetingHeading,
  MeetingItem,
  MeetingName,
  MeetingTime,
  MeetingsContainer,
} from "./MeetingsStyles";
import { useDispatch } from "react-redux";
import { updateMeetings } from "@/store/meetingsSlice";
import getContent from "../hooks/useGetContent";

const Meetings = ({ userEvents, loaded }: MeetingInformation) => {
  const dispatch = useDispatch();

  const getMeetings = () => {
    const content = getContent("#meetings-content");
    if (content !== null) {
      dispatch(updateMeetings(content));
    }
  };
  useEffect(() => {
    getMeetings();
  }, []);

  return (
    <MeetingsContainer id="meetings-content">
      <MeetingHeading>Tomorrows Schedule</MeetingHeading>
      {loaded &&
        (userEvents.length !== 0 ? (
          userEvents.map((event, index) => (
            <MeetingItem key={index}>
              <MeetingName>{event.name}</MeetingName>
              <span>-</span>
              <MeetingTime>{event.time}</MeetingTime>
            </MeetingItem>
          ))
        ) : (
          <MeetingItem>
            You have no events for tomorrow. Enjoy your day!
          </MeetingItem>
        ))}
    </MeetingsContainer>
  );
};

export default Meetings;
