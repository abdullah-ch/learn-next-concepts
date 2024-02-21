import React from "react";
import { ButtonProps } from "./Button.types";

const variantStyles = {
  primary: "bg-blue-500 text-white hover:bg-blue-700",
  secondary: "bg-gray-300 text-gray-700 hover:bg-gray-400",
  warning: "bg-yellow-500 text-white hover:bg-yellow-700",
};

const Button = (props: ButtonProps) => {
  const { variant = "primary", label, ...rest } = props;

  // Use the variant prop to get the corresponding styles
  const buttonStyles = variantStyles[variant];

  // Combine common styles and variant-specific styles
  const combinedStyles = `py-2 px-4 rounded ${buttonStyles}`;

  return (
    <button className={combinedStyles} {...rest}>
      {label}
    </button>
  );
};

export default Button;
