import React from "react";
import cls from "classnames";
import {
  Button as MuiButton,
  CircularProgress,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

export interface ButtonProps
  extends Pick<
    MuiButtonProps,
    "color" | "variant" | "children" | "fullWidth" | "disabled" | "type"
  > {
  className?: string;
  onClick?: (e: any) => void;
  corner?: "rounded" | "normal" | "not_rounded";
  freeHeight?: boolean;
  isLoading?: boolean;
  noPadding?: boolean;
  id?: string;
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    variant,
    onClick,
    corner,
    color,
    freeHeight,
    fullWidth,
    disabled,
    isLoading,
    noPadding,
    type,
    id,
  } = props;
  const btnHeight = freeHeight ? "!h-auto" : "!h-[48px]";
  const btnCommon = "!text-sm";
  const btnRadius = (() => {
    switch (corner) {
      case "normal":
        return "!rounded-lg";
      case "not_rounded":
        return "";
      default:
        return "!rounded-24px";
    }
  })();

  return (
    <div className={className}>
      <MuiButton
        id={id}
        type={type}
        fullWidth={fullWidth}
        onClick={onClick}
        color={color}
        variant={variant}
        classes={{
          root: cls(btnHeight, btnCommon, btnRadius, {
            "!p-0 !min-w-[auto]": noPadding,
          }),
        }}
        disabled={disabled || isLoading}
      >
        {isLoading ? <CircularProgress /> : children}
      </MuiButton>
    </div>
  );
};

Button.defaultProps = {
  variant: "contained",
  corner: "rounded",
  color: "primary",
};
