import { useProfile } from "@hooks/queries";
import { useAuthState } from "@hooks/zustand";
import { CircularProgress } from "@mui/material";
import React from "react";

export const Splash = () => {
  const [data, { isError, isLoading }] = useProfile();
  const setAuth = useAuthState((state) => state.setAuth);
  const setProfile = useAuthState((state) => state.setProfile);

  React.useEffect(() => {
    if (!isLoading) {
      setAuth(!isError);
      if (data) {
        setProfile(data.data);
      }
    }
  }, [data, isError, isLoading, setAuth, setProfile]);

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <CircularProgress />
    </div>
  );
};
