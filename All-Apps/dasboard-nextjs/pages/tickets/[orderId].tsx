import { useState, useRef } from 'react'
import ClaimDetails from '../../components/ClaimDetails'
import DocumentsUpload from '../../components/DocumentsUpload'
import EditClaimDetailsModal from '../../components/EditClaimDetailsModal'
import PaymentDetailCard from '../../components/PaymentDetailCard'
import TicketProfileCard from '../../components/TicketProfileCard'
import TicketStatusCard from '../../components/TicketStatusCard'
import styles from '../../styles/tickets.module.css'
import CloudImage from '../../public/cloud.png'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { Payment, DetailsResponseType } from '../../types'
import { fetchOrderDetails } from '../../services/orders.service'
import { requiredDischargeDocuments } from '../../constants/constants'
import Loader from '../../components/Loader'
import { AxiosError } from 'axios'
import { ErrorMessage } from '../../components/ErrorMessage'
import { useAuth } from '../../providers/AuthProvider'
import Button from '../../components/Button'
import { verifyOrder } from '../../services/verifyOrderService'
import { uploadDocuments } from '../../services/uploadDischargeDocument.service'
import { UploadedFile } from '../../components/UploadedFile'
import {
  formatAdditionalDocuments,
  formatDocuments,
  getPublicUrl,
  rejectedDocsArray,
} from '../../utils/utils'
import UploadDocumentModal from '../../components/DocumentUploadModal'
import { AdditionalDocCard } from '../../components/AdditionalDocCard'
import CrossIcon from '../../components/icons/CrossIcon'
import {
  getAdditionalDocuments,
  getInvalidDocuments,
  getStatusesForAllDocuments,
  getStatusForIntimationDocuments,
  getUploadedDocuments,
  makeUploadedDocFormat,
  UploadedDocDisplayType,
} from '../../utils/orderDetailsUtils'
import { DocType } from '../../types/documentUploadModal.types'
import CustomerTimeline from '../../components/CustomerTimeline'
import { StatusBadge } from '../../components/StatusBadge'
import {
  finalTimeStamp,
  getDateTimeStamp,
  getNextDayTimeInSeconds,
} from '../../utils/getFormattedDate'
import { OrderDataPdf } from '../../components/OrderDataPdf'
import jsPDF from 'jspdf'

const TicketStatus = () => {
  const [shouldShowEditClaimModal, setShowEditClaimModal] =
    useState<boolean>(false)
  const [isShowOrderDataPdf, setIsShowOrderDataPdf] = useState<boolean>(false)
  const [isEditUploadedDocs, setIsEditUploadedDocs] = useState<boolean>(false)
  const [isInitiateDischargeModal, setIsInitiateDischargeModal] =
    useState<boolean>(false)

  const toggleShowOrderDataPdf = () => {
    setIsShowOrderDataPdf((prev) => !prev)
  }

  const toggleDischargeDocumentModal = () => {
    setIsInitiateDischargeModal((prev) => !prev)
  }

  const toggleEditUploadedDocsModal = () => {
    setIsEditUploadedDocs((prev) => !prev)
  }

  const {
    mutate: dischargeDocMutate,
    error: dischargeError,
    isLoading: isDischargeLoading,
  } = useMutation({
    mutationFn: uploadDocuments,
    onSuccess: () => {
      toggleDischargeDocumentModal()
      queryClient.invalidateQueries({
        queryKey: ['order-details', orderId, hospitalId],
      })
    },
  })

  const {
    mutate: intimationDocMutate,
    isLoading: isIntimationLoading,
    error: intimationError,
  } = useMutation({
    mutationFn: uploadDocuments,
    onSuccess: () => {
      toggleEditUploadedDocsModal()
      queryClient.invalidateQueries({
        queryKey: ['order-details', orderId, hospitalId],
      })
    },
  })

  let payments = [] as Payment[]
  const router = useRouter()
  const queryClient = useQueryClient()
  const { orderId } = router.query

  const { hospitalId } = useAuth()

  const {
    data: orderDetails,
    status,
    error,
  }: DetailsResponseType = useQuery({
    queryKey: ['order-details', orderId, hospitalId],
    queryFn: fetchOrderDetails,
  })
  const paymentPdfContainer = useRef<HTMLInputElement>(null)
  const doc = new jsPDF({
    format: 'a2',
    unit: 'px',
  })

  if (orderDetails) {
    const {
      securityDepositPayout,
      finalPayout,
      totalAmountRequestedByCustomer,
    } = orderDetails
    if (totalAmountRequestedByCustomer || totalAmountRequestedByCustomer === 0)
      payments.push({ totalAmountRequestedByCustomer })
    if (securityDepositPayout) payments.push(securityDepositPayout)
    if (finalPayout) payments.push(finalPayout)
  }

  const uploadedDocs = orderDetails
    ? getUploadedDocuments({
        intimationDocuments: orderDetails.intimationDocuments,
        dischargeDocuments: orderDetails.dischargeDocuments,
        intimationDocStatus: orderDetails.intimationDocumentStatus,
        dischargeDocStatus: orderDetails.dischargeDocumentStatus,
        isFinalPayoutDone: orderDetails?.finalPayout?.amount ? true : false,
      })
    : []

  const documentsToShow = makeUploadedDocFormat(uploadedDocs)

  const { mutate, error: verifyOrderError } = useMutation({
    mutationFn: verifyOrder,
    onSuccess: () =>
      queryClient.invalidateQueries(['order-details', orderId, hospitalId]),
  })

  const initiateAdmission = () => {
    mutate({ orderId, userId: orderDetails?.userCollectionId, hospitalId })
  }

  const invalidIntimationDocuments = formatDocuments(
    getInvalidDocuments(orderDetails?.intimationDocumentStatus)
  )
  const invalidDischargeDocuments = formatDocuments(
    getInvalidDocuments(orderDetails?.dischargeDocumentStatus)
  )

  const intimationAdditionalDocuments = getAdditionalDocuments(
    orderDetails?.intimationAdditionalComments
  )

  const dischargeAdditionalDocuments = getAdditionalDocuments(
    orderDetails?.dischargeAdditionalComments
  )

  const additionalDocs = !orderDetails?.totalAmountRequestedByCustomer
    ? [...intimationAdditionalDocuments]
    : !orderDetails?.finalPayout?.amount
    ? [...dischargeAdditionalDocuments]
    : []

  if (status === 'loading')
    return (
      <div className='m-auto loadingMsg'>
        <Loader />
      </div>
    )
  if (error)
    if (error instanceof AxiosError)
      return (
        <ErrorMessage
          title='Oops! Something went wrong!'
          buttonContent='Refresh'
          imageUrl={CloudImage}
          btnHandler={() => router.reload()}
          message={error?.response?.data?.message}
        />
      )

  const paymentContainerStyle = orderDetails?.finalPayout
    ? `${styles.paymentDetailsContainer} ${styles.flexBetween}`
    : `${styles.paymentDetailsContainer} ${styles.flexStart}`

  const addIntimationDocuments = (
    userId: string | string[] | undefined,
    intimationDocs: DocType[]
  ) => {
    const additionalDocPayload = {
      orderId,
      orderType: 'HOSPITAL_ADMISSION',
      userCollectionId: userId,
      orderFormData: {
        ipdOrder: {
          intimation: {
            intimationDocuments: [...intimationDocs],
            cashless: {
              cashlessHospitalId: hospitalId,
              isCashless: true,
              orderCreatedByHospital: true,
            },
          },
        },
      },
    }
    intimationDocMutate({ formData: additionalDocPayload, hospitalId })
  }

  const addDischargeDocuments = (
    userId: string | string[] | undefined,
    dischargeDocuments: DocType[]
  ) => {
    const initiateDischargePayload = {
      orderId,
      orderType: 'HOSPITAL_ADMISSION',
      userCollectionId: userId,
      orderFormData: {
        ipdOrder: {
          discharge: {
            dischargeDocuments: [...dischargeDocuments],
            cashless: {
              cashlessHospitalId: hospitalId,
              isCashless: true,
              orderCreatedByHospital: true,
            },
          },
        },
      },
    }
    dischargeDocMutate({ formData: initiateDischargePayload, hospitalId })
  }

  const downloadPdfHandler = () => {
    paymentPdfContainer.current
      ? doc.html(paymentPdfContainer.current, {
          callback(doc) {
            doc.save('Order data')
          },
        })
      : null
  }

  return (
    <>
      <div className={styles.container}>
        {isShowOrderDataPdf ? (
          <div className='modal-bg'>
            <div className={`modal-container ${styles.pdfModalContainer}`}>
              <div
                ref={paymentPdfContainer}
                className={styles.pdfDataContainer}
              >
                <OrderDataPdf orderDetails={orderDetails} />
              </div>
              <div onClick={toggleShowOrderDataPdf}>
                <CrossIcon
                  className={styles.closeIcon}
                  height={16}
                  width={16}
                  color='#F36F59'
                />
              </div>
              <Button
                content='Download'
                buttonType='button'
                isDisabled={false}
                className={styles.downloadBtn}
                handleClick={downloadPdfHandler}
              />
            </div>
          </div>
        ) : null}
        {shouldShowEditClaimModal ? (
          <EditClaimDetailsModal
            admissionDate={orderDetails?.admissionDate}
            dischargeDate={orderDetails?.dischargeDate}
            toggleModalDisplay={() => setShowEditClaimModal((prev) => !prev)}
          />
        ) : null}
        {isInitiateDischargeModal ? (
          <UploadDocumentModal
            documents={
              !orderDetails?.dischargeDocuments
                ? requiredDischargeDocuments
                : invalidDischargeDocuments
            }
            userId={orderDetails?.userCollectionId}
            submitHandler={addDischargeDocuments}
            toggleModalDisplay={toggleDischargeDocumentModal}
            title='Initiate Discharge'
            error={dischargeError}
            isLoading={isDischargeLoading}
          />
        ) : null}
        {isEditUploadedDocs ? (
          <UploadDocumentModal
            submitHandler={addIntimationDocuments}
            documents={invalidIntimationDocuments}
            userId={orderDetails?.userCollectionId}
            toggleModalDisplay={toggleEditUploadedDocsModal}
            title='Initiate Intimation'
            error={intimationError}
            isLoading={isIntimationLoading}
          />
        ) : null}
        <div>
          {orderDetails ? (
            <TicketProfileCard
              hubspotTicketId={orderDetails.hubspotTicketId}
              userDetails={orderDetails.masterUser}
              orderStatus={orderDetails.orderStatus}
            />
          ) : null}
          {orderDetails ? (
            <ClaimDetails
              status={orderDetails.orderStatus}
              initiationDate={orderDetails.createdAt}
              admissionDate={orderDetails.admissionDate}
              dischargeDate={orderDetails.dischargeDate}
              shouldShowEditClaimModal={() =>
                setShowEditClaimModal((prev) => !prev)
              }
            />
          ) : null}
          {payments.length ? (
            <div className={paymentContainerStyle}>
              {payments.map((payment, index) => (
                <PaymentDetailCard
                  key={crypto.randomUUID()}
                  payment={payment}
                  index={index}
                  isFinalPayout={orderDetails?.finalPayout ? true : false}
                />
              ))}
            </div>
          ) : null}
        </div>
        <div className={styles.rightContainer}>
          {orderDetails ? (
            <TicketStatusCard
              backgroundColor='#FF7056' // TODO: mycomment:varables helps if this color used somewhere else,-> Get colors from variables, rather than hardcoded
              status={orderDetails.orderStatus}
            />
          ) : null}
          {(orderDetails?.orderStatus === 'WAITING_FOR_INTIMATION_DOCUMENTS' ||
            orderDetails?.orderStatus === 'WAITING_FOR_DISCHARGE_DOCUMENTS') &&
          additionalDocs.length > 0 ? (
            <AdditionalDocCard additionalDocsArray={additionalDocs} />
          ) : null}
          <DocumentsUpload
            orderStatus={orderDetails?.orderStatus}
            toggleEditUploadedDocsModal={toggleEditUploadedDocsModal}
          >
            {documentsToShow?.map((doc) => (
              <div key={crypto.randomUUID()}>
                <p className={styles.docTitle}>{doc.title}</p>
                {doc.files.map((file) => (
                  <div
                    key={crypto.randomUUID()}
                    className={styles.pdfDocContainer}
                  >
                    <UploadedFile
                      key={crypto.randomUUID()}
                      fileName={file.fileName}
                      link={file.url}
                    />
                    {file.status === 'VALID' ? (
                      <StatusBadge
                        containerStyle={styles.badgeContainer}
                        badgeSpecificStyle={styles.approveBadgeStyle}
                        text='Approved'
                      />
                    ) : file.status === 'INVALID' ? (
                      <StatusBadge
                        containerStyle={styles.badgeContainer}
                        badgeSpecificStyle={styles.rejectedBadgeStyle}
                        text='Rejected'
                      />
                    ) : file.status === 'PENDING' ? (
                      <StatusBadge
                        containerStyle={styles.badgeContainer}
                        badgeSpecificStyle={styles.pendingBadgeStyle}
                        text='Pending'
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            ))}
          </DocumentsUpload>
          {orderDetails?.orderStatus === 'WAITING_FOR_ADMISSION_DOCUMENTS' ? (
            verifyOrderError instanceof AxiosError ? (
              <p className={styles.errorMsg}>{verifyOrderError.message}</p>
            ) : (
              <Button
                content='Initiate Admission'
                className={styles.submitBtn}
                handleClick={initiateAdmission}
              />
            )
          ) : null}
          {orderDetails?.orderStatus === 'WAITING_FOR_DISCHARGE_DOCUMENTS' ? (
            <Button
              content='Initiate Discharge'
              className={styles.submitBtn}
              handleClick={toggleDischargeDocumentModal}
            />
          ) : null}
          {orderDetails?.orderStatus === 'WAITING_FOR_PRIMARY_APPROVAL' ||
          orderDetails?.orderStatus === 'WAITING_FOR_INTIMATION_DOCUMENTS' ||
          orderDetails?.orderStatus === 'ADMISSION_DOCS_UPLOADED' ||
          orderDetails?.orderStatus === 'DISCHARGE_DOCUMENTS_RECEIVED' ? (
            <Button
              isDisabled={true}
              content='Under Process'
              className={styles.processBtn}
            />
          ) : null}
          {orderDetails?.orderStatus === 'FINAL_PAYOUT_ACCEPTED' ||
          orderDetails?.orderStatus === 'CLOSED' ? (
            <Button
              handleClick={toggleShowOrderDataPdf}
              content='Download'
              className={styles.submitBtn}
            />
          ) : null}
        </div>
      </div>
      <section className={styles.container}>
        <CustomerTimeline orderStatus={orderDetails?.orderStatus} />
      </section>
      {/* //DONE: Add a note to know that is part of phase 2 so that others wouldn't remove */}
    </>
  )
}

TicketStatus.auth = true
TicketStatus.title = 'Home'
export default TicketStatus
