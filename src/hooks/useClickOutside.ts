import { useEffect } from "react";

export const useClickoutSide = ({
  refElm,
  setState,
}: {
  refElm: React.RefObject<HTMLDivElement | null>;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      refElm.current &&
      !refElm.current.contains(event.target as Node) && // phần tử được click không nằm trong cái dropdown
      refElm.current &&
      !refElm.current.contains(event.target as Node) // Kiểm tra avatarRef
    ) {
      setState(false); // Close the dropdown when clicking outside
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      return document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
};
