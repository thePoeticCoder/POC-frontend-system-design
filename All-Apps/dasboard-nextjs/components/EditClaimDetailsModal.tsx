import styles from '../styles/editClaimDetails.module.css'
import Button from './Button'
import { useState } from 'react'
import { voidFunctionType } from '../types'
import CrossIcon from './icons/CrossIcon'
import DateInput from './DateInput'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateClaimDetails } from '../hooks/useUpdateClaimDetails'
import { useRouter } from 'next/router'
import { getPreviousDay, isClaimDateDisable } from '../utils/getFormattedDate'
import { checkDateType, isClaimDetailsButtonDisable } from '../utils/utils'
import { useAuth } from '../providers/AuthProvider'
import { AxiosError } from 'axios'

type EditClaimDetailsModalType = {
  toggleModalDisplay: voidFunctionType
  admissionDate: Date | undefined
  dischargeDate: Date | undefined
}

type OrderDateType = {
  date: Date | undefined
  error: string
}

const EditClaimDetailsModal = ({
  toggleModalDisplay,
  admissionDate,
  dischargeDate,
}: EditClaimDetailsModalType) => {
  const [admissionDateData, setAdmissionDateData] = useState<OrderDateType>({
    date: admissionDate,
    error: '',
  })
  const [dischargeDateData, setDischargeDateData] = useState<OrderDateType>({
    date: dischargeDate,
    error: '',
  })
  const queryClient = useQueryClient()
  const { hospitalId } = useAuth()
  const {
    query: { orderId },
  } = useRouter()

  const setAdmissionDate = (date: Date) => {
    setAdmissionDateData((prev) => ({ ...prev, date }))
    const isAdmissionDateBig = dischargeDateData.date
      ? date.getTime() > new Date(dischargeDateData?.date).getTime()
        ? true
        : false
      : false
    isAdmissionDateBig
      ? setDischargeDateData((prev) => ({
          ...prev,
          error: "Discharge date can't be before admission date",
        }))
      : setDischargeDateData((prev) => ({
          ...prev,
          error: '',
        }))
  }
  const setDischargeDate = (date: Date) => {
    setDischargeDateData({ date, error: '' })
  }

  const { mutate, isLoading, error } = useMutation({
    mutationFn: updateClaimDetails,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['order-details', orderId, hospitalId],
      })
      toggleModalDisplay()
    },
  })

  const submitHandler = () => {
    mutate({
      dates: {
        ...{
          admissionDate: admissionDateData.date,
          dischargeDate: dischargeDateData.date,
        },
      },
      orderId,
      hospitalId,
    })
  }

  return (
    <div className='modal-bg'>
      <div className={'modal-container ' + styles.container}>
        {error instanceof AxiosError ? (
          <p className={styles.errorMsg}>{error.message}</p>
        ) : (
          <div className={styles.subContainer}>
            <h3 className={styles.heading}>Claim Details</h3>
            <label className={styles.label}>
              <p>Admission Date</p>
              <DateInput
                isDisableInput={false}
                isDateDisable={(date: Date) =>
                  isClaimDateDisable(date, getPreviousDay(admissionDate))
                }
                datePickerContainerStyle={styles.datePickerContainer}
                placeholder='DD/MM/YY'
                container={styles.dateInputContainer}
                setDate={setAdmissionDate}
                initialDate={getPreviousDay(admissionDate)}
                date={checkDateType(admissionDateData.date)}
              />
            </label>
            <label className={styles.label}>
              <p>Discharge Date</p>
              <div className={styles.dateInputDiv}>
                <DateInput
                  isDateDisable={(date: Date) =>
                    isClaimDateDisable(
                      date,
                      getPreviousDay(admissionDateData.date)
                    )
                  }
                  isDisableInput={false}
                  datePickerContainerStyle={styles.datePickerContainer}
                  placeholder='DD/MM/YY'
                  container={styles.dateInputContainer}
                  setDate={setDischargeDate}
                  initialDate={getPreviousDay(dischargeDate)}
                  date={dischargeDateData.date}
                />
                {dischargeDateData.error ? (
                  <p className={styles.smallErrorMsg}>
                    {dischargeDateData.error}
                  </p>
                ) : null}
              </div>
            </label>
            <Button
              isDisabled={
                dischargeDateData.error
                  ? true
                  : isClaimDetailsButtonDisable({
                      initialAdmissionDate: admissionDate,
                      initialDischargeDate: dischargeDate,
                      orderDates: {
                        admissionDate: admissionDateData.date,
                        dischargeDate: dischargeDateData.date,
                      },
                    })
              }
              handleClick={submitHandler}
              content='Submit'
              className={styles.submitBtn}
            />
          </div>
        )}
        <div onClick={toggleModalDisplay}>
          <CrossIcon
            className={styles.closeIcon}
            height={16}
            width={16}
            color='#F36F59'
          />
        </div>
      </div>
    </div>
  )
}

export default EditClaimDetailsModal
