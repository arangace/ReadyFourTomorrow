import React from "react";
import {
  HeroContainer,
  Header,
  HeroSecondary,
  HeaderContainer,
  Description,
  LoginPromptButton,
  DashboardButton,
  LearnMoreButton,
} from "./HeroHeaderStyles";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export const HeroHeader = () => {
  const router = useRouter();
  const { data, status } = useSession();
  return (
    <HeroContainer>
      <HeaderContainer>
        <Header>Getting you ready for tomorrow, all in one place</Header>
        <HeroSecondary>
          Get real-time weather updates and manage your daily meetings
          effortlessly.
        </HeroSecondary>
        <Description>
          <LearnMoreButton
            target="__blank"
            href="https://github.com/arangace/ReadyFourTomorrow"
          >
            Learn More<i className="fas fa-external-link"></i>
          </LearnMoreButton>
          {status === "unauthenticated" ? (
            <LoginPromptButton
              type="button"
              onClick={() => router.push("/login")}
            >
              Login
            </LoginPromptButton>
          ) : (
            <DashboardButton onClick={() => router.push("/")} type="button">
              Go to your dashboard
            </DashboardButton>
          )}
        </Description>
      </HeaderContainer>
    </HeroContainer>
  );
};
