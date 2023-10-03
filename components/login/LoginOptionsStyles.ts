import { Button, FlexColumn } from "@/styles/shared/globalStyles";
import styled from "styled-components";

export const LoginButton = styled(Button)`
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;
  &:hover {
    i {
      color: var(--primary-color);
    }
  }
`;
export const Icon = styled.i`
  color: white;
`;
export const Container = styled(FlexColumn)`
  align-items: stretch;
  gap: 0.5rem;
`;
