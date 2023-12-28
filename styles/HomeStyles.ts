import styled from "styled-components";
import { Button, ButtonInverted, FlexColumn } from "./shared/globalStyles";
export const MainContent = styled(FlexColumn)`
  padding: 2.5rem;
`;
export const SignOutButton = styled(ButtonInverted)`
  color: var(--primary-colour);
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-rows: auto;
  justify-items: flex-start;
  align-items: center;
`;
export const Header = styled.h1`
  margin-bottom: 4rem;
  grid-row: 1;
`;

export const UserActionPrompt = styled.span`
  text-align: inherit;
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  @media (max-width: 414px) {
    text-align: center;
  }
`;

export const HomeCard = styled.div`
  padding: 100px 0;
`;
