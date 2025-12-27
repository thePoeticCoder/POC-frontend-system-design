/** @format */
"use client";

import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
  token: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { email, password, token } = data;

    if ((!email || !password) && !token) {
      setError("token", {
        type: "manual",
        message: "Please enter Email & Password OR a Token to login.",
      });
      return;
    }

    if (token) {
      localStorage.setItem("token", token);
    }
    window.location.href = "/";
  };

  const token = watch("token");

  useEffect(() => {
    if (token) {
      setError("email", {});
      setError("password", {});
    }
  }, [token, setError]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: !token && "Email is required",
              })}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: !token && "Password is required",
              })}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <p className="text-center text-gray-500 text-sm">OR</p>

          <div>
            <label className="block font-semibold">Token</label>
            <input
              type="text"
              placeholder="Enter your token"
              {...register("token")}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.token && (
              <p className="text-red-500 text-sm">{errors.token.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
