import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.5rem;
  @media (max-width: 500px) {
    display: none;
  }
`;
export const Heading = styled.h2`
  font-size: 1.5rem;
`;

export const Icon = styled.i`
  font-size: 1.5rem;
  border-radius: 5rem;
  padding: 0 0.5rem;
  background: linear-gradient(to top left, #91c4e1, #7056b3);
`;
