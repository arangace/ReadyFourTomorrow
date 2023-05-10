import styled from "styled-components";
import { FlexColumn, Button, Flex } from "@/styles/shared/globalStyles";

export const ClockContainer = styled(FlexColumn)`
  text-align: center;
`;
export const ClockItem = styled(Flex)`
  font-size: 7.5rem;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const ClockSetting = styled.span`
  font-size: 2.5rem;
  align-self: flex-end;
  padding-left: 1rem;
  padding-bottom: 1.75rem;
`;
