import * as Yup from 'yup'
import {
  bankDetails,
  careUnitCount,
  detailsToBedStrength,
  hospitalBasicDetailsValidations,
  hospitalContactDetails,
  hospitalRegistrationDetailsValidations,
  hospitalStaffing,
  qualityParameters,
} from '../utils/hospitalFormValidations'

export const validationSchema = Yup.object().shape({
  ...hospitalBasicDetailsValidations,
  ...hospitalRegistrationDetailsValidations,
  ...hospitalStaffing,
  ...qualityParameters,
  ...hospitalContactDetails,
  ...detailsToBedStrength,
  ...careUnitCount,
  ...bankDetails,
})
