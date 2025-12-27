
import { useQuery } from '@tanstack/react-query'
import { fetchAllUserList } from '../services/userAccess.service'

export const useUserAccess = () => {
  return useQuery({
    queryKey: ['userAccess', {}],
    queryFn: () => fetchAllUserList(),
  })
}
