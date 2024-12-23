import googleSvg from "../../assets/google.svg";
import facebookSvg from "../../assets/facebook.svg";
import eye from "../../assets/eye-login.svg";
import Cookies from 'js-cookie';
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/authentication-api";
import { useState } from "react";
import LoadingInButton from "../loading-in-button";

type TLoginForm = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z
    .string()
    .min(4, "Email at least 4 characters")
    .email("Must is email example@example.com"),
  password: z.string().min(3, "Password at least 3 characters"),
});

export default function LoginForm() {
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
    },
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: TLoginForm) => {
      setIsLoading(true);
      const response = await login({
        email: data.email,
        password: data.password,
      });
      setIsLoading(false)
      return response;
    },
    onSuccess: (response) => {
      if (response) {
        const accessToken = response.data.accessToken;
        Cookies.set("accessToken", accessToken);        
        toast.success("Login Success !");
        navigate("/home");
      }
    },
    onError: (error) => {
      toast.error(error.toString());
    },
  });

  const onSubmitHandle = (data: TLoginForm) => {
    try {
      mutate(data);
    } catch (error) {
      toast.error("" + error);
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandle)} className="space-y-5">
        <div>
          <label className="font-medium" htmlFor="email">
            E-mail
          </label>
          <input
            className="w-full min-h-10 bg-[#F2F6FB] rounded-3xl shadow-custom p-4 box-border"
            placeholder="Enter your email"
            id="email"
            {...register("email")}
          />
          <span className="text-red-700">{errors.email?.message}</span>
        </div>
        <div>
          <label className="font-medium" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="w-full min-h-10 bg-[#F2F6FB] rounded-3xl shadow-custom p-4 box-border"
              type="password"
              placeholder="Enter you password"
              id="password"
              {...register("password")}
            />
            <img
              className="absolute top-1/2 -translate-y-1/2 right-4 "
              src={eye}
              alt=""
            />
          </div>
          <span className="text-red-700">{errors.password?.message}</span>
        </div>
        <div className="pt-2">
          <button
            className={`w-full min-h-10 text-white rounded-2xl font-semibold text-lg p-3 shadow-custom ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-[#1B53F4]"}`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <LoadingInButton/> : "Login"}
          </button>
        </div>
        <div className="text-center">
          <p className="text-blue-600 underline hover:text-blue-400 cursor-pointer">
            forgot password ?
          </p>
          <p className="text-gray-500">
            Don't have account?{" "}
            <span className="text-blue-600 hover:text-blue-400 cursor-pointer">
              <Link to="/register">Register now</Link>
            </span>
          </p>
          <p className="text-gray-500 my-1">Easy login with</p>
          <div className="flex justify-around lg:justify-center lg:gap-4">
            <button className="flex items-center border shadow-custom px-5 py-3 gap-3 font-medium rounded-lg w-[140px] lg:w-[180px] lg:justify-center" type="button">
              <img src={googleSvg} alt="" />
              Google
            </button>
            <button className="flex items-center border shadow-custom px-3 py-3 font-medium rounded-lg w-[140px] lg:w-[180px] lg:justify-center" type="button">
              <img src={facebookSvg} alt="" />
              Facebook
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
