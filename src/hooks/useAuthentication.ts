import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const useAuthentication = ({
  mutationAuthFn,
  onSuccessFn,
}: {
  mutationAuthFn: (
    data: any,
  ) => Promise<any>;
  onSuccessFn: (response: any) => void;
}) => {
  const mutation = useMutation({
    mutationFn: (data: any) => {
      return mutationAuthFn(data);
    },
    onSuccess: (response) => {
      onSuccessFn(response);
    },
    onError: (error) => {
      toast.error(error.toString());
    },
  });

  return { ...mutation };
};

export default useAuthentication;
