import { ReactNode } from "react";
import NavBar from "./navbar/Navbar";

type Layout = {
  children: ReactNode;
};

export default function Layout({ children }: Layout) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
