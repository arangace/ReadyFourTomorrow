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
