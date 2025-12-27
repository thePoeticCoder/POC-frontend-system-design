import styles from '../styles/ticketProfileCard.module.css'
import { UserProp } from '../types'
const TicketProfileCard = ({
  userDetails: { phoneNo, emailId, name: userName },
  hubspotTicketId,
  orderStatus,
}: UserProp) => {
  const ticketStatus =
    orderStatus === 'CLOSED'
      ? 'Closed'
      : orderStatus === 'CANCELLED'
      ? 'Cancelled'
      : 'Pending'
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{ticketStatus} Ticket</h2>
      <div className={styles.userDetailsConatiner}>
        <div className={styles.userContact}>
          <h3 className={styles.userName}>{userName}</h3>
          <p>{hubspotTicketId}</p>
          <p>{emailId}</p>
          <p>{phoneNo}</p>
        </div>
      </div>
    </div>
  )
}

export default TicketProfileCard
