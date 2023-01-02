import "./auth.style.scss";

import SignUpForm from "../../components/sign-up-form/sign-up";
import SignInForm from "../../components/sign-in-form/sign-in";

function Auth() {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Auth;
