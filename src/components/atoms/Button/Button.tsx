import React from "react";

const classNames = {
  contained: {
    primary: "bg-i text-text-light",
    secondary: "bg-ii text-text-light",
    default: "bg-transparent text-text-dark",
  },
  outlined: {
    primary: "border border-i text-i",
    secondary: "border border-ii text-ii",
    default: "bg-transparent text-text-dark",
  },
  text: {
    primary: "bg-transparent text-i",
    secondary: "bg-transparent text-ii",
    default: "bg-transparent text-text-dark",
  },
};

interface Props {
  children?: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "default";
  className?: string;
  onClick?: (e: any) => void;
  corner?: "rounded" | "normal" | "not_rounded";
  freeHeight?: boolean;
  fullWidth?: boolean;
}

export const Button = (props: Props) => {
  const {
    children,
    className,
    variant,
    onClick,
    corner,
    color,
    freeHeight,
    fullWidth,
  } = props;
  const btnCls = classNames[variant || "contained"][color || "secondary"];
  const btnHeight = freeHeight ? "h-auto" : "h-[48px]";
  const btnWidth = fullWidth ? "w-full" : "w-unset";
  const btnCommon = "px-2.5 transition-all brightness-100 hover:brightness-90 text-sm";
  const btnRadius = (() => {
    switch (corner) {
      case "normal":
        return "rounded-lg";
      case "not_rounded":
        return "";
      default:
        return "rounded-24px";
    }
  })();

  return (
    <div className={className}>
      <button
        onClick={onClick}
        className={[btnCls, btnHeight, btnCommon, btnRadius, btnWidth].join(
          " "
        )}
      >
        {children}
      </button>
    </div>
  );
};

Button.defaultProps = {
  variant: "contained",
  corner: "rounded",
  color: "primary",
};
