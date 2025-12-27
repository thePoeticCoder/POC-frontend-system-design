import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import { useAuth } from '../providers/AuthProvider'
import axios from '../services/axios'
import { FetchUserResponse } from '../services/userService'
import { UserDetailsType } from '../types/getUserDetails.types'

export const useGetSingleUser = (userId: string | string[] | undefined) => {
  const { hospitalId } = useAuth()
  const getUserDetail = async ({
    queryKey,
  }: QueryFunctionContext<[string, string | string[] | undefined]>) => {
    const [_, userId] = queryKey
    const { data } = userId
      ? await axios.get<FetchUserResponse<UserDetailsType[]>>(
          `/cashless/getUserDetails/${userId}`,
          { headers: { hospitalId } }
        )
      : ({} as { data: { data: UserDetailsType[] } })

    return data?.data
  }
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['get-user', userId],
    queryFn: getUserDetail,
    retry: false,
  })
  return { data, isError, isLoading, error }
}
