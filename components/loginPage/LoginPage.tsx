import styled from "styled-components";
import { Container, MainHeader, Wrapper, LoginButton } from "./LoginStyles";
import LoginForm from "../loginForm/LoginForm";
import { signIn } from "next-auth/react";
import { Suspense } from "react";
type LoginPageInformation = { loginButtonHandler: () => void };

const LoginPage = ({ loginButtonHandler }: LoginPageInformation) => {
  return (
    <Suspense fallback={<div>I am loading..</div>}>
      <Container>
        <Wrapper>
          <MainHeader>Login</MainHeader>
          <LoginForm loginButtonHandler={loginButtonHandler}></LoginForm>
          <LoginButton onClick={() => signIn("google")}>
            Sign in with gooogle
          </LoginButton>
        </Wrapper>
      </Container>
    </Suspense>
  );
};

export default LoginPage;
