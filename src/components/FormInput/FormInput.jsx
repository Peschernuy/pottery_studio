import "./formInput.scss";

function FormInput({ name, type, placeholder }) {
  return (
    <div className="form__control">
      <input
        required
        className="form__input"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormInput;
