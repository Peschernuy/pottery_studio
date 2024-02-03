import "./facebookSignInButton.scss";
import facebook__btn__img from "../../assets/images/buttons/btn_facebook.svg";

const FacebookSignInButton = ({ onClick }) => {
  return (
    <button className="facebook-signin-btn" onClick={onClick}>
      <img src={facebook__btn__img} alt="facebook__btn" />
    </button>
  );
};

export default FacebookSignInButton;
