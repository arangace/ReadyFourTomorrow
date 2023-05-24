import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
`;
export const FooterContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
  gap: 2.5rem;
`;
export const FooterItem = styled.li`
  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`;
