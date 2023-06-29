import { ButtonInverted } from "@/styles/shared/globalStyles";
import styled from "styled-components";

export const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 2rem;
  padding-right: 2rem;
`;
export const SignOutButton = styled(ButtonInverted)`
  color: var(--primary-colour);
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
`;
