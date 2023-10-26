import React from "react";
import { NavContainer } from "./NavbarStyles";
import { signOut, useSession } from "next-auth/react";
import { SignOutButton } from "./NavbarStyles";
import User from "../User/User";
const Navbar = () => {
  const { data: session, status } = useSession();
  console.log(session);
  console.log(session?.user?.name);
  return (
    <NavContainer>
      {status === "authenticated" && (
        <>
          {session.user && <User user={session.user} />}
          <SignOutButton
            type="button"
            onClick={() => signOut({ callbackUrl: "/home" })}
          >
            Sign out
          </SignOutButton>
        </>
      )}
    </NavContainer>
  );
};

export default Navbar;
