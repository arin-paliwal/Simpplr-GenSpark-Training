import React from "react";

interface ButtonProps {
  children: React.ReactNode | React.ReactNode[];
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "blue",
        color: "white",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
