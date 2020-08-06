import "./styles.scss";

import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

export const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  ...rest
}: SelectProps) => (
  <div className="select-block">
    <label htmlFor={name}>{label}</label>
    <select value="" id={name} {...rest}>
      <option value="" disabled hidden>
        Select an option
      </option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
