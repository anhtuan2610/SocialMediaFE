import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/user";
import { getLoggedInUserInfo } from "../services/users-api";
import LoadingPage from "../components/common/animate/loading-page";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const accessToken = Cookies.get("accessToken");
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const [loading, setLoading] = useState(true);

  const getUserInfo = async () => {
    try {
      if (!accessToken) {
        navigate("/login");
        return;
      }
      if (user) {
        return;
      }
      const response = await getLoggedInUserInfo();
      if (response) {
        const userData = response.data;
        setUser(userData);
      }
    } catch (error) {
      navigate("/login");
    } finally {
      setLoading(false); // Dừng loading khi hoàn thành
    }
  };

  useEffect(() => {
    getUserInfo();
  }, [accessToken, navigate]);

  if (loading) {
    return <LoadingPage />; // phải đợi loading vì có trường hợp hàm lấy dữ liệu người dùng chưa fetch xong mà những api khác lại được thực thi phụ thuộc vào id của người dùng (lúc này bị null) thì sẽ bị sai
  }

  return <Outlet />;
};

export default ProtectedRoute;
