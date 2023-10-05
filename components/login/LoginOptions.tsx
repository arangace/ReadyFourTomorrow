import React from "react";
import { Container, Icon, LoginButton } from "./LoginOptionsStyles";
import { signIn } from "next-auth/react";

const LoginOptions = () => {
  return (
    <Container>
      <LoginButton
        type="button"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        <Icon className="fa-brands fa-google"></Icon>
        Sign in
      </LoginButton>
      <LoginButton
        type="button"
        onClick={() =>
          signIn("google", { callbackUrl: "/" }, { prompt: "login" })
        }
      >
        <Icon className="fa-brands fa-google"></Icon>
        Sign in with another account
      </LoginButton>
    </Container>
  );
};

export default LoginOptions;
