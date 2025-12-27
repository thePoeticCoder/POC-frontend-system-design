import Link from 'next/link'
import { nanoid } from 'nanoid'
import styles from '../styles/notificationModal.module.css'
import GreenCrossIcon from './icons/GreenCrossIcon'
import MailIcon from './icons/MailIcon'
import { useNotifications } from '../hooks/index'
import Loader from './Loader'
import { NotificationModalType } from '../types'

const NotificationModal = ({ toggleModalDisplay }: NotificationModalType) => {
  const { data, isError, isLoading } = useNotifications({})
  const messages: string[] = [] as string[]

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.closeIcon} onClick={toggleModalDisplay}>
          <GreenCrossIcon />
        </div>
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className={styles.container}>
        <div className={styles.closeIcon} onClick={toggleModalDisplay}>
          <GreenCrossIcon />
        </div>
        <div className={styles.notificationContent}>
          <p>Couldn't fetch notifications</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {messages.length > 0 && (
        <>
          <h3 className={styles.notificationType}></h3>
          {messages?.map((ele: any) => (
            <div className={styles.singleNotificationContainer} key={nanoid()}>
              <MailIcon
                color='#9D9D9D'
                className={styles.mailIcon}
                height={15}
                width={15}
              />
              <div>
                <h4 className={styles.notificationHeading}>{ele.heading}</h4>
                <p className={styles.notificationContent}>{ele.content}</p>
              </div>
            </div>
          ))}
        </>
      )}
      <>
        <h3 className={styles.notificationType}>Updates ({data.count})</h3>
        {/* // * Showing only  latest 5 updates */}
        {data.count === 0 ? (
          <p className={`${styles.notificationContent} ${styles.emptyContent}`}>
            No new updates
          </p>
        ) : (
          data.notifications.slice(0, 5).map((ele) => (
            <div className={styles.singleNotificationContainer} key={nanoid()}>
              <MailIcon
                color='#9D9D9D'
                className={styles.mailIcon}
                height={15}
                width={15}
              />
              <div>
                <Link href={`/tickets/${ele.orderId}`}>
                  <a
                    className={styles.notificationContent}
                    onClick={toggleModalDisplay}
                  >
                    {ele.content}
                  </a>
                </Link>
              </div>
            </div>
          ))
        )}
      </>
      <div className={styles.closeIcon} onClick={toggleModalDisplay}>
        <GreenCrossIcon />
      </div>
      <div className={styles.linkContainer} onClick={toggleModalDisplay}>
        <Link href={'/notifications'}>
          <a className={styles.link}>View All</a>
        </Link>
      </div>
    </div>
  )
}

export default NotificationModal
