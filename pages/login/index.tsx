import { Container, MainHeader, Wrapper } from "../../styles/LoginStyles";
import Head from "next/head";
import LoginOptions from "@/components/login/LoginOptions";

type LoginPageInformation = { loginButtonHandler: () => void };

const LoginPage = ({ loginButtonHandler }: LoginPageInformation) => {
  return (
    <>
      <Head>
        <title>Ready Four Tomorrow | Login</title>
      </Head>
      <Container>
        <MainHeader>Login</MainHeader>
        {/* <LoginForm loginButtonHandler={loginButtonHandler}></LoginForm> */}
        <LoginOptions />
      </Container>
    </>
  );
};

export default LoginPage;
