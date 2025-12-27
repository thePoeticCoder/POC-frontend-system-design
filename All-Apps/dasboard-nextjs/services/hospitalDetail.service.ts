import { HospitalDetails } from '../types/hospitalDetails.types'
import authAxios from './axios'

export const getHospitalDetail = async (hospitalId: string) => {
  const { data } = await authAxios.get<HospitalDetails>(
    `/cashless/hospital/${hospitalId}`,
    {
      headers: { hospitalId },
    }
  )
  return data
}
