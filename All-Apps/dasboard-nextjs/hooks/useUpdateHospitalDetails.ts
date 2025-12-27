import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import { getHospitalDetail } from '../services/hospitalDetail.service'
import authAxios from '../services/axios'
import { HospitalDetails } from '../types/hospitalDetails.types'

const updateHospitalDetailService = (values: HospitalDetails) => {
  return authAxios.post('/cashless/update/hospital-details', values)
}

export const updateHospitalDetails = (values: HospitalDetails) => {
  const apiData = updateHospitalDetailService(values)
  return apiData
}
