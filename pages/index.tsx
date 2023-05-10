import Head from "next/head";
import HomePage from "../components/homePage/HomePage";
import LoginPage from "./login";
import { Suspense, useEffect, useState } from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { UserActionPrompt } from "@/styles/shared/globalStyles";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const loginHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const { data, status } = useSession();
  console.log(status);
  if (status === "unauthenticated") {
    signOut({ callbackUrl: "/login" });
  }

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
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7056b3" />
      </Head>
      {status === "authenticated" ? (
        <Suspense fallback={<UserActionPrompt>Loading...</UserActionPrompt>}>
          <HomePage />
        </Suspense>
      ) : (
        <UserActionPrompt>User not logged in, redirecting..</UserActionPrompt>
      )}
    </>
  );
}
