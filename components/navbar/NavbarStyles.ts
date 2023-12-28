import { Button } from "@/styles/shared/globalStyles";
import { ReactNode } from "react";
import styled, { StyledComponent } from "styled-components";

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
export const LogoContainer: StyledComponent<
  string,
  any,
  { href: string; children: ReactNode },
  never
> = styled.a`
  filter: brightness(0.75);
  transition: 0.3s;
  &:hover {
    filter: brightness(1);
  }
`;
