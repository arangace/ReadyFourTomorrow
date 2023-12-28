import React from "react";
import { LogoContainer, NavContainer } from "./NavbarStyles";
import { signOut, useSession } from "next-auth/react";
import { SignOutButton } from "./NavbarStyles";
import User from "../User/User";
import Image from "next/image";
const Navbar = () => {
  const { data: session, status } = useSession();
  return (
    <NavContainer>
      <LogoContainer href="/home">
        <Image
          alt="R4T logo"
          src="/images/R4T-logo.png"
          width="50"
          height="50"
        />
      </LogoContainer>
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
