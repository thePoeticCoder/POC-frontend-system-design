import Badge from './Badge'
import styles from '../styles/notificationBadge.module.css'
import { useNotifications } from '../hooks/index'

type NotificationProps = {
  className: string
}

const NotificationBadge = ({ className }: NotificationProps) => {
  const { isLoading, isError, data } = useNotifications({})

  if (isLoading || isError || data.count === 0) {
    return null
  }

  return (
    <div>
      <Badge
        content={data.count}
        className={`${styles.notificationBadge} ${styles.badgeStyle} ${className}`}
      />
    </div>
  )
}

NotificationBadge.defaultProps = {
  className: '',
}

export default NotificationBadge
