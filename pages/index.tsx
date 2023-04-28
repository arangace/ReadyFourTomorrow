import Head from "next/head";
import HomePage from "../components/HomePage";
import LoginPage from "../components/loginPage/LoginPage";
import { Suspense, useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const { data, status } = useSession();
  // if (status === "loading") return <h1> loading... please wait</h1>;

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
        <div>
          {data && <h1> hi {data.user?.name}</h1>}
          <button onClick={() => signOut()}>sign out</button>;
          <HomePage />
        </div>
      ) : (
        <LoginPage loginButtonHandler={loginHandler} />
      )}
    </>
  );
}
