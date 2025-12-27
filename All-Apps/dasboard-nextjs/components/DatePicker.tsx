import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { DatePickerType } from '../types/dateInputProp.types'
import { getPreviousDay } from '../utils/getFormattedDate'

const DatePicker = ({
  toggleDisplay,
  setSelectedDay,
  selectedDay,
  initialDate,
  isDateDisable,
}: DatePickerType) => {
  const todayDate = new Date()
  const handler = (value: Date) => {
    setSelectedDay(value)
    toggleDisplay()
  }
  return (
    <DayPicker
      defaultMonth={
        initialDate
          ? new Date(initialDate.getFullYear(), initialDate.getMonth() + 1)
          : new Date(todayDate.getFullYear(), todayDate.getMonth())
      }
      disabled={isDateDisable}
      mode='single'
      selected={selectedDay ? selectedDay : undefined}
      onSelect={(value: Date | undefined) => {
        value ? handler(value) : null
      }}
    />
  )
}

export default DatePicker
