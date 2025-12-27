export const sectionEGeneralFormsData = [
  {
    name: 'hospitalRegistrationDetails.RegisteredNoOfBeds',
    type: 'number',
    label: 'Registered no of beds:',
    isViewOnly: false,
    isHide: false,
  },
  {
    name: 'hospitalRegistrationDetails.hospitalRegistrationNo',
    type: 'text',
    label: 'Hospital Registration No:',
    isViewOnly: false,
    isHide: false,
  },
  {
    name: 'hospitalRegistrationDetails.nameOfRegisteringAuthority',
    type: 'text',
    label: 'Name of registering authority:',
    isViewOnly: false,
    isHide: false,
  },
  {
    name: 'hospitalRegistrationDetails.typesOfFacilities',
    type: 'multiselect',
    label: 'Types of facilities:',
    isViewOnly: false,
    isHide: false,
    multiSelectOption: [
      {
        label: 'OPD',
        name: 'OPD',
        value: 'OPD',
        availability: true,
      },
      {
        label: 'IPD',
        name: 'IPD',
        value: 'IPD',
        availability: true,
      },
      {
        label: 'Casualty/Emergency',
        name: 'CASUALTY_OR_EMERGENCY',
        value: 'CASUALTY_OR_EMERGENCY',
        availability: true,
      },
      {
        label: "24/7 Doctor's Availability",
        name: 'DOCTORS_AVAILABILITY_24_7',
        value: 'DOCTORS_AVAILABILITY_24_7',
        availability: true,
      },
    ],
  },

  {
    name: 'hospitalRegistrationDetails.rohiniId',
    type: 'text',
    label: 'Rohini Id:',
    isViewOnly: false,
    isHide: false,
  },
]

export const sectionECareUnitsFormsData = [
  {
    name: 'count',
    type: 'text',
    label: 'General:',
    isViewOnly: false,
    isHide: false,
  },
  {
    name: 'count',
    type: 'number',
    label: 'Maternity/Labour Room:',
    isViewOnly: false,
    isHide: false,
  },
  {
    name: 'count',
    type: 'number',
    label: 'Specialized:',
    isViewOnly: false,
    isHide: false,
  },
  {
    name: 'count',
    type: 'number',
    label: 'Intensive Care Unit:',
    isViewOnly: false,
    isHide: false,
  },
  {
    name: 'count',
    type: 'number',
    label: 'Intensive Critical Care Unit:',
    isViewOnly: false,
    isHide: false,
  },
  {
    name: 'count',
    type: 'number',
    label: 'Medical ICU:',
    isViewOnly: false,
    isHide: false,
  },
  {
    name: 'count',
    type: 'number',
    label: 'Pediatric ICU:',
    isViewOnly: false,
    isHide: false,
  },
  {
    name: 'count',
    type: 'number',
    label: 'Surgical ICU:',
    isViewOnly: false,
    isHide: false,
  },
]

export const sectionEFacilitiesFormsData = [
  {
    name: 'facilities.parkingFacility',
    type: 'select',
    label: 'Parking Facility:',
    isViewOnly: false,
    isHide: false,
    options: [
      { key: 'Outside Premises', value: 'OUTSIDE PREMISES' },
      { key: 'Within Premises', value: 'WITHIN PREMISES' },
      { key: 'Not Available', value: 'NOT AVAILABLE' },
    ],
  },
  {
    name: 'facilities.accessibility',
    type: 'select',
    label: 'Accessibility (Motor upto premises):',
    isViewOnly: false,
    isHide: false,
    options: [
      { key: 'Yes', value: 'YES' },
      { key: 'No', value: 'NO' },
    ],
  },
  {
    name: 'facilities.codingAndBilling',
    type: 'select',
    label: 'Coding and Billing:',
    isViewOnly: false,
    isHide: false,
    options: [
      { key: 'Yes', value: 'YES' },
      { key: 'No', value: 'NO' },
    ],
  },
]

export const sectionEInternalInfrastructureFormsData = [
  {
    name: 'availability',
    type: 'select',
    label: 'Waiting room:',
    isViewOnly: false,
    isHide: false,
    fieldName: 'WAITING_ROOM',
    options: [
      { key: 'Yes', value: true },
      { key: 'No', value: false },
    ],
  },
  {
    name: 'availability',
    type: 'select',
    label: 'Canteen:',
    isViewOnly: false,
    isHide: false,
    fieldName: 'CANTEEN',
    options: [
      { key: 'Yes', value: true },
      { key: 'No', value: false },
    ],
  },
  {
    name: 'availability',
    type: 'select',
    label: 'Computerized Billing:',
    isViewOnly: false,
    isHide: false,
    fieldName: 'COMPUTERIZED_BILLING',
    options: [
      { key: 'Yes', value: true },
      { key: 'No', value: false },
    ],
  },
  {
    name: 'availability',
    type: 'select',
    label: 'Patient food included in accommodation:',
    isViewOnly: false,
    isHide: false,
    fieldName: 'PATIENT_FOOD_INCLUDED_IN_ACCOMMODATION',
    options: [
      { key: 'Yes', value: true },
      { key: 'No', value: false },
    ],
  },
  {
    name: 'availability',
    type: 'select',
    label: 'STD/FAX/Photocopy:',
    isViewOnly: false,
    isHide: false,
    fieldName: 'STD_OR_FAX_OR_PHOTOCOPY',
    options: [
      { key: 'Yes', value: true },
      { key: 'No', value: false },
    ],
  },
  {
    name: 'availability',
    type: 'select',
    label: 'Direct Telephone access to wards & ICU:',
    isViewOnly: false,
    isHide: false,
    fieldName: 'DIRECT_TELEPHONE_ACCESS_TO_WARDS_AND_ICU',
    options: [
      { key: 'Yes', value: true },
      { key: 'No', value: false },
    ],
  },
]
