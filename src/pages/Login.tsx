import loginSvg from "../assets/login.svg";
import googleSvg from "../assets/google.svg";
import facebookSvg from "../assets/facebook.svg";
import eye from "../assets/eye-login.svg";
import air from "../assets/air-plane.svg";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate("/home");
  }

  return (
    <div className="flex justify-center h-screen font-Nunito bg-login-bg bg-cover bg-center lg:bg-none">
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
            <div>Login</div>
            <div className="absolute -top-16 right-0 lg:-top-28">
              <img
                className="lg:w-[190px] lg:h-[210px]"
                src={loginSvg}
                alt=""
              />
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
              />
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
                />
                <img
                  className="absolute top-1/2 -translate-y-1/2 right-4 "
                  src={eye}
                  alt=""
                />
              </div>
            </div>
            <div className="pt-2">
              <button className="w-full min-h-10 bg-[#1B53F4] text-white rounded-2xl font-semibold text-lg p-3 shadow-custom"
              onClick={handleLogin}>
                Login
              </button>
            </div>
            <div className="text-center">
              <p className="text-blue-600 underline">forgot password ?</p>
              <p className="text-gray-500 my-1">Easy login with</p>
              <div className="flex justify-around lg:justify-center lg:gap-4">
                <button className="flex items-center border shadow-custom px-5 py-3 gap-3 font-medium rounded-lg w-[140px] lg:w-[180px] lg:justify-center">
                  <img src={googleSvg} alt="" />
                  Google
                </button>
                <button className="flex items-center border shadow-custom px-3 py-3 font-medium rounded-lg w-[140px] lg:w-[180px] lg:justify-center">
                  <img src={facebookSvg} alt="" />
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
