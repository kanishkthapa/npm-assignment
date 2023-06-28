import React from "react";
import { ReuseButton } from "@locoworks/reusejs-react-button";

const Button = ({
  onClick,
  label = "add text",
  bgcolor = "bg-blue-700",
  block = false,
}) => {
  return (
    <ReuseButton
      onClick={onClick}
      className={`text-white  ${bgcolor} ${
        block ? "block" : ""
      } px-4 py-2 rounded-md hover:opacity-80`}
    >
      {label}
    </ReuseButton>
  );
};

export default Button;
