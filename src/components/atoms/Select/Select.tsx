import React from "react";
import {
  MenuItem,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from "@mui/material";

import cls from "classnames";

import { Checkbox, CheckboxProps } from "../Checkbox/Checkbox";
import { FormHelperText } from "../FormHelperText/FormHelperText";

export interface LabelValueSelectOptionType {
  label: CheckboxProps["label"];
  value: string;
}

export interface SelectProps
  extends Pick<
    MuiSelectProps<string | string[]>,
    | "onChange"
    | "disabled"
    | "id"
    | "name"
    | "placeholder"
    | "fullWidth"
    | "multiple"
    | "value"
    | "error"
  > {
  className?: string;
  options?: Array<LabelValueSelectOptionType>;
  helperText?: string;
  label?: string;
}

export function Select(props: SelectProps) {
  const { className, options, label, ...selectProps } = props;
  const { multiple, value, error, helperText, placeholder } = selectProps;

  const isItemSelected = (item: LabelValueSelectOptionType): boolean => {
    if (!value) return false;
    if (Array.isArray(value)) {
      return value.find((v) => v === item.value) !== undefined;
    } else {
      return value === item.value;
    }
  };

  const renderValue = (val: SelectProps["value"]) => {
    if (!val) {
      return <span className="text-greys-4">{placeholder}</span>;
    }
    return Array.isArray(val) ? val.join(", ") : val;
  };

  return (
    <div className={className}>
      {label && <label className="font-bold text-sm mb-2">{label}</label>}
      <MuiSelect<string | string[]>
        {...selectProps}
        classes={{
          outlined: cls(
            "!py-0 !h-[56px] !flex items-center focus-visible:!border-v focus-within:!shadow-input focus-visible:!outline-none",
            { "!border-system-error": error }
          ),
        }}
        MenuProps={{
          classes: {
            paper: "!mt-1 !shadow-select",
          },
        }}
        displayEmpty
        renderValue={renderValue}
      >
        {options && options.length > 0 ? (
          options.map((option) => {
            return (
              <MenuItem
                classes={{
                  root: "hover:!bg-greys-6 !mx-2 !rounded-md",
                  selected: multiple
                    ? ""
                    : "!bg-i hover:!bg-i !text-text-light",
                }}
                key={option.value}
                value={option.value}
              >
                {multiple ? (
                  <Checkbox
                    label={option.label}
                    checked={isItemSelected(option)}
                    pointerEvents="none"
                  />
                ) : (
                  option.label
                )}
              </MenuItem>
            );
          })
        ) : (
          <div className="flex justify-center px-4 py-2">
            <p>No Option</p>
          </div>
        )}
      </MuiSelect>
      {helperText && (
        <FormHelperText
          helperText={helperText}
          error={error}
          className="mt-2.5 animate-fade-in"
        />
      )}
    </div>
  );
}
