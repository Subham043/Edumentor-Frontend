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

type ForgotPasswordFormType = {
  email: string;
};

const schema: yup.ObjectSchema<ForgotPasswordFormType> = yup
  .object({
    email: yup.string().typeError('Email must contain characters only').email("Please enter a valid email").required("Email is required"),
  })
  .required();


const ForgotPassword = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {toastError, toastSuccess} = useToast();

  const {
    handleSubmit,
    register,
    getValues,
    setError,
    reset,
    formState: { errors },
  } = useForm<ForgotPasswordFormType>({
    resolver: yupResolver(schema),
  });

  /*
  * Login Handler Function
  */
  const onSubmit = handleSubmit(async () => {
    setLoading(true);
    try {
      await axiosInstance.post(api_routes.auth.forgotPassword, getValues());
      reset();
      toastSuccess("Check your email for a link to reset your password");
    } catch (error) {
      if (isAxiosError<AxiosErrorResponseType>(error)) {
        if (error?.response?.data?.errors) {
          for (const [key, value] of Object.entries(error?.response?.data?.errors)) {
            setError(key as keyof ForgotPasswordFormType, {
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
      <h1 className="text-3xl font-semibold mb-6 text-black text-center">Forgot Password</h1>
      <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">Enter your email and we will send you a link to reset your password</h1>
      <form onSubmit={onSubmit} method="POST" className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="text" id="email" {...register("email")} />
          <ErrorMessage errors={errors} name="email" as={<div className=" text-red-500 text-sm" />} />
        </div>
        <div>
          <FormButton type="submit" disabled={loading}>{loading ? <Spinner className="fill-gray-400" /> : "Reset Password"}</FormButton>
        </div>
      </form>
      <div className="mt-4 text-sm text-gray-600 text-center">
        <p>Remember your password? <Link to={page_routes.login} className="text-black hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  )
}

export default ForgotPassword