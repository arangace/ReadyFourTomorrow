import Head from "next/head";
import styled, { CSSProperties, Keyframes } from "styled-components";
import { Flex } from "@/shared/flex";

const MainContent = styled(Flex)`
  outline: 10px solid red;
  padding: 2.5rem;
  margin: 0.5rem;
`;
export default function Home() {
  return (
    <>
      <Head>
        <title>Ready For Tomorrow</title>
        <meta
          name="description"
          content="An app designed to help you be ready for tomorrow, telling you what you have scheduled for the next day"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent>
        <h1>Ready For Tomorrow</h1>
      </MainContent>
    </>
  );
}
