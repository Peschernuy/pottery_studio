import React, { useState } from "react";
import { Form } from "react-router-dom";
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

  return (
    <section className="login__container">
      <Form method="post" className="login__form">
        <h4 className="login__header">Welcome back!</h4>
        <p className="login__text">Log in to your account</p>
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
        <SubmitBtn text="Sign in" />
      </Form>
      <p className="login__signIn">
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
