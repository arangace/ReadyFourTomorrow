import styled from "styled-components";
import {
  FlexColumn,
  Button,
  Flex,
  ButtonInverted,
} from "@/styles/shared/globalStyles";

export const MainContent = styled(FlexColumn)`
  padding: 2.5rem;
`;
export const SignOutButton = styled(ButtonInverted)`
  color: var(--primary-colour);
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
`;
