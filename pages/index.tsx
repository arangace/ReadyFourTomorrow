import Head from "next/head";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage/LoginPage";
import { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };
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
      {isLoggedIn ? (
        <HomePage />
      ) : (
        <LoginPage loginButtonHandler={loginHandler} />
      )}
    </>
  );
}
