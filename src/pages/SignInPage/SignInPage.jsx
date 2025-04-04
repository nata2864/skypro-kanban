import SignIn from "../../components/SignIn";

function SignInPage({setIsAuth}) {
  return <SignIn isSignUp={false} setIsAuth={setIsAuth}/>;
}

export default SignInPage;
