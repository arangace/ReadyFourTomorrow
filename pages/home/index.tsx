import React from "react";
import {
  Container,
  DashboardButton,
  Description,
  Header,
  LoginPromptButton,
  SecondaryHeader,
  UserActionPrompt,
} from "@/styles/HomeStyles";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Home = () => {
  const router = useRouter();
  const { data, status } = useSession();
  return (
    <Container>
      <Header>Welcome to Ready Four Tomorrow</Header>
      <SecondaryHeader>
        Getting you ready for tomorrow all in one place
      </SecondaryHeader>
      <Description>
        <span>
          A simple application which provides a summary of your day ahead at the
          click of a button. Making sure you&apos;re prepared for the day ahead!
          Click the &quot;SUMMARY&quot; button for a spoken summary of your day
        </span>
        {status === "unauthenticated" ? (
          <>
            <UserActionPrompt>
              User is not logged in, to get started click
            </UserActionPrompt>
            <LoginPromptButton
              type="button"
              onClick={() => router.push("/login")}
            >
              Login
            </LoginPromptButton>
          </>
        ) : (
          <DashboardButton onClick={() => router.push("/")} type="button">
            Go to your dashboard
          </DashboardButton>
        )}
      </Description>
    </Container>
  );
};

export default Home;
