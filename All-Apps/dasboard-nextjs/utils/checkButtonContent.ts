export const checkButtonContent = (orderStatus: string | undefined) => {
  switch (orderStatus) {
    case 'DISCHARGE_DOCUMENTS_RECEIVED':
      return 'Under Process'
    default:
      return ''
  }
}
