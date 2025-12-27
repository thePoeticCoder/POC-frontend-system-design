export type { DropDownType, OptionType } from './dropDown.type'
export type { inputType } from './input.type'
export type {
  ReactChildren,
  ReactChangeEvent,
  ReactButtonClickEvent,
  ReactDivClickEvent,
  ReactInputChangeEvent,
  voidFunctionType,
} from './common.types'

export type { SearchBarType } from './searchbar.type'

export type { ButtonType } from './button.type'

export type { ClaimDetailsType } from './claimDetails.type'

export type { editUserCard } from './editUserCard.type'

export type { NotificationModalType } from './notificationModal.type'

export type { paymentDetailCardType } from './paymentDetailCard.type'

export type { paymentDetailModalType } from './paymentDetailModal.type'

export type { ticketProfileCardType } from './ticketProfileCard.type'

export type { ticketStatusCardType } from './ticketStatusCard.type'

export type { IconType } from './icon.type'

export type { BadgeType } from './badge.type'

export type { timelineDetailcardType } from './timelineDetailcard.type'

export type { queryCardType } from './queryCard.type'

export type {} from './ticketTimeline.type'
import { AxiosError } from 'axios'
import { OrderStatus } from '../constants'
import { fileTypes } from './../constants/constants'
export type Docs = {
  userFileCollectionId: string
  bucketId: string
  directoryPath: string
  url: string
  userDocType: string
  userFileDisplayName: string
  userFileLongName: string
  userCollectionId: string
  tag: string
}

export type Payment = {
  payoutLink?: string
  amount?: number
  UTR?: string | null
  UTRDate?: Date | null
  bankName?: string
  totalAmountRequestedByCustomer?: number
}

export type PaymentWithIndex = {
  payment: Payment
  index: number
  isFinalPayout: boolean
}

export type DocObj = {
  'Doctor Advice': string | null
  'Additional Docs': string | null
  'Prescription Bill': string | null
  'Discharge Summary': string | null
  'Final Itemised Bill': string | null
  'Hospital Estimate': string | null
  'Lab Report': string | null
  Prescription: string | null
}

export type User = {
  phoneNo: string
  emailId: string
  hubspotContactId: string
  name: string
}

export type UserProp = {
  hubspotTicketId: string | null
  userDetails: User
  orderStatus: String
}

export type Payout = {
  payoutLink: string

  amount: number

  UTR: string | null

  UTRDate: Date | null
}

export type DocumentStatus = { [name: string]: 'VALID' | 'INVALID' }

export type Details = {
  securityDeposit: number
  hubspotTicketId: string | null
  address: {
    addressName: string
    isPrimary: boolean
    addressLine1: string
    buildingOrFlatNo: string
    addressLine2: string
    district: string
    city: string
    state: string
    country: string
    pincode: number
    addressType: string
    landmark: string
    addressGeoLocation: string
  }
  securityDepositPayout: Payout
  finalPayout: Payout
  intimationDocuments: Docs[]
  dischargeDocuments: Docs[]
  totalAmount: number
  createdAt: Date
  intimationDocumentStatus: DocumentStatus
  dischargeDocumentStatus: DocumentStatus
  intimationAdditionalComments: string
  dischargeAdditionalComments: string
  admissionDate: Date
  dischargeDate: Date
  masterUser: User
  orderStatus: OrderStatus
  claimInitiatedAt: Date
  totalAmountRequestedByCustomer: number
  userCollectionId: string
}

export type DetailsResponseType = {
  status: string
  data: Details | undefined
  error: any
}
