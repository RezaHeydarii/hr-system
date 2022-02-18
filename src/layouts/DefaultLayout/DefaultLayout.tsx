import React from "react";
import { PageHeader } from "@components/layout";

interface Props {
  children: React.ReactNode;
}

export const DefaultLayout = (props: Props) => {
  const { children } = props;
  return (
    <div>
      <PageHeader title="Project" />
      <div className="px-2.5 sm:px-24">{children}</div>
    </div>
  );
};
