import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import {
  FormInput,
  CheckboxInput,
  SubmitBtn,
  GoogleSignInButton,
  FacebookSignInButton,
} from "../../components";

import "./login.scss";

const Login = () => {
  const [rememberMeChecked, setRememberMeChecked] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMeChecked(!rememberMeChecked);
  };

  const loginAsGuestUser = () => {
    console.log("login as guest user");
  };

  return (
    <section className="login__container">
      <Form method="post" className="login__form">
        <h4 className="login__title">Welcome back!</h4>
        <p className="login__subtitle">Log in to your account</p>
        <FormInput type="email" name="identifier" placeholder="email *" />
        <FormInput type="password" name="password" placeholder="password *" />
        <div className="login__additional-info">
          <span className="login__forgot-password">Forgot password?</span>
          <span className="login__required">* required</span>
        </div>
        <CheckboxInput
          className="login__checkbox"
          name="rememberMe"
          label="Remember me"
          isChecked={rememberMeChecked}
          onChange={handleRememberMeChange}
        />
        <SubmitBtn className="login__signIn--btn" text="Sign in" />
        <button className="login__guestUser" onClick={loginAsGuestUser}>
          Guest user
        </button>
        <p className="login__notMember--text">
          Not a member yet?
          <Link
            to="/register"
            className="login__registerLink"
          >
            Register
          </Link>
        </p>
      </Form>
      <p className="login__signIn--text">
        <span></span>or Sign in with<span></span>
      </p>
      <div className="login__google-facebook">
        <GoogleSignInButton />
        <FacebookSignInButton />
      </div>
    </section>
  );
};

export default Login;
