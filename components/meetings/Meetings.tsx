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

const Meetings = ({ userEvents, loaded, showMore }: MeetingInformation) => {
  const dispatch = useDispatch();

  const getMeetings = () => {
    let content = "Tomorrows Schedule. ";
    userEvents.map((event) => (content += `${event.name} at ${event.time},`));
    console.log(userEvents);
    console.log(content);
    if (content !== null) {
      dispatch(updateMeetings(content));
    }
  };
  useEffect(() => {
    console.log("MEETINGS", userEvents);
    getMeetings();
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
