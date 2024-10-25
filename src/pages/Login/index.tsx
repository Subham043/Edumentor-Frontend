import { page_routes } from "@/lib/page_routes"
import { Link } from "react-router-dom"
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import axiosInstance from "@/lib/axios";
import { api_routes } from "@/lib/api_routes";
import { isAxiosError } from "axios";
import { AxiosErrorResponseType } from "@/lib/types";
import Label from "@/components/Form/Label";
import Input from "@/components/Form/Input";
import FormButton from "@/components/Form/FormButton";
import { useToast } from "@/hooks/useToast";
import Spinner from "@/components/Spinner";
import { Authtype, useAuth } from "@/store/useAuth";

type LoginFormType = {
  email: string;
  password: string;
};

/*
 * Input Field Validation using Yup
 */
const schema: yup.ObjectSchema<LoginFormType> = yup
  .object({
    email: yup.string().typeError('Email must contain characters only').email("Please enter a valid email").required("Email is required"),
    password: yup.string().typeError('Password must contain characters only').required("Password is required"),
  })
  .required();


const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {toastError, toastSuccess} = useToast();
  const { setAuth } = useAuth()

  const {
    handleSubmit,
    register,
    getValues,
    setError,
    reset,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: yupResolver(schema),
  });

  /*
  * Login Handler Function
  */
  const onSubmit = handleSubmit(async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post<Authtype>(api_routes.auth.login, getValues());
      setAuth(response.data);
      reset();
      toastSuccess("Logged in Successfully");
    } catch (error) {
      if (isAxiosError<AxiosErrorResponseType>(error)) {
        if (error?.response?.data?.errors) {
          for (const [key, value] of Object.entries(error?.response?.data?.errors)) {
            setError(key as keyof LoginFormType, {
              type: "server",
              message: value[0],
            });
          }
        } else if (error?.response?.data?.message) {
          toastError(error.response.data.message);
        }
      }
    } finally {
      setLoading(false);
    }
  });

  return (
    <div className="max-w-md w-full p-6">
      <h1 className="text-3xl font-semibold mb-6 text-black text-center">Sign In</h1>
      <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">Join to Our Community with all time access and free </h1>
      <form onSubmit={onSubmit} method="POST" className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="text" id="email" {...register("email")} />
          <ErrorMessage errors={errors} name="email" as={<div className=" text-red-500 text-sm" />} />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" {...register("password")} />
          <ErrorMessage errors={errors} name="password" as={<div className=" text-red-500 text-sm" />} />
          <div className="mt-4 text-sm text-gray-600 text-right">
            <p><Link to={page_routes.forgotPassword} className="text-black hover:underline">Forgot Password?</Link>
            </p>
          </div>
        </div>
        <div>
          <FormButton type="submit" disabled={loading}>{loading ? <Spinner className="fill-gray-400" /> : "Login"}</FormButton>
        </div>
      </form>
      <div className="mt-4 text-sm text-gray-600 text-center">
        <p>Don't have an account? <Link to={page_routes.register} className="text-black hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  )
}

export default Login