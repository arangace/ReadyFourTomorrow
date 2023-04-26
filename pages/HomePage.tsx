import React from "react";
import styled, { CSSProperties, Keyframes } from "styled-components";
import { Flex } from "@/shared/flex";

const MainContent = styled(Flex)`
  outline: 10px solid red;
  padding: 2.5rem;
  margin: 0.5rem;
`;
const HomePage = () => {
  return (
    <MainContent>
      <h1>Ready For Tomorrow</h1>
    </MainContent>
  );
};

export default HomePage;
