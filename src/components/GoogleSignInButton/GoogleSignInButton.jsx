import "./googleSignInButton.scss";
import google__btn__img from "../../assets/images/buttons/btn_google.svg";

const GoogleSignInButton = ({ onClick }) => {
  return (
    <button className="google-signin-btn" onClick={onClick}>
      <img src={google__btn__img} alt="google-btn" />
    </button>
  );
};

export default GoogleSignInButton;
