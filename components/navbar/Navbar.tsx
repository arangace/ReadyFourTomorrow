import React from "react";
import { NavContainer } from "./NavbarStyles";
import { signOut } from "next-auth/react";
import { SignOutButton } from "../homePage/HomeStyles";

const Navbar = () => {
  return (
    <NavContainer>
      NavBar
      <SignOutButton onClick={() => signOut({ callbackUrl: "/login" })}>
        sign out
      </SignOutButton>
    </NavContainer>
  );
};

export default Navbar;
