import axios, { AxiosError } from 'axios'
import { HospitalAddressType } from '../providers/AuthProvider'
type req = {
  email: string
  password: string
}
const devUrl = process.env.NEXT_PUBLIC_BASE_URL

export default async function LoginHandler(
  req: req,
  router: any,
  setHospitalId: React.Dispatch<React.SetStateAction<string>>,
  setHospitalAddress: React.Dispatch<React.SetStateAction<HospitalAddressType>>,
  setHospitalName: React.Dispatch<React.SetStateAction<string>>,
  setWrongPassword: React.Dispatch<React.SetStateAction<boolean>>,
  setUserNotExist: React.Dispatch<React.SetStateAction<boolean>>
) {
  setUserNotExist(false)
  setWrongPassword(false)
  return await axios
    .post(`${devUrl}auth/login-with-credentials`, {
      email: req.email,
      password: req.password,
    })
    .then((result) => {
      setHospitalAddress({
        area: result?.data?.data?.hospitalDetails?.address?.locality,
        city: result?.data?.data?.hospitalDetails?.address?.city,
        state: result?.data?.data?.hospitalDetails?.address?.state,
        pincode: result?.data?.data?.hospitalDetails?.address?.pincode,
      })
      setHospitalName(result?.data?.data?.hospitalDetails?.hospitalName)
      setHospitalId(result?.data?.data?.hospitalDetails?.id)
      localStorage.setItem('accessToken', result?.data?.data?.accessToken)
      localStorage.setItem('refreshToken', result?.data?.data?.refreshToken)
      localStorage.setItem('role', result?.data?.data?.role)
      localStorage.setItem('email', result.data?.data?.email)
      localStorage.setItem('hospitalId', result?.data?.data?.hospitalDetails?.id)
      localStorage.setItem(
        'hospitalName',
        result?.data?.data?.hospitalDetails?.hospitalName
      )
      localStorage.setItem(
        'hospitalAddress',
        JSON.stringify({
          area: result?.data?.data?.hospitalDetails?.address?.locality,
          city: result?.data?.data?.hospitalDetails?.address?.city,
          state: result?.data?.data?.hospitalDetails?.address?.state,
          pincode: result?.data?.data?.hospitalDetails?.address?.pincode,
        })
      )
      router.push('/')
    })
    .catch((error: AxiosError) => {
      if (error?.response?.status === 404) {
        setUserNotExist(true)
      } else if (error?.response?.status === 401) {
        setWrongPassword(true)
      }
      if (error.request) {
      }
    })
}
