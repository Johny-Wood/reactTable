import clsx from "clsx";
import React from "react";

interface IInput {
  onChange: (value: string) => void;
  value: string;
  cl?: string;
}

const Input: React.FC<IInput> = ({ onChange, value, cl }) => {
  return (
    <input
      className={clsx("input", cl && cl)}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  );
};

export default Input;
