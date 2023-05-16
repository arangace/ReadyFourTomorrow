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

export const Button = styled.button`
  border: initial;
  background-color: var(--primary-colour);
  color: var(--text-colour);
  border: 2px solid var(--primary-colour);
  padding: initial;
  margin: initial;
  outline: initial;
  cursor: pointer;
  padding: 0.5rem 1rem 0.5rem 1rem;
  color: ${(props) => props.color || "white"};
  &:hover {
    color: var(--primary-colour);
    background-color: var(--text-colour);
  }
`;
export const ButtonInverted = styled.button`
  border: initial;
  background-color: white;
  padding: initial;
  margin: initial;
  outline: initial;
  cursor: pointer;
  padding: 0.5rem 1rem 0.5rem 1rem;
  color: var(--primary-colour);
  border: 2px solid white;
  &:hover {
    color: var(--text-colour);
    background-color: var(--primary-colour);
  }
`;
export const Card = styled.section`
  color: black;
  background-color: white;
  padding: 2.5rem;
  border-radius: 1rem;
`;
