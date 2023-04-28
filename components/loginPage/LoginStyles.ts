import styled from "styled-components";
import { FlexColumn, Button, Flex } from "@/shared/globalStyles";
export const Container = styled(Flex)`
  margin-top: 3rem;
`;
export const MainHeader = styled.h1`
  font-size: 3.5rem;
  color: var(--primary-colour);
`;

export const Wrapper = styled(FlexColumn)`
  border-radius: 1rem;
  background-color: white;
  padding: 2.5rem;
  margin: 2.5rem;
`;
export const LoginButton = styled(Button)`
  padding: 0.5rem;
  border-radius: 0.5rem;
`;
