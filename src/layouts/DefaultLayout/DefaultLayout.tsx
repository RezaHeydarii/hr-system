import React from "react";
import { PageHeader } from "@components/layout";

interface Props {
  children: React.ReactNode;
}

export const DefaultLayout = (props: Props) => {
  const { children } = props;
  return (
    <div>
      <PageHeader />
      <div className="px-24">{children}</div>
    </div>
  );
};
