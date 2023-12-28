import styled, { StyledComponent } from "styled-components";
import { ActionButton, Button } from "@/styles/shared/globalStyles";

export const SummaryButton = styled(ActionButton)`
  background-color: var(--secondary-colour);
  border-color: var(--secondary-colour);
  margin-bottom: 1rem;
  &:hover {
    color: #ffb202;
    background-color: white;
  }
`;
export const AudioIcon: StyledComponent<
  string,
  any,
  { className: string },
  never
> = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
`;
export const PauseIcon = styled(AudioIcon)``;
export const SpeakerIcon = styled(AudioIcon)``;
