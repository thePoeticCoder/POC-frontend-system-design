import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import { useAuth } from '../providers/AuthProvider'
import { getHospitalDetail } from '../services/hospitalDetail.service'

const getHospitalDetails = async ({
  queryKey,
}: QueryFunctionContext<[string, string]>) => {
  const [_, hospitalId] = queryKey
  const apiData = await getHospitalDetail(hospitalId)
  return apiData
}

export const useHospitalDetails = () => {
  const { hospitalId } = useAuth()
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['hospital-details', hospitalId],
    queryFn: getHospitalDetails,
  })
  return { data, isLoading, isError, error }
}
