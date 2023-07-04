import styled from "styled-components";
import { Button } from "@/styles/shared/globalStyles";

export const SummaryButton = styled(Button)`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  align-items: center;
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
export const AudioIcon = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
`;
export const PauseIcon = styled(AudioIcon)``;
export const SpeakerIcon = styled(AudioIcon)``;
