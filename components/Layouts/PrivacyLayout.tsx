import { ReactNode } from "react";
import Head from "next/head";
import { Layout } from "@/types/types";
import FooterComponent from "../footer/Footer";

export default function PrivacyLayout({ children }: Layout) {
  return (
    <>
      <Head>
        <title>Ready Four Tomorrow | Privacy Policy</title>
      </Head>
      <main>{children}</main>
      <FooterComponent />
    </>
  );
}
