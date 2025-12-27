import { useState } from 'react'
import styles from '../styles/dateInput.module.css'
import DatePicker from './DatePicker'
import { format } from 'date-fns'
import CalendarIcon from './icons/CalendarIcon'
import { DateInputPropType } from '../types/dateInputProp.types'
import { useClickOutside } from '../hooks/useClickOutside'
import { checkDateType } from '../utils/utils'

const DateInput = ({
  placeholder,
  setDate,
  date,
  initialDate,
  container,
  datePickerContainerStyle,
  isDateDisable,
  isDisableInput,
}: DateInputPropType) => {
  const [showDatePicker, setShowDatePicker] = useState(false)
  const datePickerRef = useClickOutside(() => setShowDatePicker(false))

  const toggleModal = () => {
    setShowDatePicker((prev) => !prev)
  }
  const finalDate = typeof date === 'string' ? checkDateType(date) : date

  return (
    <div className={styles.mainContainer} ref={datePickerRef}>
      <div
        onClick={!isDisableInput ? toggleModal : () => {}}
        className={`${container} ${
          isDisableInput ? styles.disableContainer : ''
        }`}
      >
        {date ? (
          <p className={styles.date}>
            {finalDate ? format(finalDate, 'dd/MM/yyyy') : ''}
          </p>
        ) : (
          <p>{`${placeholder}*`}</p>
        )}
        <div
          className={`${
            isDisableInput
              ? styles.disableContainer
              : styles.calendarIconContainer
          }`}
        >
          <CalendarIcon height={16} width={14} color='#9d9d9d' />
        </div>
      </div>
      {showDatePicker ? (
        <div className={datePickerContainerStyle}>
          <DatePicker
            isDateDisable={isDateDisable}
            initialDate={initialDate ? initialDate : null}
            toggleDisplay={toggleModal}
            selectedDay={date ? new Date(date) : null}
            setSelectedDay={setDate}
          />
        </div>
      ) : null}
    </div>
  )
}

export default DateInput
