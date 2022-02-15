import React from "react";

interface IconProps {
  name: string;
  className?: string;
}

export const Icon = ({ name, className }: IconProps) => {
  return <i className={`icon-${name} ${className}`} />;
};
