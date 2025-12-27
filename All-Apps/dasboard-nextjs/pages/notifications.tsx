import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import styles from '../styles/notifications.module.css'
import CloudImage from '../public/cloud.png'
import { useNotifications } from '../hooks'
import { NotificationKind } from '../types/notification.type'
import { markAllNotificationsAsRead } from '../services/notifications.service'
import Loader from '../components/Loader'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FetchNotificationsResponse } from '../types/CashlessServiceResponse.type'
import { ReusablePagination } from '../components/ReusablePagination'
import { ErrorMessage } from '../components/ErrorMessage'
import { AxiosError } from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Notifications = () => {
  const router = useRouter()
  const [page, setPage] = useState<number>(1)
  const [currentTab, setCurrentTab] = useState<NotificationKind>(
    NotificationKind.UNREAD
  )
  const [currentNotifications, setCurrentNotifications] = useState<
    FetchNotificationsResponse | undefined
  >({} as FetchNotificationsResponse)

  const keepPreviousData = true

  const {
    data: unReadNotifications,
    isError: isUnReadNotificationsError,
    isLoading: isUnReadNotificationsLoading,
    isPreviousData: isUnReadNotificationsPreviousData,
  } = useNotifications({ isRead: false, keepPreviousData, page })
  const {
    data: readNotifications,
    isLoading: isReadNotificationLoading,
    isError: isReadNotificationIsError,
    error: ReadNotificationError,
    isPreviousData: isReadNotificationPreviousData,
  } = useNotifications({ isRead: true, keepPreviousData, page })

  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: markAllNotificationsAsRead,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['notifications'],
      })
    },
  })

  useEffect(() => {
    setCurrentNotifications(
      currentTab === NotificationKind.UNREAD
        ? unReadNotifications
        : readNotifications
    )
  }, [currentTab, readNotifications, unReadNotifications])

  useEffect(
    () => () => {
      mutate()
    },
    [mutate]
  )

  if (isUnReadNotificationsLoading || isReadNotificationLoading) {
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    )
  }

  if (isUnReadNotificationsError || isReadNotificationIsError) {
    if (ReadNotificationError instanceof AxiosError)
      return (
        <div className={styles.loaderContainer}>
          <ErrorMessage
            title='Oops! Something went wrong!'
            buttonContent='Refresh'
            imageUrl={CloudImage}
            btnHandler={() => router.reload()}
            message={ReadNotificationError?.response?.data?.message}
          />
        </div>
      )
  }

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h2
          onClick={() => setCurrentTab(NotificationKind.UNREAD)}
          className={
            currentTab === NotificationKind.UNREAD ? styles.activeHeading : ''
          }
        >
          Unread Notifications
        </h2>
        <h2
          onClick={() => setCurrentTab(NotificationKind.READ)}
          className={
            currentTab === NotificationKind.READ ? styles.activeHeading : ''
          }
        >
          Read Notifications
        </h2>
      </div>
      <div className={styles.notificationsContainer}>
        {currentNotifications &&
          currentNotifications.count > 0 &&
          currentNotifications.notifications.map((notification) => (
            <Link href={`/tickets/${notification.orderId}`} key={nanoid()}>
              <div className={styles.notificationContainer}>
                <p className={styles.notificationMessage}>
                  {notification.content}
                </p>
                <div className={styles.notificationTime}>
                  <p>{new Date(notification.createdAt).getTime()}</p> |{' '}
                  <p>{new Date(notification.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>

      <ReusablePagination
        page={page}
        setPage={setPage}
        pageSize={currentNotifications?.pageSize}
        totalRecords={currentNotifications?.count}
        hasMore={currentNotifications?.hasMore}
        isPreviousData={
          currentTab === NotificationKind.UNREAD
            ? isUnReadNotificationsPreviousData
            : isReadNotificationPreviousData
        }
      />
    </div>
  )
}
Notifications.auth = true
Notifications.title = 'Notifications'
export default Notifications
