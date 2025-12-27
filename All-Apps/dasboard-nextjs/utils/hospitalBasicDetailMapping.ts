export const getMappedValue = (name: string) => {
  switch (name) {
    case 'NABH_PRE_ENTRY':
      return 'NABH (Pre entry)'
    case 'NABH_HIGHER':
      return 'NABH (Higher)'
    case 'ISO':
      return 'ISO'
    case 'JCI':
      return 'JCI'
    case 'NABL':
      return 'NABL'
    case 'NQAC_OR_NHSRC_PRE_ENTRY':
      return 'NQAC/NHSRC (Pre entry)'
    case 'NQAC_OR_NHSRC_Higher':
      return 'NQAC/NHSRC (Higher)'
    default:
      ''
  }
}
