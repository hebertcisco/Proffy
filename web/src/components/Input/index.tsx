import "./styles.scss";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  ...rest
}: InputProps) => (
  <div className="input-block">
    <label htmlFor={name}>{label}</label>
    <input type="text" id={name} {...rest} />
  </div>
);
