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

type RegisterFormType = {
  email: string;
  name: string;
  phone: number;
  password: string;
  confirm_password: string;
};

/*
 * Input Field Validation using Yup
 */
const schema: yup.ObjectSchema<RegisterFormType> = yup
  .object({
    name: yup.string().typeError("Name must contain characters only").required("Name is required"),
    email: yup.string().typeError("Email must contain characters only").email().required("Email is required"),
    phone: yup.number().typeError("Phone must contain numbers only").positive().required("Phone is required"),
    password: yup.string().typeError("Password must contain characters only").required("Password is required"),
    confirm_password: yup.string().typeError("Confirm Password must contain characters only").required("Confirm Password is required").oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();


const Register = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {toastError, toastSuccess} = useToast();

  const {
    handleSubmit,
    register,
    getValues,
    setError,
    reset,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: yupResolver(schema),
  });

  /*
  * Login Handler Function
  */
  const onSubmit = handleSubmit(async () => {
    setLoading(true);
    try {
      await axiosInstance.post(api_routes.auth.register, getValues());
      reset();
      toastSuccess("Registered Successfully");
    } catch (error) {
      if (isAxiosError<AxiosErrorResponseType>(error)) {
        if (error?.response?.data?.errors) {
          for (const [key, value] of Object.entries(error?.response?.data?.errors)) {
            setError(key as keyof RegisterFormType, {
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
      <h1 className="text-3xl font-semibold mb-6 text-black text-center">Sign Up</h1>
      <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">Join to Our Community with all time access and free </h1>
      <form onSubmit={onSubmit} method="POST" className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" {...register("name")} />
          <ErrorMessage errors={errors} name="name" as={<div className=" text-red-500 text-sm" />} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="text" id="email" {...register("email")} />
          <ErrorMessage errors={errors} name="email" as={<div className=" text-red-500 text-sm" />} />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input type="text" id="phone" {...register("phone")} />
          <ErrorMessage errors={errors} name="phone" as={<div className=" text-red-500 text-sm" />} />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" {...register("password")} />
          <ErrorMessage errors={errors} name="password" as={<div className=" text-red-500 text-sm" />} />
        </div>
        <div>
          <Label htmlFor="confirm_password">Confirm Password</Label>
          <Input type="password" id="confirm_password" {...register("confirm_password")} />
          <ErrorMessage errors={errors} name="confirm_password" as={<div className=" text-red-500 text-sm" />} />
        </div>
        <div>
          <FormButton type="submit" disabled={loading}>{loading ? <Spinner className="fill-gray-400" /> : "Sign Up"}</FormButton>
        </div>
      </form>
      <div className="mt-4 text-sm text-gray-600 text-center">
        <p>Already have an account? <Link to={page_routes.login} className="text-black hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  )
}

export default Register