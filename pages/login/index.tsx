import styled from "styled-components";
import { Container, MainHeader, Wrapper, LoginButton } from "./LoginStyles";
// import LoginForm from "../loginForm/LoginForm";
import { signIn } from "next-auth/react";
type LoginPageInformation = { loginButtonHandler: () => void };

const LoginPage = ({ loginButtonHandler }: LoginPageInformation) => {
  return (
    <Container>
      <Wrapper>
        <MainHeader>Login</MainHeader>
        {/* <LoginForm loginButtonHandler={loginButtonHandler}></LoginForm> */}
        <LoginButton onClick={() => signIn("google", { callbackUrl: "/" })}>
          Sign in with gooogle
        </LoginButton>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
