import React from "react";
import "../styles/FormField.css"; // make sure this CSS file exists

const FormField = ({
  LabelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div className="form-field">
      <div className="form-field-header">
        <label htmlFor={name} className="form-label">
          {LabelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="surprise-btn"
          >
            Surprise me
          </button>
        )}
      </div>

      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default FormField;
