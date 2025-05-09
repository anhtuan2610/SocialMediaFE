import { post } from "./axios-config";

export const upLoadImage = async ({ body }: { body: FormData }) => {
  return post({
    url: "/upload/uploadImage",
    data: body,
    config: {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  });
};
