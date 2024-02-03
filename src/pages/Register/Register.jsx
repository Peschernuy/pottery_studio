import { useState } from "react";
import { Form, Link } from "react-router-dom";
import {
  FormInput,
  CheckboxInput,
  SubmitBtn,
  GoogleSignInButton,
  FacebookSignInButton,
} from "../../components";
import "./register.scss";

const Register = () => {
  const [rememberMeChecked, setRememberMeChecked] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMeChecked(!rememberMeChecked);
  };
  return (
    <section className="register__container">
      <Form className="register__form" method="post">
        <h4 className="register__title">New customer</h4>
        <p className="register__subtitle">Create account</p>
        <FormInput type="email" name="identifier" placeholder="email *" />
        <FormInput type="password" name="password" placeholder="password *" />
        <FormInput
          type="password"
          name="repassword"
          placeholder="re-enter password *"
        />
        <FormInput type="text" name="name" placeholder="Name" />
        <CheckboxInput
          className="register__policy"
          name="registerPolicy"
          label={
            <>
              I have been able to read and understand the information on the use of my
              personal data explained in the <span>Privacy policy*</span>
            </>
          }
          isChecked={rememberMeChecked}
          onChange={handleRememberMeChange}
        />
        <CheckboxInput
          className="register__news"
          name="registerNews"
          label="I want to receive news and customised commercial communications from of Pottery Studio via email and other means"
          isChecked={rememberMeChecked}
          onChange={handleRememberMeChange}
        />
        <SubmitBtn
          className="register__createAccount--btn"
          text="Create account"
        />
         <p className="register__alreadyMember--text">
          Already a member?
          <Link
            to="/login"
            className="register__login--link"
          >
            Login
          </Link>
        </p>
      </Form>
      <p className="register__signIn--text">
        <span></span>or Sign in with<span></span>
      </p>
      <div className="register__google-facebook">
        <GoogleSignInButton />
        <FacebookSignInButton />
      </div>
    </section>
  );
};

export default Register;
