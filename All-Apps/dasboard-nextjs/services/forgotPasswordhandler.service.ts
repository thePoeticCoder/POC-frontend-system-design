import authAxios from "./axios";

type req = {
  email: string;
};

export default async function forgotPasswordHandler(
  req: req,
  setIsMailSent: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<boolean>>,
  setIsEmailExist: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    const res = await authAxios({
      url: "cashless/forget-password",
      method: "GET",
      params: {
        email: req.email,
      },
    });
    if (res.status === 201 || res.status === 200) {
      setIsMailSent(true);
    }
  } catch (err: any) {
    setIsMailSent(false);
    if (err.response.data.statusCode === 404) {
      setIsEmailExist(false);
    } else {
      setIsEmailExist(true);
      setErrorMessage(true);
    }
  }
}
