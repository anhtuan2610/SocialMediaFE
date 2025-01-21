import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api/",
  // baseURL: "https://socialmediabe-production.up.railway.app/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000,
});

apiClient.interceptors.response.use(
  // axios tự động parse kiểu json -> đối tượnng
  (response) => {
    // console.log(response.data);
    return response.data;
  },
  (error) => {
    if (error.response && error.response.data) {
      const status = error.response.status;
      switch (status) {
        case 400:
          console.error("Bad Request: ", error.response.data);
          break;
        case 401:
          console.error("Unauthorized: ", error.response.data);
          // You can handle a redirect to login page here if needed
          window.location.href = "/login";
          break;
        case 404:
          console.error("Not Found: ", error.response.data);
          break;
        case 500:
          {
            console.error("Server Error: ", error.response.data);
            window.location.href = "/login";
          }
          break;
        default:
          console.error("Error: ", error.response.data);
      }
      return Promise.reject(error.response.data);
    }
    if (error.request) {
      return Promise.reject(
        "Network Error: No response received from the server"
      );
    }
    // console.error("Error: ", error.message);
  }
);

apiClient.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken");
    // console.log("🚀 ~ accessToken:", accessToken);
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// METHOD
// hàm get có kiểu trả về là 1 promise dạng T* (T có thể là kiểu Product)
export const get = <T>({
  url,
  params,
  config, // một đối tượng chứa các tùy chọn khác liên quan đến yêu cầu.
}: {
  url: string;
  params?: AxiosRequestConfig["params"];
  config?: AxiosRequestConfig;
}): Promise<T> =>
  // tham số 1 là url , 2 là config
  apiClient.get(url, {
    url,
    params,
    ...config,
  });

export const post = <T>({
  // Tránh xung đột cú pháp trong một số phiên bản cũ hơn của TypeScript (đặc biệt là với JSX sẽ bị nhầm lẫn cú pháp đây là thẻ).
  url,
  data,
  config,
}: {
  url: string;
  data?: unknown;
  config?: AxiosRequestConfig;
}): Promise<T> => apiClient.post(url, data, config);

export const update = ({
  url,
  data,
  config,
}: {
  url: string;
  data?: unknown;
  config?: AxiosRequestConfig;
}) => apiClient.put(url, data, config);

export const remove = ({ url }: { url: string }) => apiClient.delete(url);
