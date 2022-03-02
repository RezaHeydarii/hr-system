import Button from "@mui/material/Button";
import React from "react";

interface Props {
  title?: string;
  text?: string;
  isAuth?: boolean;
  onLogout?: () => void;
}

export const PageHeader = (props: Props) => {
  const { title, text, onLogout, isAuth } = props;
  return (
    <div>
      <div className="flex items-center justify-between px-2.5 sm:px-24 py-6">
        <div className=" flex items-center">
          <h2 className="text-iv text-2xl font-black mr-20">{title}</h2>
          <h3 className="font-bold">{text}</h3>
        </div>
        {isAuth && (
          <Button id="logout" variant="text" onClick={onLogout}>
            Logout
          </Button>
        )}
      </div>
      <div className="h-px bg-greys-6 w-full" />
    </div>
  );
};
