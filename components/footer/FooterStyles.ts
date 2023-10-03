import styled from "styled-components";

export const Footer = styled.footer`
  padding: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-end;
  margin-top: auto;
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
