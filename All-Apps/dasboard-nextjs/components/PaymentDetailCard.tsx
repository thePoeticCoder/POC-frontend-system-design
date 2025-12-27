import { useRef, useState } from 'react'
import styles from '../styles/paymentDetailCard.module.css'
import { PaymentWithIndex } from '../types'
import CheckIcon from './icons/CheckIcon'
import DownloadIcon from './icons/DownloadIcon'
import HelpIcon from './icons/HelpIcon'
import PaymentDetailModal from './PaymentDetailModal'
import { orderConstants } from '../constants'
import { FormatDate, getHoursAndMinutes } from '../utils/utils'
import jsPDF from 'jspdf'
import { PaymentPdf } from './PaymentPdf'
import Button from './Button'
import CrossIcon from './icons/CrossIcon'
const PaymentDetailCard = ({ payment, index }: PaymentWithIndex) => {
  const { amount, totalAmountRequestedByCustomer, UTR, UTRDate } = payment
  const paymentPdfContainer = useRef<HTMLInputElement>(null)
  const doc = new jsPDF({
    format: 'a3',
    unit: 'px',
  })
  const formattedDate = FormatDate(UTRDate)
  const time = getHoursAndMinutes(UTRDate)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const toggleModalDisplay = () => {
    setShowDetailsModal((prev) => !prev)
  }
  let isAmOrPm
  let modifiedHours
  if (time) {
    isAmOrPm = Number(time?.hours) >= 12 ? 'PM' : 'AM'
    modifiedHours = Number(time?.hours) % 12
    modifiedHours = modifiedHours ? modifiedHours : 12
  }
  const timeToShow = `${modifiedHours}:${time?.minutes} ${isAmOrPm}`
  const dateToShow = `${formattedDate?.day + ' '}${formattedDate?.month + ' '}${
    formattedDate?.year
  }`

  const togglePdfViewer = () => {
    setIsShowPdfView((prev) => !prev)
  }
  const paymentsData = {
    amount,
    utr: UTR,
    dateToShow,
    timeToShow,
  }

  const downloadPdfHandler = () => {
    paymentPdfContainer.current
      ? doc.html(paymentPdfContainer.current, {
          callback(doc) {
            doc.save(`${index === 1 ? 'Security Deposit' : 'Final Payout'}`)
          },
        })
      : null
  }

  let backgroundColor =
    totalAmountRequestedByCustomer || totalAmountRequestedByCustomer == 0
      ? '#F9EDDC'
      : '#F1F6EB'
  const cardStyle = `${styles.container} ${styles.marginRight}`
  const [isShowPdfView, setIsShowPdfView] = useState<boolean>(false)
  return (
    <div id='abc' style={{ backgroundColor }} className={`${cardStyle}`}>
      {isShowPdfView ? (
        <div className='modal-bg'>
          <div className='modal-container'>
            <div ref={paymentPdfContainer}>
              <PaymentPdf
                title={`${index === 1 ? 'Security Deposit' : 'Final Payout'}`}
                paymentsData={paymentsData}
              />
            </div>
            <div onClick={togglePdfViewer}>
              <CrossIcon
                className={styles.closeIcon}
                height={16}
                width={16}
                color='#F36F59'
              />
            </div>
            <Button
              content='Download'
              buttonType='button'
              isDisabled={false}
              className={styles.downloadBtn}
              handleClick={downloadPdfHandler}
            />
          </div>
        </div>
      ) : null}
      {showDetailsModal ? (
        <PaymentDetailModal
          utrn={UTR}
          date={dateToShow}
          bankDetails={'-'}
          amount={amount}
          time={timeToShow}
          title={
            totalAmountRequestedByCustomer
              ? orderConstants.ESTIMATE_AMOUNT
              : `Payment${index}`
          }
          toggleModalDisplay={toggleModalDisplay}
        />
      ) : null}
      <p className={styles.amount}>
        {`₹ ${
          totalAmountRequestedByCustomer
            ? totalAmountRequestedByCustomer
            : amount
        }/-`}
        {!totalAmountRequestedByCustomer ? (
          <CheckIcon className={styles.checkIcon} width={21} height={21} />
        ) : null}
      </p>
      <p>
        {totalAmountRequestedByCustomer
          ? orderConstants.ESTIMATE_AMOUNT
          : `Payment ${index}`}
      </p>
      {amount ? (
        <div className={styles.iconsContainer}>
          <div onClick={toggleModalDisplay}>
            <HelpIcon width={15} height={15} color='#053233' />
          </div>
          <div onClick={togglePdfViewer}>
            <DownloadIcon width={14} height={17} color='#003032' />
          </div>
        </div>
      ) : null}
    </div>
  )
}
export default PaymentDetailCard
