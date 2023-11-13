import React, { useEffect } from "react";
import { UserEvents } from "@/types/types";
import {
  MeetingHeading,
  MeetingItem,
  MeetingName,
  MeetingTime,
  MeetingsContainer,
} from "./MeetingsStyles";
import { useDispatch } from "react-redux";
import { updateMeetings } from "@/store/meetingsSlice";
import useFetch from "../hooks/useFetch";

type MeetingInformation = {
  userEvents: UserEvents;
  showMore?: boolean;
};

const Meetings = ({ userEvents, showMore }: MeetingInformation) => {
  const dispatch = useDispatch();
  const { loaded } = useFetch();

  const meetingsConstructor = () => {
    let content = "Tomorrows Schedule. ";
    userEvents.map((event) => (content += `${event.name} at ${event.time},`));
    if (content !== null) {
      dispatch(updateMeetings(content));
    }
  };

  useEffect(() => {
    meetingsConstructor();
  }, []);

  return (
    <>
      {showMore && (
        <MeetingsContainer id="meetings-content">
          <MeetingHeading>Tomorrows Schedule</MeetingHeading>
          {loaded &&
            (userEvents.length !== 0 ? (
              userEvents.map((event, index) => (
                <MeetingItem key={index}>
                  <MeetingName>{event.name}</MeetingName>
                  <MeetingTime>{event.time}</MeetingTime>
                </MeetingItem>
              ))
            ) : (
              <MeetingItem>
                You have no events for tomorrow. Enjoy your day!
              </MeetingItem>
            ))}
        </MeetingsContainer>
      )}
    </>
  );
};

export default Meetings;
