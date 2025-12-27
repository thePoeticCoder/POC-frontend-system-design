export const sectionHFormsData = [
  {
    name: 'hospitalBasicDetails.ownership',
    type: 'select',
    label: 'Ownership:',
    isViewOnly: false,
    isHide: false,
    options: [
      { key: 'Trust', value: 'Trust' },
      { key: 'Mission', value: 'Mission' },
      { key: 'Private', value: 'Private' },
      { key: 'Government', value: 'Government' },
    ],
  },
  {
    name: 'hospitalBasicDetails.fieldsOfMedicene',
    type: 'multiselect',
    label: 'Field of medicine:',
    isViewOnly: false,
    isHide: false,
    multiSelectOption: [
      {
        value: 'ALLOPATHY',
        name: 'ALLOPATHY',
        label: 'ALLOPATHY',
        availability: true,
      },
      {
        value: 'AYURVEDIC',
        name: 'AYURVEDIC',
        label: 'AYURVEDIC',
        availability: true,
      },
      {
        value: 'HOMOEOPATHY',
        name: 'HOMOEOPATHY',
        label: 'HOMOEOPATHY',
        availability: true,
      },
    ],
  },
  {
    name: 'hospitalBasicDetails.accredition',
    type: 'multiselect',
    label: 'Accredition:',
    isViewOnly: false,
    isHide: false,
    multiSelectOption: [
      {
        label: 'NABH (Pre entry)',
        name: 'NABH_PRE_ENTRY',
        value: 'NABH_PRE_ENTRY',
        availability: true,
      },
      {
        label: 'NABH (Higher)',
        name: 'NABH_HIGHER',
        value: 'NABH_HIGHER',
        availability: true,
      },
      {
        label: 'ISO',
        name: 'ISO',
        value: 'ISO',
        availability: true,
      },
      { label: 'JCI', name: 'JCI', value: 'JCI', availability: true },
      { label: 'NABL', name: 'NABL', value: 'NABL', availability: true },
      {
        label: 'NQAC/NHSRC (Pre entry)',
        name: 'NQAC_OR_NHSRC_PRE_ENTRY',
        value: 'NQAC_OR_NHSRC_PRE_ENTRY',
        availability: true,
      },
      {
        label: 'NQAC/NHSRC (Higher)',
        name: 'NQAC_OR_NHSRC_Higher',
        value: 'NQAC_OR_NHSRC_Higher',
        availability: true,
      },
    ],
  },
]
