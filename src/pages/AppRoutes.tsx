import { DefaultLayout } from "@layouts/index";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const LoginPage = lazy(() => import("./Login/Login"));

const AuthPages = () => {
  return (
    <Routes>
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};

export const AppRoutes = () => {
  return (
    <DefaultLayout>
      <Suspense fallback={<p>loading</p>}>
        <AuthPages />
      </Suspense>
    </DefaultLayout>
  );
};
