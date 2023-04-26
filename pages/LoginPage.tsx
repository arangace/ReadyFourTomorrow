type LoginPageInformation = { loginButtonHandler: () => void };

const LoginPage = ({ loginButtonHandler }: LoginPageInformation) => {
  return (
    <div>
      Login
      <button onClick={loginButtonHandler}>Login</button>
    </div>
  );
};

export default LoginPage;
