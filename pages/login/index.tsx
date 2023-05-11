import styled from "styled-components";
import {
  Container,
  MainHeader,
  Wrapper,
  LoginButton,
} from "../../styles/LoginStyles";
import LoginForm from "@/components/loginform/LoginForm";
import { signIn } from "next-auth/react";
import Head from "next/head";

type LoginPageInformation = { loginButtonHandler: () => void };

const LoginPage = ({ loginButtonHandler }: LoginPageInformation) => {
  return (
    <>
      <Head>
        <title>Ready For Tomorrow | Login</title>
      </Head>
      <Container>
        <Wrapper>
          <MainHeader>Login</MainHeader>
          {/* <LoginForm loginButtonHandler={loginButtonHandler}></LoginForm> */}
          <LoginButton onClick={() => signIn("google", { callbackUrl: "/" })}>
            Sign in with google
          </LoginButton>
        </Wrapper>
      </Container>
    </>
  );
};

export default LoginPage;
