import styled from "styled-components";
import { Button, FlexColumn } from "./shared/globalStyles";
export const Container = styled(FlexColumn)`
  align-items: baseline;
  margin-left: 5rem;
  margin-right: 5rem;
`;
export const Header = styled.h1`
  margin-bottom: 0;
`;
export const SecondaryHeader = styled.h2`
  margin-top: 0;
  font-size: 2rem;
  font-weight: normal;
  filter: brightness(0.85);
  font-style: italic;
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
  &:hover {
    color: #30bfbf;
    background-color: white;
    border: 2px solid #30bfbf;
  }
`;
export const Description = styled.section``;
export const UserActionPrompt = styled.p`
  text-align: inherit;
  font-size: 2rem;
  font-weight: bold;
`;
