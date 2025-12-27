import authAxios from './axios'
type req = {
  password: string
  token: string | string[] | undefined
}
export default async function resetPasswordHandler(
  req: req,
  router: any,
  setIsResetPasswordFailed: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    const res = await authAxios({
      url: 'cashless/reset-password',
      method: 'POST',
      data: req,
    })
    if (res.status === 201) {
      router.push('/login')
    }
  } catch (err) {
    setIsResetPasswordFailed(true)
  }
}
