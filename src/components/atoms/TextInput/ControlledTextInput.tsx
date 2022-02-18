import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInput, TextInputProps } from "./TextInput";

interface Props extends Omit<TextInputProps, "error" | "helperText"> {
  control: Control<any, object>;
  name: string;
  id: string;
}

export const ControlledTextInput = (props: Props) => {
  const { name, control, ...inputProps } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <TextInput
            {...inputProps}
            {...field}
            error={!!error}
            helperText={error ? error.message : undefined}
          />
        );
      }}
    />
  );
};
