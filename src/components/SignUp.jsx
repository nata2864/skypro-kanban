import AuthForm from "./AuthForm/AuthForm"

 export function SignUp({setIsAuth}) {
    return <AuthForm isSignUp setIsAuth={setIsAuth} />;
  }
  
  export default SignUp;