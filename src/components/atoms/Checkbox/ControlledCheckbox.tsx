import React from "react";
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Control, Controller } from "react-hook-form";

interface Props extends CheckboxProps {
  control: Control<any, object>;
  name: string;
  id: string;
}

export const ControlledCheckbox = ({ control, name, ...props }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <Checkbox {...field} {...props} />}
    />
  );
};
