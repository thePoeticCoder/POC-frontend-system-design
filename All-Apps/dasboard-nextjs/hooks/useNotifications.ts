import { useQuery } from '@tanstack/react-query'
import { REFETCH_INTERVAL } from '../constants/notification.constants'
import { fetchNotifications } from '../services/notifications.service'

export const useNotifications = ({
  page = 1,
  isRead = false,
  keepPreviousData = false,
}) => {
  return useQuery({
    queryKey: ['notifications', { isRead, page }],
    queryFn: () => fetchNotifications({ isRead, page }),
    refetchInterval: REFETCH_INTERVAL,
    keepPreviousData,
  })
}
