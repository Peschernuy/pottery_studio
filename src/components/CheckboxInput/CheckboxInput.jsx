import "./checkboxInput.scss";

function CheckboxInput({ name, label, isChecked, onChange, className }) {
  return (
    <div className={`checkbox__control ${className || ''}`}>
      <input
        className="checkbox__input"
        type="checkbox"
        id={name}
        name={name}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={name} className="checkbox__label">
        {label}
      </label>
    </div>
  );
}

export default CheckboxInput;