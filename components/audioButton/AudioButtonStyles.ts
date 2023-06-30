import styled from "styled-components";
import { Button } from "@/styles/shared/globalStyles";

export const SummaryButton = styled(Button)`
  margin-bottom: 2.5rem;
  font-size: 3rem;
  padding: 2.5rem 3rem;
  background-color: #ffb202;
  border-color: white;
  &:hover {
    color: #ffb202;
    background-color: white;
  }
`;
