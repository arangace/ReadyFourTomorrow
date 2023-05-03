import Head from "next/head";
import HomePage from "../components/homePage/HomePage";
import LoginPage from "../components/loginPage/LoginPage";
import { Suspense, useEffect, useState } from "react";
import { useSession, signOut, getSession } from "next-auth/react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const { data, status } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      const session = await getSession();
      // console.log("session");
      // console.log(session);
    };
    fetchData();
  }, [data]);

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
      ) : (
        <LoginPage loginButtonHandler={loginHandler} />
      )}
    </>
  );
}
