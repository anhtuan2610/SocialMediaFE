import eye from "../../assets/eye-login.svg";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { registerUser } from "../../services/authentication-api";
import LoadingInButton from "../loading-in-button";
import useAuthentication from "../../hooks/useAuthentication";
import InputForm from "../input-form";
import clsx from "clsx";

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
  const navigate = useNavigate();
  const mutationFnRegister = async (
    data: TRegisterForm,
  ) => {
    const response = await registerUser({
      email: data.email,
      password: data.password,
      fullName: data.fullName,
    });
    return response;
  };

  const onSuccessFn = (response: any) => {
    if (response) {
      toast.success("Register Success !");
      navigate("/login");
    }
  };
  const { mutate, isPending } = useAuthentication({
    mutationAuthFn: mutationFnRegister,
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
      fullName: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const onSubmitHandle = (data: TRegisterForm) => {
    try {
      mutate(data);
    } catch (error) {
      toast.error("" + error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandle)} className="space-y-6">
        <div className="space-y-5">
          <InputForm
            id="fullName"
            labelName="Full Name"
            type="text"
            placeholder="Enter your full name"
            register={register}
            error={errors.fullName?.message}
          />
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
              {isPending ? <LoadingInButton /> : "Register"}
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
    </>
  );
}
