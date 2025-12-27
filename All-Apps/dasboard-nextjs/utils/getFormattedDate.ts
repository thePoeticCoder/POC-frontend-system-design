import { ONE_DAY_SECONDS } from '../constants/constants'

export const getNextDayTimeInSeconds = (date: Date | undefined | null) => {
  const tempDate = date ? new Date(date) : null
  const nextDate = tempDate ? tempDate.setDate(tempDate.getDate() + 1) : null
  const newDate = nextDate ? new Date(nextDate) : null
  return newDate ? Math.floor(newDate.getTime() / 1000.0) : 0
}

export const getNextDay = (date: Date | null | undefined) => {
  const tempDate = date ? new Date(date) : null
  const nextDate = tempDate ? tempDate.setDate(tempDate.getDate() + 1) : null
  const newDate = nextDate ? new Date(nextDate) : null
  return newDate
}

export const getPreviousDay = (date: Date | undefined) => {
  const tempDate = date ? new Date(date) : null
  const nextDate = tempDate ? tempDate.setDate(tempDate.getDate() - 1) : null
  const newDate = nextDate ? new Date(nextDate) : undefined
  return newDate
}

export const getDateTimeStamp = (newDate: Date | undefined) => {
  return newDate ? Math.floor(newDate.getTime() / 1000.0) : 0
}

export const convertToDate = (date: Date | undefined) => {
  return typeof date === 'string' ? getPreviousDay(date) : date
}

export const checkDateType = (date: Date | undefined) => {
  return typeof date === 'string' ? new Date(date) : date
}

export const finalTimeStamp = (inputDate: Date) => {
  const dateTimeStamp =
    typeof inputDate === 'string'
      ? new Date(inputDate).getTime() / 1000
      : inputDate.getTime() / 1000
  return dateTimeStamp
}

export const dateFormat = (
  date:
    | {
        day: string
        month: string
        year: string
      }
    | undefined
) => {
  const dateToShow = `${date?.day} ${date?.month} ${date?.year}`
  return dateToShow
}

export const isDateDisable = (
  date: Date,
  initialDate: Date | undefined | null
) => {
  return initialDate ? date.getTime() < initialDate?.getTime() : false
}

export const isClaimDateDisable = (
  date: Date,
  initialDate: Date | undefined | null
) => {
  return initialDate ? date.getTime() <= initialDate?.getTime() : false
}
