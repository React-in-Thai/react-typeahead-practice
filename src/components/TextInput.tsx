import React from "react";
import cx from "clsx";

export type TextInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const TextInput = ({ id, className, ...props }: TextInputProps) => {
  return (
    <>
      <label htmlFor={id} className="w-0 h-0 overflow-hidden"></label>
      <input
        className={cx(
          "border-none px-6 py-4 w-full bg-none outline-none rounded transition-shadow duration-200 focus:shadow-md",
          className
        )}
        id={id}
        {...props}
      />
    </>
  );
};

export default TextInput;
