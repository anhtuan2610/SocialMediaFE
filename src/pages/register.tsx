import loginSvg from "../assets/login.svg";
import air from "../assets/air-plane.svg";
import RegisterForm from "../components/authentication/register-form";

export default function Register() {
  return (
    <div className="flex justify-center min-h-screen font-Nunito bg-login-bg bg-cover bg-center lg:bg-none">
      <div className="hidden lg:block w-1/2 bg-login-bg bg-cover bg-center py-28 pl-52 space-y-12">
        <img src={air} alt="" />
        <div className="space-y-4">
          <div className="text-5xl leading-[68px] font-bold">
            <p>Let’s Explore</p>
            <p>the world together</p>
            <p>Join now</p>
          </div>
          <div className="text-3xl font-light">
            <p>for business account’s</p>
            <p>just call us</p>
          </div>
        </div>
        <div className="text-3xl font-extrabold underline decoration-red-500 animate-colorChange">
          <p>+91 8086 5000 23</p>
          <p>+91 8606 5000 23</p>
        </div>
      </div>
      <div className="w-full border p-10 lg:w-1/2 lg:p-24 lg:bg-[#F6D0FF]">
        <div className="space-y-10 py-10  rounded-2xl lg:bg-white lg:px-32 lg:py-36 lg:h-full">
          <div className="font-bold text-3xl relative">
            <div>Register</div>
            <div className="absolute -top-16 right-0 lg:-top-28">
              <img
                className="lg:w-[190px] lg:h-[210px]"
                src={loginSvg}
                alt=""
              />
            </div>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
