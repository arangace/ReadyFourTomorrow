import { ReactNode } from "react";
import NavBar from "./navbar/Navbar";
import Head from "next/head";
type Layout = {
  children: ReactNode;
};

export default function Layout({ children }: Layout) {
  return (
    <>
      <Head>
        <title>Ready Four Tomorrow</title>
      </Head>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
