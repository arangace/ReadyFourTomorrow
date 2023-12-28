import { Button } from "@/styles/shared/globalStyles";
import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const SignOutButton = styled(Button)`
  padding: 0.75rem;
  font-size: 1.25rem;
  @media (max-width: 500px) {
    display: none;
  }
`;
export const LogoContainer = styled.a`
  filter: brightness(0.75);
  transition: 0.3s;
  &:hover {
    filter: brightness(1);
  }
`;
