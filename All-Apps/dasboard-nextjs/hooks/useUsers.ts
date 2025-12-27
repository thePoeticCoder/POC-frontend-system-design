import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import { getUserService } from '../services/userService'

const getUsers = ({
  queryKey,
}: QueryFunctionContext<[string, string, string]>) => {
  const [_, searchKey, hospitalId] = queryKey
  const apiData =
    searchKey.length >= 5 ? getUserService(searchKey, hospitalId) : []
  return apiData
}

export const useUsers = (searchKey: string, hospitalId: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['users', searchKey, hospitalId],
    queryFn: getUsers,
    retry: false,
  })
  return { data, isLoading, isError, error }
}
