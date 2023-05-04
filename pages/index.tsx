import Head from "next/head";
import HomePage from "../components/homePage/HomePage";
import { Suspense, useEffect, useState } from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    // User is not authenticated, redirect to login page
    router.push("/");
  } else if (status === "unauthenticated") {
    router.push("/login");
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
      </Head>
      {status === "authenticated" ? (
        <Suspense fallback={<div>Loading...</div>}>
          <HomePage />
        </Suspense>
      ) : null}
    </>
  );
}
