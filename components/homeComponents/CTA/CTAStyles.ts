import styled from "styled-components";
import { HomeCard } from "@/styles/HomeStyles";

export const DescriptionContainer = styled(HomeCard)`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr;
  gap: 50px;
  @media (max-width: 919px) {
    grid-template-columns: 1fr;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  grid-row: 1;
`;
export const DescrptionHeader = styled.h2`
  text-align: left;
  margin-top: 0;
`;

export const DescrptionText = styled(HomeCard)`
  padding-top: 0;
  text-align: left;
  font-size: 1rem;
  @media (max-width: 919px) {
    padding-bottom: 0;
  }
`;
export const ImageContainer = styled.div`
  grid-column: 2;
  margin: 0 2rem;
  img {
    object-fit: cover;
    width: 100%;
  }
  @media (max-width: 919px) {
    grid-column: 1;
    margin: 0;
  }
`;
