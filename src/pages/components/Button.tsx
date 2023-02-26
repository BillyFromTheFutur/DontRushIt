import React from "react";

interface Props {
  text: string;
  tailwindProps?: string;
  size?: string;
  disabled?: boolean;
  onClick: () => void;
  position?: string;
  children?: unknown;
}
type SizeClasses = {
  small: string;
  medium: string;
  large: string;
};
const BasicButton: React.FC<Props> = ({
  text,
  tailwindProps = "",
  size = "medium",
  disabled = false,
  onClick,
  position = "",
  children,
}) => {
  const sizes: SizeClasses = {
    small: "py-1 px-3 text-xs",
    medium: "py-2 px-4 text-sm",
    large: "py-3 px-5 text-lg",
  };
  return (
    <div
      className={"z-10 h-10 w-28 content-center items-center justify-center"}
    >
      <button
        onClick={onClick}
        className={` ${tailwindProps} ${position}   text-center font-semibold text-white focus:outline-none ${
          sizes[size]
        } ${disabled ? "cursor-not-allowed opacity-50" : "hover:shadow-lg"}`}
        disabled={disabled}
      >
        {text}
        {children}
      </button>
    </div>
  );
};
export default BasicButton;
