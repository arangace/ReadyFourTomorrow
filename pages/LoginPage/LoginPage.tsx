import styled from "styled-components";
import { Container, MainHeader, Wrapper } from "./LoginStyles";
import LoginForm from "../components/LoginForm/LoginForm";

type LoginPageInformation = { loginButtonHandler: () => void };

const LoginPage = ({ loginButtonHandler }: LoginPageInformation) => {
  return (
    <Container>
      <Wrapper>
        <MainHeader>Login</MainHeader>
        <LoginForm loginButtonHandler={loginButtonHandler}></LoginForm>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
