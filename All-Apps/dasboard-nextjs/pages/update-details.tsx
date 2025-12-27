import { Formik, Form } from 'formik'
import styles from '../styles/updateDetails.module.css'
import CloudImage from '../public/cloud.png'
import { validationSchema } from '../constants/hospitalDetails'
import { FormSectionA } from '../components/FormSectionA'
import { FormSectionB } from '../components/FormSectionB'
import { FormSectionC } from '../components/FormSectionC'
import { FormSectionD } from '../components/FormSectionD'
import { FormSectionE } from '../components/FormSectionE'
import { FormSectionF } from '../components/FormSectionF'
import { FormSectionG } from '../components/FormSectionG'
import { FormSectionH } from '../components/FormSectionH'
import { FormSectionI } from '../components/FormSectionI'
import { FormSectionJ } from '../components/FormSectionJ'
import { FormSectionK } from '../components/FormSectionK'
import Button from '../components/Button'
import { useHospitalDetails } from '../hooks/useHospitalDetails'
import { getHospitalDetailsMapping } from '../utils/getHospitalDetailsMapping'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateHospitalDetails } from '../hooks/useUpdateHospitalDetails'
import Loader from '../components/Loader'
import { ErrorMessage } from '../components/ErrorMessage'
import { AxiosError } from 'axios'
import { useAuth } from '../providers/AuthProvider'
import { isUserAdmin } from '../utils/utils'
import { getUpdatedValues } from '../utils/extractObject'
import { HospitalDetails } from '../types/hospitalDetails.types'
import { useRouter } from 'next/router'

const UpdateDetails = () => {
  const router = useRouter()
  const { userRole } = useAuth()
  const queryClient = useQueryClient()
  function onSubmit(values: HospitalDetails) {
    const updatedValues = getUpdatedValues(values)
    mutate(updatedValues)
  }
  const { data: hospitalData, isLoading, isError, error } = useHospitalDetails()
  const {
    mutate,
    isLoading: isLoadingInUpdate,
    isError: isErrorInUpdate,
    error: updateError,
  } = useMutation({
    mutationFn: updateHospitalDetails,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['hospital-details'],
      }),
  })
  const initialData = hospitalData
    ? getHospitalDetailsMapping(hospitalData)
    : ({} as HospitalDetails)

  return (
    <>
      {isLoading || isLoadingInUpdate ? (
        <div className='m-auto loadingMsg'>
          <Loader />
        </div>
      ) : isError || isErrorInUpdate ? (
        error instanceof AxiosError ? (
          <ErrorMessage
            title='Oops! Something went wrong!'
            buttonContent='Refresh'
            imageUrl={CloudImage}
            btnHandler={() => router.reload()}
            message={error?.response?.data?.message}
          />
        ) : updateError instanceof AxiosError ? (
          <ErrorMessage
            title='Oops! Something went wrong!'
            buttonContent='Refresh'
            imageUrl={CloudImage}
            btnHandler={() => router.reload()}
            message={updateError?.response?.data?.message}
          />
        ) : null
      ) : (
        <div className={styles.container}>
          <Formik
            initialValues={initialData}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {(formik) => {
              return (
                <>
                  <h2 className={styles.heading}>Hospital Information Form</h2>
                  <Form>
                    <FormSectionA
                      userRole={userRole}
                      isShow={isUserAdmin(userRole)}
                    />
                    <FormSectionB initialValues={initialData} />
                    <FormSectionC />
                    <FormSectionD />
                    <FormSectionE initialValues={initialData} />
                    <FormSectionF />
                    <FormSectionG />
                    <FormSectionH />
                    <FormSectionI initialValues={initialData} />
                    <FormSectionJ />
                    {/* <FormSectionK /> */}
                    <div className={styles.btnContainer}>
                      <Button
                        className={styles.submitBtn}
                        content='Submit'
                        buttonType='submit'
                        isDisabled={!formik.isValid}
                      />
                      {!formik.isValid ? (
                        <p className={styles.errorMsg}>
                          Some validations failed, check for validation!!
                        </p>
                      ) : null}
                    </div>
                  </Form>
                </>
              )
            }}
          </Formik>
        </div>
      )}
    </>
  )
}

UpdateDetails.auth = true
UpdateDetails.title = 'Update Details'
export default UpdateDetails
