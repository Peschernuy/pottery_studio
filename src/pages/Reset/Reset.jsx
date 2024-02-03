import "./reset.scss";
import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../../components";

const Reset = () => {
  return (
    <section className="reset__container">
      <Form className="reset__form" method="post">
        <h4 className="reset__title">Reset password</h4>
        <p className="reset__subtitle">
          We will send you an email to reset your password
        </p>
        <FormInput type="email" name="email" placeholder="email *" />
        <SubmitBtn className="reset__submit--btn" text="Sumbit" />
      </Form>
    </section>
  );
};

export default Reset;
