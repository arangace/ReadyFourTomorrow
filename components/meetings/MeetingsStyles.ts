import styled from "styled-components";
import { FlexColumn, Button, Flex } from "@/styles/shared/globalStyles";

export const MeetingsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.5rem;
  background-color: white;
  color: black;
  border-radius: 1rem;
`;
export const MeetingHeading = styled.h2`
  margin-top: 1rem;
  margin-bottom: 0;
`;
export const MeetingItem = styled.section`
  padding: 1rem;
  display: flex;
`;
export const MeetingName = styled.span``;
export const MeetingTime = styled.span`
  padding-left: 1rem;
`;
