import { ButtonProps } from "@/types/types";
import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const UserActionPrompt = styled.h2`
  color: var(--primary-colour);
  background-color: white;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  margin: 0.5rem 2.5rem 0.5rem 2.5rem;
`;

export const Button: ButtonProps = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-colour);
  color: var(--text-colour);
  border: 2px solid var(--primary-colour);
  border-radius: 1rem;
  padding: initial;
  margin: initial;
  outline: initial;
  cursor: pointer;
  padding: 0.5rem 1rem;
  color: ${(props: any) => props.color || "white"};
  &:hover {
    color: var(--primary-colour);
    background-color: var(--text-colour);
  }
  &:focus-visible {
    color: var(--primary-colour);
    background-color: var(--text-colour);
  }
`;
export const ButtonInverted: ButtonProps = styled.button`
  background-color: white;
  padding: initial;
  margin: initial;
  outline: initial;
  cursor: pointer;
  padding: 0.5rem 1rem 0.5rem 1rem;
  color: var(--primary-colour);
  border: 2px solid white;
  border-radius: 2.5rem;
  &:hover {
    color: var(--text-colour);
    background-color: var(--primary-colour);
  }
`;
export const ActionButton = styled(Button)`
  font-size: 2.5rem;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  gap: 1.5rem;
`;
export const Card = styled.section`
  color: black;
  background-color: white;
  padding: 2.5rem;
  border-radius: 1rem;
  @media (max-width: 414px) {
    margin: 1rem 2rem;
    padding: 1rem;
  }
`;
