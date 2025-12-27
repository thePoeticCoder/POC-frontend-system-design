import styles from '../styles/claimDetails.module.css'
import { ClaimDetailsType } from '../types'
import { DateDisplay } from './DateDisplay'
import { FormatDate, isDateEditable } from '../utils/utils'
import EditIcon from './icons/EditIcon'
import { dateFormat, getNextDay } from '../utils/getFormattedDate'
import { format } from 'date-fns'

const ClaimDetails = ({
  initiationDate,
  admissionDate,
  dischargeDate,
  shouldShowEditClaimModal,
  status,
}: ClaimDetailsType) => {
  const formattedInitiationDate = FormatDate(initiationDate)
  const formattedAdmissionDate = format(new Date(admissionDate), 'dd MMM yyyy')
  const formattedDischargeDate = format(new Date(dischargeDate), 'dd MMM yyyy')

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Claim Details</h3>
      {/* //DONE: Separate this into a component, rather than repeating the same code */}
      <div className={styles.datesContainer}>
        <DateDisplay
          title='Claim initiated on'
          date={dateFormat(formattedInitiationDate)}
        />
        <div className={styles.verticalLine}></div>
        <DateDisplay title='Admission Date' date={formattedAdmissionDate} />
        <div className={styles.verticalLine}></div>
        <DateDisplay title='Discharge Date' date={formattedDischargeDate} />
      </div>
      {/* // * Phase 2 feature */}
      {isDateEditable(admissionDate, dischargeDate) &&
      status !== 'CLOSED' &&
      status !== 'FINAL_PAYOUT_ACCEPTED' &&
      status !== 'APPROVED' ? (
        <div className={styles.editIcon} onClick={shouldShowEditClaimModal}>
          <EditIcon height={23} width={23} />
        </div>
      ) : null}
    </div>
  )
}

export default ClaimDetails
