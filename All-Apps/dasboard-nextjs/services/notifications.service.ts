import authAxios from './axios'
import {
  CashlessServiceResponse,
  FetchNotificationsResponse,
} from '../types/CashlessServiceResponse.type'
import { Notification } from '../types/notification.type'

export const fetchNotifications = async ({ isRead = false, page = 1 }) => {
  const cashlessHospitalId = localStorage.getItem('hospitalId')
  if (!cashlessHospitalId) {
    return {
      count: 0,
      hasMore: false,
      notifications: [] as Notification[],
      pageSize: 10,
    }
  }
  const { data } = await authAxios.get<
    CashlessServiceResponse<FetchNotificationsResponse>
  >(`/notifications/${cashlessHospitalId}`, {
    params: {
      isRead,
      page,
    },
  })
  return data.data
}

export const markNotificationsAsRead = async (notificationIds: number[]) => {
  const cashlessHospitalId = localStorage.getItem('hospitalId')
  if (!cashlessHospitalId) {
    return { count: 0 }
  }
  const { data } = await authAxios.patch<
    CashlessServiceResponse<{ count: number }>
  >(`/notifications/${cashlessHospitalId}/mark-as-read`, {
    notificationIds,
  })
  return data.data
}

export const markAllNotificationsAsRead = async () => {
  const cashlessHospitalId = localStorage.getItem('hospitalId')
  if (!cashlessHospitalId) {
    return { count: 0 }
  }
  const { data } = await authAxios.patch<
    CashlessServiceResponse<{ count: number }>
  >(`/notifications/${cashlessHospitalId}/mark-all-as-read`)
  return data.data
}
