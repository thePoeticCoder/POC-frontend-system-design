import { isUserAdmin } from '../utils/utils'

export const getSectionABasicInfo = (userRole: string) => {
  const sectionABasicInfo = [
    {
      name: 'hospitalBasicDetails.hospitalName',
      type: 'text',
      label: 'Hospital Name:',
      isEditable: false,
      isHide: false,
      // isEditable: isUserAdmin(userRole),  // TODO: Block by rishabh
      // isHide: !isUserAdmin(userRole),
    },
    {
      name: 'hospitalBasicDetails.address',
      type: 'text',
      label: 'Address:',
      isEditable: false,
      // isEditable: isUserAdmin(userRole), // TODO: Block by rishabh
      isHide: false,
    },
    {
      name: 'hospitalBasicDetails.landmark',
      type: 'text',
      label: 'Landmark:',
      isEditable: false,
      // isEditable: isUserAdmin(userRole), // TODO: Block by rishabh
      isHide: false,
    },
  ]
  return sectionABasicInfo
}

export const sectionAFormData = [
  {
    name: 'hospitalBasicDetails.city',
    type: 'text',
    label: 'City:',
    isViewOnly: false,
    isHide: false,
  },
  {
    name: 'hospitalBasicDetails.state',
    type: 'select',
    label: 'State:',
    isViewOnly: false,
    isHide: false,
    options: [
      { key: 'Karnataka', value: 'Karnataka' },
      { key: 'Mumbai', value: 'Mumbai' },
      { key: 'Bangalore', value: 'Bangalore' },
      { key: 'Delhi', value: 'Delhi' },
      { key: 'Noida', value: 'Noida' },
      { key: 'Gurgaon', value: 'Gurgaon' },
    ],
  },
  {
    name: 'hospitalBasicDetails.pincode',
    type: 'number',
    label: 'Pincode:',
    isViewOnly: false,
    isHide: false,
  },
  {
    name: 'hospitalBasicDetails.phoneNo',
    type: 'text',
    label: 'Phone no:',
    isViewOnly: false,
    isHide: false,
  },
  {
    name: 'hospitalBasicDetails.website',
    type: 'text',
    label: 'Website:',
    isViewOnly: false,
    isHide: false,
  },
  {
    name: 'hospitalBasicDetails.email',
    type: 'email',
    label: 'Email ID:',
    isViewOnly: false,
    isHide: false,
  },
  {
    name: 'hospitalBasicDetails.idGoogleLink',
    type: 'text',
    label: 'Google Link:',
    isViewOnly: false,
    isHide: false,
  },
]
