import eye from "../../assets/eye-login.svg";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../services/authentication-api";
import LoadingInButton from "../loading-in-button";
import { useState } from "react";

type TRegisterForm = {
  email: string;
  password: string;
  fullName: string;
};

const schema = z.object({
  email: z
    .string()
    .min(4, "Email at least 4 characters")
    .email("Must is email example@example.com"),
  password: z.string().min(3, "Password at least 3 characters"),
  fullName: z.string().trim().min(3, "Full name at least 3 characters"),
});

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: TRegisterForm) => {
      setIsLoading(true);
      const response = await registerUser({
        email: data.email,
        password: data.password,
        fullName: data.fullName,
      });
      setIsLoading(false);
      return response;
    },
    onSuccess: (response) => {
      if (response) {
        toast.success("Register Success !");
        navigate("/login");
      }
    },
    onError: (error) => {
      toast.error(error.toString());
    },
  });

  const onSubmitHandle = (data: TRegisterForm) => {
    try {
      mutate(data);
    } catch (error) {
      toast.error("" + error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandle)} className="space-y-6">
        <div>
          <label className="font-medium" htmlFor="fullName">
            Full Name
          </label>
          <div className="relative">
            <input
              className="w-full min-h-10 bg-[#F2F6FB] rounded-3xl shadow-custom p-4 box-border"
              type="fullName"
              placeholder="Enter you full name"
              {...register("fullName")}
            />
            <span className="text-red-700">{errors.fullName?.message}</span>
          </div>
        </div>
        <div className="space-y-5">
          <div>
            <label className="font-medium" htmlFor="">
              E-mail
            </label>
            <input
              className="w-full min-h-10 bg-[#F2F6FB] rounded-3xl shadow-custom p-4 box-border"
              placeholder="Enter your email"
              {...register("email")}
            />
            <span className="text-red-700">{errors.email?.message}</span>
          </div>
          <div className="">
            <label className="font-medium" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="w-full min-h-10 bg-[#F2F6FB] rounded-3xl shadow-custom p-4 box-border"
                type="password"
                placeholder="Enter you password"
                {...register("password")}
              />
              <span className="text-red-700">{errors.password?.message}</span>
              <img
                className="absolute top-1/2 -translate-y-1/2 right-4 "
                src={eye}
                alt=""
              />
            </div>
          </div>
          <div className="pt-2">
            <button
              className={`w-full min-h-10 text-white rounded-2xl font-semibold text-lg p-3 shadow-custom ${
                isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-[#1B53F4]"
              }`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <LoadingInButton /> : "Register"}
            </button>
          </div>
          <div className="text-center">
            <p className="text-gray-500">
              You're already have account?{" "}
              <span className="text-blue-600 hover:text-blue-400 cursor-pointer">
                <Link to="/login">Login now</Link>
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
