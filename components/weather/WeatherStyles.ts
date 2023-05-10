import styled from "styled-components";
import { FlexColumn } from "@/styles/shared/globalStyles";

export const WeatherContainer = styled(FlexColumn)`
  padding: 2rem;
  border: 1px solid red;
`;
export const SummaryContainer = styled(FlexColumn)`
  padding: 0 2.5rem 0 2.5rem;
  margin-bottom: 2.5rem;
  font-size: 1.5rem;
`;
export const Forecast = styled.section`
  color: black;
  background-color: white;
  padding: 2.5rem;
  border-radius: 1rem;
`;
export const WeatherPrompt = styled.h2`
  color: var(--primary-colour);
  background-color: white;
  border-radius: 1rem;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  text-align: center;
`;
