import styled from "styled-components";
import { FlexColumn, Button, Flex, Card } from "@/styles/shared/globalStyles";

export const MeetingsContainer = styled.section`
  margin-top: 0.5rem;
`;
export const MeetingHeading = styled.h2`
  margin: 0;
  padding-bottom: 1rem;
  text-align: center;
`;
export const MeetingItem = styled(Card)`
  display: flex;
  font-size: 2rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  text-align: center;
`;
export const MeetingName = styled.span`
  padding-right: 1rem;
`;
export const MeetingTime = styled.span`
  padding-left: 1rem;
  white-space: nowrap;
`;
