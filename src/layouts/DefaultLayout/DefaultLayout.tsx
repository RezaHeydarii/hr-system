import React from "react";
import { PageHeader } from "@components/layout";
import { useUiState } from "@hooks/zustand/useUiState";

interface Props {
  children: React.ReactNode;
}

export const DefaultLayout = (props: Props) => {
  const { children } = props;
  const headerTitle = useUiState((state) => state.headerTitle);
  const headerSubTitle = useUiState((state) => state.headerSubTitle);
  return (
    <div>
      <PageHeader title={headerTitle} text={headerSubTitle} />
      <div className="px-2.5 sm:px-24">{children}</div>
    </div>
  );
};
