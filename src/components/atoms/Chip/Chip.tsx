import React from "react";
import { Chip as MaterialChip, ChipProps as MuiChipProps } from "@mui/material";
import { Icon } from "..";

interface ChipProps
  extends Pick<
    MuiChipProps,
    | "label"
    | "onDelete"
    | "variant"
    | "deleteIcon"
    | "size"
    | "color"
    | "onClick"
  > {
  className?: string;
}

export const Chip = (props: ChipProps) => {
  const { className, ...chipProps } = props;
  return (
    <span className={className}>
      <MaterialChip
        deleteIcon={
          chipProps.deleteIcon || <Icon name="close" className="!text-sm" />
        }
        {...chipProps}
      />
    </span>
  );
};
