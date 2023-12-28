import React from "react";
import { Container, Header, UserActionPrompt } from "@/styles/HomeStyles";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { HeroHeader } from "@/components/homeComponents/HeroHeader/HeroHeader";
import { CTA } from "@/components/homeComponents/CTA/CTA";

const Home = () => {
  return (
    <Container>
      <Header>Welcome to Ready Four Tomorrow</Header>
      <HeroHeader />

      <CTA />
    </Container>
  );
};

export default Home;
