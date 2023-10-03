import { ButtonInverted } from "@/styles/shared/globalStyles";
import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const SignOutButton = styled(ButtonInverted)`
  color: var(--primary-colour);
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
`;
export const User = styled.h2``;
