import styled from "styled-components";
import { Button } from "@/styles/shared/globalStyles";

export const SummaryButton = styled(Button)`
  background-color: #ffb202;
  border-color: white;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  gap: 0.5rem;
  &:hover {
    color: #ffb202;
    background-color: white;
  }
`;
export const AudioIcon = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
`;
export const PauseIcon = styled(AudioIcon)``;
export const SpeakerIcon = styled(AudioIcon)``;
