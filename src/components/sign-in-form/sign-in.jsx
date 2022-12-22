import { useState, useContext } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signinAuthEmailPassword,
} from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../context/user.context";

import FormInput from "../form-input/form-input";
import Button from "../Button/button";

import "./sign-in.style.scss";

function SignInForm() {
  const { setCurrentUser } = useContext(UserContext);

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formFields;

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    await createUserDocumentFromAuth(response.user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email && !password) {
      alert("Email or Password must be filled");
      return;
    }

    try {
      const response = await signinAuthEmailPassword(email, password);
      console.warn(response);
      setCurrentUser(response.user);

      setFormFields({
        email: "",
        password: "",
      });
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("User Not Found");
          break;
        case "auth/wrong-password":
          alert("Wrong Password");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account ?</h2>
      <span>sign in with your email and password </span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit"> Sign In </Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;