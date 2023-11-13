import Head from "next/head";
import HomePage from "../components/homePage/HomePage";
import { Suspense } from "react";
import { useSession, signOut } from "next-auth/react";
import { UserActionPrompt } from "@/styles/shared/globalStyles";

export default function Index() {
  const { status } = useSession();
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
      <Suspense fallback={<UserActionPrompt>Loading...</UserActionPrompt>}>
        {status === "authenticated" && <HomePage />}
      </Suspense>
    </>
  );
}
