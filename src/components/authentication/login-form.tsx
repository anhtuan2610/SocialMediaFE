import googleSvg from "../../assets/google.svg";
import facebookSvg from "../../assets/facebook.svg";
import eye from "../../assets/eye-login.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import LoadingInButton from "../common/animate/loading-in-button";
import useAuthentication from "../../hooks/useAuthentication";
import { login, TLoginResponse } from "../../services/authentication-api";
import Cookies from "js-cookie";
import InputForm from "../form/input-form";
import clsx from "clsx";

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
  const navigate = useNavigate();
  const mutationFnLogin = async (data: TLoginForm) => {
    const response = await login({
      email: data.email,
      password: data.password,
    });
    return response;
  };

  const onSuccessFn = (response: TLoginResponse) => {
    if (response) {
      const accessToken = response.data.accessToken;
      Cookies.set("accessToken", accessToken);
      toast.success("Login Success !");
      navigate("/home");
    }
  };

  const { mutate, isPending } = useAuthentication({
    mutationAuthFn: mutationFnLogin,
    onSuccessFn: onSuccessFn,
  });

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

  const onSubmitHandle = (data: TLoginForm) => {
    try {
      mutate(data);
    } catch (error) {
      toast.error("" + error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandle)} className="space-y-5">
        <InputForm
          id="email"
          labelName="E-mail"
          type="text"
          placeholder="Enter your email"
          register={register}
          error={errors.email?.message}
        />
        <InputForm
          id="password"
          labelName="Password"
          type="password"
          placeholder="Enter your password"
          register={register}
          error={errors.password?.message}
          icon={eye}
        />
        <div className="pt-2">
          <button
            className={clsx(
              "w-full min-h-10 text-white rounded-2xl font-semibold text-lg p-3 shadow-custom",
              isPending ? "bg-gray-400 cursor-not-allowed" : "bg-[#1B53F4]"
            )}
            type="submit"
            disabled={isPending}
          >
            {isPending ? <LoadingInButton /> : "Login"}
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
            <button
              className="flex items-center border shadow-custom px-5 py-3 gap-3 font-medium rounded-lg w-[140px] lg:w-[180px] lg:justify-center"
              type="button"
            >
              <img src={googleSvg} alt="" />
              Google
            </button>
            <button
              className="flex items-center border shadow-custom px-3 py-3 font-medium rounded-lg w-[140px] lg:w-[180px] lg:justify-center"
              type="button"
            >
              <img src={facebookSvg} alt="" />
              Facebook
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
