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
export const Button = styled.button`
  border: initial;
  background-color: var(--primary-colour);
  padding: initial;
  margin: initial;
  outline: initial;
  cursor: pointer;
  color: ${(props) => props.color || "white"};
`;
