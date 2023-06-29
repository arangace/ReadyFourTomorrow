import React from "react";
import { NavContainer } from "./NavbarStyles";
import { signOut, useSession } from "next-auth/react";
import { SignOutButton } from "./NavbarStyles";
const Navbar = () => {
  const { data, status } = useSession();

  return (
    <NavContainer>
      {status === "authenticated" && (
        <SignOutButton onClick={() => signOut({ callbackUrl: "/home" })}>
          Sign out
        </SignOutButton>
      )}
    </NavContainer>
  );
};

export default Navbar;
