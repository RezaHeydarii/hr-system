import React from "react";
import { Select, SelectProps } from "./Select";
import { Control, Controller } from "react-hook-form";

interface Props extends SelectProps {
  control: Control<any, object>;
  name: string;
  id: string;
}

export const ControlledSelect = ({ control, name, ...props }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <Select {...field} {...props} />}
    />
  );
};
