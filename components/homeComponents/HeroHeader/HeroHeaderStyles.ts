import { HomeCard } from "@/styles/HomeStyles";
import { Button, ButtonInverted } from "@/styles/shared/globalStyles";
import styled, { AnyStyledComponent } from "styled-components";

export const Header = styled.h2`
  margin-top: 0;
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  grid-column: 1;
  grid-row: 1;
`;
export const HeroContainer = styled(HomeCard)`
  display: grid;
  justify-content: flex-start;
  align-items: flex-start;
  grid-template-rows: 1fr;
  grid-template-columns: 70% 30%;
  column-gap: 50px;
  row-gap: 0;
  @media (max-width: 919px) {
    grid-template-columns: 1fr;
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeroSecondary = styled.div`
  grid-column: 1;
  grid-row: 1;
  padding-bottom: 30px;
`;
export const Description = styled.section`
  grid-row: 3;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  flex-direction: column;

  @media (min-width: 414px) {
    text-align: left;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;
export const LoginPromptButton = styled(Button)`
  color: var(--text-colour);
  border: 2px solid #30bfbf;
  font-size: 1.5rem;
  background-color: #30bfbf;
  transition: 0.3s;

  &:hover {
    color: #30bfbf;
    background-color: white;
    border: 2px solid #30bfbf;
  }
`;
export const DashboardButton = styled(ButtonInverted)`
  border-radius: 0;
  transition: 0.3s;
  font-size: 1.5rem;
`;
export const LearnMoreButton: AnyStyledComponent = styled.a`
  border-radius: 0;
  font-size: 1.5rem;
  transition: 0.3s;
  i {
    padding-left: 10px;
  }
  &:hover {
    text-decoration: underline;
  }
`;
