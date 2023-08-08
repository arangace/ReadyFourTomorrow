import React from "react";
import { NavContainer, User } from "./NavbarStyles";
import { signOut, useSession } from "next-auth/react";
import { SignOutButton } from "./NavbarStyles";
const Navbar = () => {
  const { data: session, status } = useSession();
  console.log(session);
  console.log(session?.user?.name);
  return (
    <NavContainer>
      {status === "authenticated" && (
        <>
          <User></User>
          <SignOutButton onClick={() => signOut({ callbackUrl: "/home" })}>
            Sign out
          </SignOutButton>
        </>
      )}
    </NavContainer>
  );
};

export default Navbar;
