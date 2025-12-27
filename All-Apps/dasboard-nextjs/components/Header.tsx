import { useRouter } from 'next/router'
import { useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import styles from '../styles/header.module.css'
import EditIcon from './icons/EditIcon'
import NotificationIcon from './icons/NotificationIcon'
import NotificationBadge from './NotificationBadge'
import NotificationModal from './NotificationModal'

const Header = () => {
  const router = useRouter()
  const [showNotificationModal, setShowNotificationModal] = useState(false)
  const toggleModalDisplay = () => {
    setShowNotificationModal((prev) => !prev)
  }
  const {
    hospitalName,
    hospitalAddress: { area, city, state },
  } = useAuth()

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.partnerName}>
          {hospitalName ? <h1>{hospitalName}</h1> : <p>No data available.</p>}
          <div
            className='pointer'
            onClick={() => router.push('/update-details')}
          >
            <EditIcon height={24} width={24} />
          </div>
        </div>
        {area && city && state ? (
          <p className={styles.partnerAddress}>
            {area}, {city}, {state}
          </p>
        ) : (
          <p>No data available.</p>
        )}
      </div>
      <div className={styles.notificationContainer}>
        <div onClick={toggleModalDisplay}>
          <NotificationIcon
            className={styles.notificationIcon}
            color='#003032'
            height={30}
            width={30}
          />
          <NotificationBadge className={styles.notificationBadge} />
        </div>
        {showNotificationModal && (
          <NotificationModal toggleModalDisplay={toggleModalDisplay} />
        )}
      </div>
    </div>
  )
}

export default Header
