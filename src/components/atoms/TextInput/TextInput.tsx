import React, { InputHTMLAttributes } from "react";
import cls from "classnames";
import { Icon } from "..";
import { FormHelperText } from "../FormHelperText/FormHelperText";

interface TextInputProps
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    | "value"
    | "onChange"
    | "disabled"
    | "readOnly"
    | "placeholder"
    | "id"
    | "name"
    | "defaultValue"
    | "onBlur"
    | "onFocus"
  > {
  className?: string;
  label?: string;
  checked?: boolean;
  error?: boolean;
  helperText?: string;
}

export const TextInput = (props: TextInputProps) => {
  const { className, label, checked, error, helperText, ...inputProps } = props;
  return (
    <div className={className}>
      {label && <label className="font-bold text-sm mb-2">{label}</label>}
      <div
        className={cls(
          "h-[56px] transition-all border border-greys-5 rounded-md focus-within:border-v focus-within:shadow-input flex items-center",
          { "!border-system-success shadow-none": checked },
          { "!border-system-error shadow-none": error }
        )}
      >
        <input
          {...inputProps}
          className="h-full w-full rounded-md px-6 text-base text-text-dark placeholder:text-greys-4 hover:outline-none focus-visible:outline-none hover:border-0"
        />
        {checked && (
          <Icon name="check_circle" className="mr-4 text-system-success" />
        )}
      </div>
      {helperText && (
        <FormHelperText
          helperText={helperText}
          error={error}
          className="mt-2.5"
        />
      )}
    </div>
  );
};
