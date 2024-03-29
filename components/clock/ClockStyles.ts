import styled from "styled-components";
import { FlexColumn, Button, Flex } from "@/styles/shared/globalStyles";

export const ClockContainer = styled(FlexColumn)`
  text-align: center;
`;
export const ClockItem = styled(Flex)`
  font-size: 7.5rem;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 1rem;
  @media (max-width: 414px) {
    font-size: 5rem;
  }
`;
export const ClockSetting = styled.span`
  font-size: 2.5rem;
  align-self: flex-end;
  padding-left: 2rem;
  padding-bottom: 1.75rem;
`;
