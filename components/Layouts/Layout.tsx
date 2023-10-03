import { ReactNode } from "react";
import NavBar from "../navbar/Navbar";
import Head from "next/head";
import { Layout } from "@/types/types";
import FooterComponent from "../footer/Footer";

export default function Layout({ children }: Layout) {
  return (
    <>
      <Head>
        <title>Ready Four Tomorrow</title>
      </Head>
      <NavBar />
      {children}
      <FooterComponent />
    </>
  );
}
