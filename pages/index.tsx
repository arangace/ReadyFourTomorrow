import Head from "next/head";
import HomePage from "../components/homePage/HomePage";
import LoginPage from "./login";
import { Suspense, useEffect, useState } from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { UserActionPrompt } from "@/styles/shared/globalStyles";
import Home from "./home";
import { Session } from "next-auth";
import getTime from "@/components/hooks/useGetTime";
import { CalendarItem, UserEvents } from "@/types/types";
import { MainContent } from "@/styles/HomeStyles";
import Clock from "@/components/clock/Clock";
import Meetings from "@/components/meetings/Meetings";
import Weather from "@/components/weather/Weather";
import fetchData from "@/components/hooks/useFetch";
interface UserSession extends Session {
  accessToken: string;
}
export default function Index({
  loaded,
  userEvents,
}: {
  loaded: boolean;
  userEvents: UserEvents;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const loginHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const { data, status } = useSession();
  console.log(status);
  if (status === "unauthenticated") {
    signOut({ callbackUrl: "/home" });
  }

  return (
    <>
      <Head>
        <title>Ready Four Tomorrow</title>
        <meta
          name="description"
          content="An app designed to help you be ready for tomorrow, telling you what you have scheduled for the next day"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7056b3" />
      </Head>
      {status === "authenticated" ? (
        <Suspense fallback={<UserActionPrompt>Loading...</UserActionPrompt>}>
          <HomePage />
        </Suspense>
      ) : (
        <Home />
      )}
    </>
  );
}
