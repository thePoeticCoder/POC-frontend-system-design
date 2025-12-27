export type PaymentsRowType = {
  orderId: string
  hubspotContactId: string
  name: string
  admissionDate: string
  dischargeDate: string
  securityDeposit: number
  UTRN1: string
  estimateAmount: number
  dischargeSettlement: number
  UTRN2: string
  claimId: string
}

export type SecurityDepositType = {
  payoutLink: string
  amount: number
  UTR: string
  UTRDate: Date
}
export type FinalPayoutType = {
  payoutLink: string
  amount: number
  UTR: string
  UTRDate: Date
}

export type PaginatedData = {
  admissionCompleted: number
  totalOrdersCount: number
  pageNo: number
  pageSize: number
}

export type PaymentMetaDataType = {
  _id: null
  admissionCompleted: number
  valueProcessed: number
}

export type PaymentsDataType = {
  _id: string
  hubspotTicketId: string
  hubspotContactId: string
  reimbursementAmount: number
  admissionDate: string
  dischargeDate: string
  securityDepositPayout: SecurityDepositType
  finalPayout: FinalPayoutType
  name: string
}

export type PaymentResponseType = {
  paginationMetaData: PaginatedData[]
  paymentsData: PaymentsDataType[]
  paymentsMetaData: PaymentMetaDataType[]
}
