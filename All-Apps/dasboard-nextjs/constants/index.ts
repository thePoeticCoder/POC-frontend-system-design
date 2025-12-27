// DONE: All characters must be in UPPERCASE for constants

export const openTicketsFiltersOptions = [
  {
    option: 'Customer Name',
    value: 'customerName',
  },
  {
    option: 'Status',
    value: 'orderStatus',
  },
  {
    option: 'Kenko ID',
    value: 'kenkoId',
  },
]

export const closeTicketsFiltersOptions = [
  {
    option: 'Customer Name',
    value: 'customerName',
  },
  {
    option: 'Customer Id',
    value: 'kenkoId',
  },
]

export const paymentsFiltersOptions = [
  { option: 'Customer Name', value: 'name' },
  { option: 'Customer Id', value: 'customerId' },
  { option: 'UTRN', value: 'utrn' },
]

export enum OrderStatus {
  ORDER_CLOSED = 'CLOSED',
  ORDER_APPROVED = 'Approved',
  ORDER_PENDING = 'Pending',
  ORDER_OPEN = 'OPEN',
  ORDER_CANCELLED = 'CANCELLED',

  WAITING_FOR_INTIMATION_DOCUMENTS = 'WAITING_FOR_INTIMATION_DOCUMENTS',
  WAITING_FOR_PRIMARY_APPROVAL = 'WAITING_FOR_PRIMARY_APPROVAL',
  WAITING_FOR_ADMISSION_DOCUMENTS = 'WAITING_FOR_ADMISSION_DOCUMENTS',
  WAITING_FOR_DISCHARGE_DOCUMENTS = 'WAITING_FOR_DISCHARGE_DOCUMENTS',
  ADMISSION_DOCS_UPLOADED = 'ADMISSION_DOCS_UPLOADED',
  SD_PAYOUT_GENERATED = 'SD_PAYOUT_GENERATED',
  DISCHARGE_DOCUMENTS_RECEIVED = 'DISCHARGE_DOCUMENTS_RECEIVED',
  FINAL_PAYOUT_ACCEPTED = 'FINAL_PAYOUT_ACCEPTED',
  CLOSED = 'CLOSED',
}

export const orderConstants = {
  ESTIMATE_AMOUNT: 'Estimate Amount',
}
export const REFETCH_INTERVAL = 1000 * 60
