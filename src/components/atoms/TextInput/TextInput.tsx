import React, { InputHTMLAttributes, forwardRef } from "react";
import cls from "classnames";
import { Icon } from "..";
import { FormHelperText } from "../FormHelperText/FormHelperText";

export interface TextInputProps
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
    | "type"
  > {
  className?: string;
  label?: string;
  checked?: boolean;
  error?: boolean;
  helperText?: string;
  endAdornment?: React.ReactNode;
}

export const TextInput = forwardRef<any, TextInputProps>((props, ref) => {
  const {
    className,
    label,
    checked,
    error,
    helperText,
    endAdornment,
    ...inputProps
  } = props;
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
          ref={ref}
          {...inputProps}
          className="h-full w-full rounded-md px-6 text-base text-text-dark placeholder:text-greys-4 hover:outline-none focus-visible:outline-none hover:border-0"
        />
        {checked && !endAdornment && (
          <Icon
            name="check_circle"
            className="mr-4 text-system-success animate-scale-in"
          />
        )}
        {endAdornment && <div>{endAdornment}</div>}
      </div>
      {helperText && (
        <FormHelperText
          helperText={helperText}
          error={error}
          className="mt-2.5 animate-fade-in"
        />
      )}
    </div>
  );
});
