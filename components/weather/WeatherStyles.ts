import styled from "styled-components";
import { Card, FlexColumn } from "@/styles/shared/globalStyles";

export const WeatherContainer = styled(FlexColumn)`
  padding-bottom: 2.5rem;
`;
export const Summary = styled(FlexColumn)`
  margin-bottom: 2.5rem;
  font-size: 1.5rem;
`;
export const Forecast = styled(Card)`
  * {
    text-align: left;
  }
`;
export const Temperature = styled.h2`
  font-size: 3rem;
  margin-bottom: 0;
`;
export const WeatherCondition = styled.h3`
  margin-top: 0.5rem;
  font-size: 2rem;
`;
export const WeatherForecastInformation = styled.p`
  font-size: 1.5rem;
`;
