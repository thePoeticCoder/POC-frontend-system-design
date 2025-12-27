import { voidFunctionType } from './common.types'
type DateFormat = { day: string; month: string; year: string }

type paymentDetailModalType = {
  toggleModalDisplay: voidFunctionType
  title: string
  utrn: string | null | undefined
  date: string
  time: string
  amount: number | undefined
  bankDetails: string
}

export type { paymentDetailModalType }
