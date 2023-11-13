import { Button, FlexColumn } from "@/styles/shared/globalStyles";
import styled from "styled-components";

export const Container = styled(FlexColumn)`
  justify-content: flex-start;
  align-items: stretch;
  gap: 0.5rem;
`;

export const LoginButton = styled(Button)`
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  text-align: left;
  &:hover {
    i {
      color: var(--primary-color);
    }
  }
`;
export const Icon = styled.i`
  color: white;
`;
