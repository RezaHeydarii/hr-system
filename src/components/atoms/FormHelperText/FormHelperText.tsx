import React from "react";
import cls from "classnames";
import { Icon } from "..";

interface Props {
  error?: boolean;
  helperText: string;
  className?: string;
}

export const FormHelperText = ({ error, helperText, className }: Props) => {
  return (
    <div className={className}>
      <div className="flex items-center">
        {error && (
          <Icon name="warning_circle mr-2.5" className="text-system-error" />
        )}
        <span className={cls("text-sm", { "text-system-error": error })}>
          {helperText}
        </span>
      </div>
    </div>
  );
};
