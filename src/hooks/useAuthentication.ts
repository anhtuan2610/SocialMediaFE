import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

const useAuthentication = ({
  mutationAuthFn,
  onSuccessFn,
}: {
  mutationAuthFn: (
    data: any,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<any>;
  onSuccessFn: (response: any) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const mutation = useMutation({
    mutationFn: (data: any) => {
      return mutationAuthFn(data, setIsLoading);
    },
    onSuccess: (response) => {
      onSuccessFn(response);
    },
    onError: (error) => {
      setIsLoading(false);
      toast.error(error.toString());
    },
  });

  return { ...mutation, isLoading };
};

export default useAuthentication;
