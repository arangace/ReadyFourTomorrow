import styled from "styled-components";
import { FlexColumn, Button, Flex } from "@/styles/shared/globalStyles";
export const Container = styled(Flex)``;
export const MainHeader = styled.h1`
  font-size: 3.5rem;
  color: var(--primary-colour);
  margin-top: 0;
`;

export const Wrapper = styled(FlexColumn)`
  border-radius: 1rem;
  background-color: white;
  padding: 2.5rem;
  margin: 2.5rem;
  justify-content: space-around;
`;
