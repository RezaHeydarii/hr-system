import { useMutation, useQuery } from "react-query";
import axios from "axios";

export interface LoginFormProps {
  username: string;
  password: string;
  rememberMe?: boolean;
}

export const useLogin = () => {
  const requestFn = async (data: LoginFormProps) =>
    axios.post("/api/login", data);

  const { mutate, isLoading } = useMutation(requestFn);

  return [mutate, { isLoading }] as const;
};

export const useProfile = () => {
  const requestFn = async () => axios.get("/api/user");

  const { data, isError, isLoading, isSuccess } = useQuery("user", requestFn, {
    retry: false,
  });

  return [data, { isError, isLoading, isSuccess }] as const;
};
