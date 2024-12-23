import { useEffect } from "react";
import Cookies from "js-cookie";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/user";
import { getLoggedInUserInfo } from "../services/users-api";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const accessToken = Cookies.get("accessToken");
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const getUserInfo = async () => {
    if (!accessToken) {
      navigate("/login");
      return;
    }
    try {      
      if (!user) {
        const response = await getLoggedInUserInfo();
        if (response) {
          const userData = response.data;
          setUser(userData);
        }
      }
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    getUserInfo();
  }, [accessToken, navigate]);

  return <Outlet />;
};

export default ProtectedRoute;
