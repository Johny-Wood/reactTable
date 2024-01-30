import React from "react";
import "./index.scss";

interface IInput {
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
}

const Input: React.FC<IInput> = ({ onChange, value, placeholder }) => {
  return (
    <input
      className="input"
      onChange={(e) => onChange(e.target.value)}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
