import styled from "styled-components";
// import { Container, MainHeader, Wrapper } from "./LoginStyles";
// import LoginForm from "../components/loginform/LoginForm";
import { useSession, signIn, signOut } from "next-auth/react";
type LoginPageInformation = { loginButtonHandler: () => void };

const LoginPage = ({ loginButtonHandler }: LoginPageInformation) => {
  const { data, status } = useSession();
  if (status === "loading") return <h1> loading... please wait</h1>;
  if (status === "authenticated") {
    return (
      <div>
        {data && <h1> hi {data.user?.name}</h1>}
        <button onClick={() => signOut()}>sign out</button>;
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => signIn("google")}>sign in with gooogle</button>
    </div>
  );
};
// return (
//   <Container>
//     <Wrapper>
//       <MainHeader>Login</MainHeader>
//       <LoginForm loginButtonHandler={loginButtonHandler}></LoginForm>

//     </Wrapper>
//   </Container>
// );

export default LoginPage;
