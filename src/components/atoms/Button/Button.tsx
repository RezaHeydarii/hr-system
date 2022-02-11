import React from "react";

interface Props {
  children?: React.ReactNode;
}

export const Button = (props: Props) => {
  const { children } = props;
  return <div>{children}</div>;
};



