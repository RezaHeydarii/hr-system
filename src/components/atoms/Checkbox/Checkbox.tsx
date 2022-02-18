import React, { forwardRef } from "react";
import {
  Checkbox as MuiCheckbox,
  FormControlLabel,
  FormControlLabelProps,
} from "@mui/material";
import { Icon } from "..";

export type ParentTypes = Pick<
  FormControlLabelProps,
  "label" | "labelPlacement" | "checked" | "value" | "onChange"
>;

export interface CheckboxProps extends ParentTypes {
  className?: string;
  pointerEvents?: any;
}

export const Checkbox = forwardRef<any, CheckboxProps>((props, ref) => {
  const { className, pointerEvents, ...checkboxProps } = props;

  const CheckboxComponent = React.useCallback(
    (props: any) => (
      <MuiCheckbox
        icon={<div className="bg-greys-5 w-[20px] h-[20px] rounded" />}
        checkedIcon={
          <div className="bg-i w-[20px] h-[20px] rounded flex justify-center items-center">
            <Icon name="check" className="text-text-light text-xs" />
          </div>
        }
        {...props}
      />
    ),
    []
  );

  return (
    <div className={className}>
      <FormControlLabel
        ref={ref}
        style={{ pointerEvents }}
        control={<CheckboxComponent />}
        {...checkboxProps}
      />
    </div>
  );
});
