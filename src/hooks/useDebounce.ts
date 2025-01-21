import { useEffect, useState } from "react";

export const useDebounce = (searchString: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(searchString);
  useEffect(() => {
    //   console.log("render");
    const handler = setTimeout(() => {
      setDebounceValue(searchString);
    }, delay);
    return () => {
      clearTimeout(handler); // hủy bỏ hàm bên trên (không thực thi nữa) // tức là khi searchString thay đổi -> hủy bỏ hàm cũ trước đó(hàm clearup thực thi khi component được gọi là hoặc bị unmount) và thực hiện hàm đợi mới
    };
  }, [searchString]);
  return debounceValue;
};
