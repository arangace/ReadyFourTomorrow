import { Button } from "@/styles/shared/globalStyles";
import styled, { AnyStyledComponent } from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const SignOutButton = styled(Button)`
  padding: 0.75rem;
  font-size: 1.25rem;
`;
export const LogoContainer: AnyStyledComponent = styled.a`
  filter: brightness(0.75);
  transition: 0.3s;
  &:hover {
    filter: brightness(1);
  }
`;
