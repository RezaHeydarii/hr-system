import React from "react";

interface TextInputProps {
  className?: string;
  label?: string;
  checked?: boolean;
  error?: boolean;
  helperText?: string;
}

export const TextInput = (props: TextInputProps) => {
  const { className } = props;
  return (
    <div className={className}>
      <div className="h-[56px] transition-all border border-greys-5 rounded-md focus-within:border-v">
        <input className="h-full w-full rounded-md px-6 text-base text-text-dark hover:outline-none hover:border-0" />
      </div>
    </div>
  );
};
