export type OpenTicketsType = {
  open: {
    orders: TicketType[]
    paginationMetaData: PaginationMetaDataType
  }
}

export type ClosedTicketsType = {
  closed: {
    orders: TicketType[]
    paginationMetaData: PaginationMetaDataType
  }
}

export type TicketType = {
  orderType: string
  userPlanName: string
  orderStatus: string
  hubspotTicketId: string
  targetFamilyDependentDetails: null
  createdAt: string
  userName: string
  userId: string
  orderId: string
  admissionDate: string
  dischargeDate: string
  claimIntiatedAt: string
}

export type PaginationMetaDataType = {
  totalOrdersCount: number
  pageNo: number
  pageSize: number
}
