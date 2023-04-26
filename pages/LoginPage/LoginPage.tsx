import styled from "styled-components";
import * as LoginStyles from "./ButtonStyles";

type LoginPageInformation = { loginButtonHandler: () => void };

const LoginPage = ({ loginButtonHandler }: LoginPageInformation) => {
  return (
    <LoginStyles.Container>
      Login
      <button onClick={loginButtonHandler}>Login</button>
    </LoginStyles.Container>
  );
};

export default LoginPage;
