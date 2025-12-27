
import authAxios from "./axios";

const devUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const tryLocalLogin = async () => {

  const result = await authAxios.post(`${devUrl}auth/login-with-token`, {
  });

  if (result) {
    localStorage.setItem("accessToken", result?.data?.data?.accessToken);
    localStorage.setItem("refreshToken", result?.data?.data?.refreshToken);
    localStorage.setItem("role", result?.data?.data?.role);
    localStorage.setItem("hospitalId", result?.data?.data?.hospitalDetails?.id);
    localStorage.setItem("email", result?.data?.data?.email);

    return true;
  }
  return false;
};
