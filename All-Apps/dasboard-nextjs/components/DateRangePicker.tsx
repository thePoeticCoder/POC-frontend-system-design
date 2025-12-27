import { DayPicker, DateRange } from 'react-day-picker'
import Button from './Button'
import 'react-day-picker/dist/style.css'
import styles from '../styles/dateRangePicker.module.css'
import { useState } from 'react'
import { DateRangePickerPropType } from '../types/DateRangePickerProps.types'
import { SET_DATE_RANGE } from '../constants/constants'
import { useClickOutside } from '../hooks/useClickOutside'

const DateRangePicker = ({
  dateRange,
  ticketsDispatch,
  toggleDisplay,
}: DateRangePickerPropType) => {
  const [selectedDay, setSelectedDay] = useState<DateRange | undefined>(
    dateRange
  )
  const dayPickerRef = useClickOutside(() => toggleDisplay(false))

  const dateSelectHandler = (value: DateRange | undefined) => {
    setSelectedDay(value)
    ticketsDispatch({
      type: SET_DATE_RANGE,
      payload: { from: value?.from, to: value?.to },
    })
    value?.from !== value?.to && value?.to !== undefined
      ? toggleDisplay((prev) => !prev)
      : ''
  }

  return (
    <div ref={dayPickerRef} className={styles.container}>
      <DayPicker
        className={styles.dateRangePicker}
        mode='range'
        numberOfMonths={2}
        selected={selectedDay}
        onSelect={(value: DateRange | undefined) =>
          value ? dateSelectHandler(value) : setSelectedDay
        }
      />
      <div className={styles.btnContainer}>
        <Button
          className={styles.resetButton}
          content='Reset'
          handleClick={() => {
            ticketsDispatch({
              type: SET_DATE_RANGE,
              payload: { from: undefined, to: undefined },
            })
            toggleDisplay((prev) => !prev)
          }}
        />
      </div>
    </div>
  )
}

export default DateRangePicker
