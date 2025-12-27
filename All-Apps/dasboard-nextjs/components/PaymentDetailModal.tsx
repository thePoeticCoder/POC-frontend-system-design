import styles from '../styles/paymentDetailModal.module.css'
import { paymentDetailModalType } from '../types'
import CrossIcon from './icons/CrossIcon'

const PaymentDetailModal = ({
  toggleModalDisplay,
  title,
  utrn,
  date,
  time,
  amount,
  bankDetails,
}: paymentDetailModalType) => {
  return (
    <div className='modal-bg'>
      <div className={'modal-container ' + styles.container}>
        <h3 className={styles.heading}>{title} Details</h3>

        <div className={styles.dataContainer}>
          {/* // TODO: Separate this into a component */}
          <div>
            <div>
              <p className={styles.value}>{utrn}</p>
              <p className={styles.key}>UTRN</p>
            </div>
            <div>
              {date ? <p className={styles.value}>{date}</p> : null}
              <p className={styles.key}>Date</p>
            </div>
            {time ? (
              <div>
                <p className={styles.value}>{time}</p>
                <p className={styles.key}>Time </p>
              </div>
            ) : null}
          </div>
          <div>
            <div>
              <p className={styles.value}>{amount}/-</p>
              <p className={styles.key}>Amount</p>
            </div>
            <div>
              <p className={styles.value}>{bankDetails}</p>
              <p className={styles.key}>Bank Details</p>
            </div>
          </div>
        </div>
        <div className={styles.closeIcon} onClick={toggleModalDisplay}>
          <CrossIcon height={16} width={16} color='#F36F59' />
        </div>
      </div>
    </div>
  )
}

export default PaymentDetailModal
