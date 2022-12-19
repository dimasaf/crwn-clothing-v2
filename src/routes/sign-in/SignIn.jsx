import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign IN</h1>

      <button onClick={(e) => logGoogleUser()}>klick</button>
    </div>
  );
}

export default SignIn;
