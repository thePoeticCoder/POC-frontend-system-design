import { FamilyDependantType, UserAddressType } from './newAdmission.types'

export type UserDetailsType = {
  age: number
  category: string
  emailId: string
  familyDependents: FamilyDependantType[]
  addresses: UserAddressType[]
  hubspotContactId: string
  name: string
  phoneNo: number
  pincode: number
  userPlanCollectionId: string
  userPlanDetails: UserPlanDetailType[]
  userPlanName: string
  userPreferredLanguage: string
  userProfession: null
  userStatus: string
  _id: string
}

export type UserPlanDetailType = {
  _id: string
  userFamilyDependents: string[]
  addOnMeta: []
  userCollectionId: string
  userPlanDescription: string
  userBasePlanName: string
  userPlanSubscriptionDate: string
  userPlanTotalDuration: number
  userPlanTotalPrice: number
  userPlanActiveQuestionaire: string
  userPlanIsActive: true
  createdAt: string
  updatedAt: string
  __v: number
  isOrderAllowed: boolean
  isPaymentPending: boolean
  nextInvoiceId: null
  nextInvoiceUrl: null
  planExpiryDate: null
  recurringProfileId: null
  userPlanSubscriptionDueDate: string
  isBannerVisible: boolean
  updatedBy: string
}
