import React from "react";
import { PageHeader } from "@components/layout";
import { useUiState } from "@hooks/zustand/useUiState";
import { useAuthState } from "@hooks/zustand";

interface Props {
  children: React.ReactNode;
}

export const DefaultLayout = (props: Props) => {
  const { children } = props;
  const headerTitle = useUiState((state) => state.headerTitle);
  const headerSubTitle = useUiState((state) => state.headerSubTitle);
  const logout = useAuthState((state) => state.logout);
  const isAuth = useAuthState((state) => state.isAuth);
  return (
    <div>
      <PageHeader
        title={headerTitle}
        text={headerSubTitle}
        onLogout={logout}
        isAuth={isAuth}
      />
      <div className="px-2.5 sm:px-24">{children}</div>
    </div>
  );
};
