import { useNavigation } from "react-router-dom";
import { RingLoader } from "react-spinners";
import "./submitBtn.scss";

const SubmitBtn = ({ text, className }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button
      type="submit"
      className={`submit__btn ${className || ""}`}
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <RingLoader size={20} color="#454545" loading={isSubmitting} />
          <span className="submit__btn--text">Sending...</span>
        </>
      ) : (
        text || "Submit"
      )}
    </button>
  );
};

export default SubmitBtn;
