import styles from '../styles/ticketStatusCard.module.css'
import { ticketStatusCardType } from '../types'
import TickIcon from './icons/TickIcon'
import { OrderStatus } from '../constants'

const TicketStatusCard = ({ status, time }: ticketStatusCardType) => {
  let nextStep
  switch (status) {
    case OrderStatus.WAITING_FOR_INTIMATION_DOCUMENTS:
      nextStep = 'Upload Intimation Docs'
      break
    case OrderStatus.WAITING_FOR_PRIMARY_APPROVAL:
      nextStep = 'Primary Approval'
      break
    case OrderStatus.WAITING_FOR_ADMISSION_DOCUMENTS:
      nextStep = 'Upload Admission Docs'
      break
    case OrderStatus.WAITING_FOR_DISCHARGE_DOCUMENTS:
      nextStep = 'Upload Discharge Docs'
      break
    case OrderStatus.ADMISSION_DOCS_UPLOADED:
      nextStep = 'Waiting For SD'
      break
    case OrderStatus.SD_PAYOUT_GENERATED:
      nextStep = 'Upload Discharge Docs'
      break
    case OrderStatus.DISCHARGE_DOCUMENTS_RECEIVED:
      nextStep = 'Waiting For Final Payout'
      break
    case OrderStatus.FINAL_PAYOUT_ACCEPTED:
      nextStep = 'CLOSED'
      break
  }
  const backgroundColor =
    status === OrderStatus.ORDER_CLOSED ? '#B9D09B' : '#FF7056'
  const currentStatus =
    status === OrderStatus.ORDER_CLOSED
      ? OrderStatus.ORDER_APPROVED
      : status === OrderStatus.ORDER_CANCELLED
      ? OrderStatus.ORDER_CANCELLED
      : OrderStatus.ORDER_PENDING
  return (
    <div style={{ backgroundColor }} className={styles.container}>
      {status !== OrderStatus.ORDER_CLOSED ? (
        <div
          className={`${styles.iconContainer} ${styles.pendingIconContainer}`}
        >
          !
        </div>
      ) : (
        <div
          className={`${styles.iconContainer} ${styles.successIconContainer}`}
        >
          <TickIcon height={21} width={28} color={'white'} />
        </div>
      )}
      <div className={styles.secondaryContainer}>
        <div className={styles.topStats}>
          <div>
            <p className={styles.statusText}>Status:</p>
            <p className={styles.value}>{currentStatus}</p>
          </div>
          {time ? (
            <div>
              <p>Time</p>
              <p className={styles.value}>{time}</p>
            </div>
          ) : null}
        </div>
        {nextStep && status !== 'CANCELLED' ? (
          <div>
            <p>Next Step</p>
            <p className={styles.value}>{nextStep}</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default TicketStatusCard
