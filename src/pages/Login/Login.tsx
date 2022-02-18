import {
  ControlledTextInput,
  ControlledCheckbox,
  Button,
} from "@components/atoms";
import React from "react";
import { useForm } from "react-hook-form";
import { LoginFormProps } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Please enter your username")
    .min(3, "Invalid username"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(6, "Password should be more than 6 characters"),
});

const Login = () => {
  const { control, handleSubmit } = useForm<LoginFormProps>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
  });

  const onLogin = (data: LoginFormProps) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-5 animate-fade-in">
      <h4 className="text-2xl font-bold text-center mb-2.5">Login</h4>
      <h5 className="text-md text-center text-greys-4">
        Fill in required fields to sign in
      </h5>
      <form
        onSubmit={handleSubmit(onLogin)}
        className="mt-4 w-auto sm:w-[350px]"
        autoComplete="off"
      >
        <ControlledTextInput
          label="Username"
          name="username"
          id="username"
          control={control}
          className="mt-2.5"
          placeholder="Enter username"
        />
        <ControlledTextInput
          label="Password"
          name="password"
          id="password"
          control={control}
          className="mt-2.5"
          placeholder="Enter password"
          type="password"
        />
        <ControlledCheckbox
          label="Remember Me"
          name="rememberMe"
          id="rememberMe"
          control={control}
        />
        <Button type="submit" color="secondary" fullWidth className="mt-5">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
