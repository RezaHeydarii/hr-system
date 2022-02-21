import { useAuthState } from "@hooks/zustand";
import { useUiState } from "@hooks/zustand/useUiState";
import { DefaultLayout } from "@layouts/index";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Splash } from "./Splash/Splash";

const LoginPage = lazy(() => import("./Login/Login"));
const CandidatesListPage = lazy(
  () => import("./CandidatesList/CandidatesList")
);

const AuthPages = () => {
  return (
    <Routes>
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};

const AppPages = () => {
  const setHeaderSubTitle = useUiState((state) => state.setHeaderSubTitle);
  const profile = useAuthState((state) => state.profile);
  React.useEffect(() => {
    if (profile) {
      setHeaderSubTitle(`Welcome ${profile.firstName}`);
    }
  }, [profile, setHeaderSubTitle]);
  return (
    <Routes>
      <Route path="/" element={<CandidatesListPage />} />
    </Routes>
  );
};

export const AppRoutes = () => {
  const isAuthenticating = useAuthState((state) => state.isAuthenticating);
  const isAuth = useAuthState((state) => state.isAuth);

  if (isAuthenticating) {
    return <Splash />;
  }
  return (
    <DefaultLayout>
      <Suspense fallback={<p>loading</p>}>
        {isAuth ? <AppPages /> : <AuthPages />}
      </Suspense>
    </DefaultLayout>
  );
};
