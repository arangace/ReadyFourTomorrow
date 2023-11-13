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
export const SecondaryHeader = styled.h2`
  margin-top: 0;
  font-size: 2rem;
  font-weight: normal;
  filter: brightness(0.85);
  font-style: italic;
  grid-row: 2;
`;

export const LoginPromptButton = styled.button`
  border: initial;
  color: var(--text-colour);
  border: 2px solid #30bfbf;
  border-radius: 1rem;
  padding: initial;
  margin: initial;
  outline: initial;
  cursor: pointer;
  font-size: 1.75rem;
  padding: 1rem 1.5rem;
  background-color: #30bfbf;
  grid-row: 4;

  &:hover {
    color: #30bfbf;
    background-color: white;
    border: 2px solid #30bfbf;
  }
`;
export const Description = styled.section`
  grid-row: 3;
  text-align: center;
  @media (min-width: 414px) {
    text-align: left;
  }
`;
export const DescrptionText = styled.p`
  text-align: left;
`;
export const UserActionPrompt = styled.p`
  text-align: inherit;
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
`;
export const DashboardButton = styled(ButtonInverted)`
  margin-top: 1rem;
  display: flex;
  grid-row: 4;
`;
