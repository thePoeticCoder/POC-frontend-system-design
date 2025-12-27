type ClaimDetailsType = {
  initiationDate: Date
  admissionDate: Date
  dischargeDate: Date
  shouldShowEditClaimModal: () => void
  status: string
}

export type { ClaimDetailsType }
