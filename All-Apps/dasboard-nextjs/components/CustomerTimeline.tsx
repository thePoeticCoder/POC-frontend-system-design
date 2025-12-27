import { useEffect, useReducer, useState } from 'react'
import { OrderStatus } from '../constants'
import styles from '../styles/customerTimeline.module.css'
import { CustomerTimelineProps } from '../types/customerTimeline.type'
import Accordion from './Accordion'
import CheckIcon from './icons/CheckIcon'

const initialState = {
  intimation: {
    orderReceived: true,
    orderApproved: false,
  },
  admission: {
    scanQR: false,
    securityDeposit: false,
  },
  discharge: {
    finalDocuments: false,
    benefitsClaimed: false,
  },
}

const reducer = (
  state: typeof initialState,
  action: { type: string | undefined }
) => {
  switch (action.type) {
    case OrderStatus.CLOSED:
      return {
        intimation: {
          orderReceived: true,
          orderApproved: true,
        },
        admission: {
          scanQR: true,
          securityDeposit: true,
        },
        discharge: {
          finalDocuments: true,
          benefitsClaimed: true,
        },
      }

    case OrderStatus.DISCHARGE_DOCUMENTS_RECEIVED:
      return {
        intimation: {
          orderReceived: true,
          orderApproved: true,
        },
        admission: {
          scanQR: true,
          securityDeposit: true,
        },
        discharge: {
          finalDocuments: true,
          benefitsClaimed: false,
        },
      }
    case OrderStatus.WAITING_FOR_DISCHARGE_DOCUMENTS:
      return {
        intimation: {
          orderReceived: true,
          orderApproved: true,
        },
        admission: {
          scanQR: true,
          securityDeposit: true,
        },
        discharge: {
          finalDocuments: false,
          benefitsClaimed: false,
        },
      }

    case OrderStatus.ADMISSION_DOCS_UPLOADED:
      return {
        intimation: {
          orderReceived: true,
          orderApproved: true,
        },
        admission: {
          scanQR: true,
          securityDeposit: false,
        },
        discharge: {
          finalDocuments: false,
          benefitsClaimed: false,
        },
      }

    case OrderStatus.WAITING_FOR_ADMISSION_DOCUMENTS:
      return {
        intimation: {
          orderReceived: true,
          orderApproved: true,
        },
        admission: {
          scanQR: false,
          securityDeposit: false,
        },
        discharge: {
          finalDocuments: false,
          benefitsClaimed: false,
        },
      }

    case OrderStatus.WAITING_FOR_INTIMATION_DOCUMENTS:
      return {
        intimation: {
          orderReceived: true,
          orderApproved: false,
        },
        admission: {
          scanQR: false,
          securityDeposit: false,
        },
        discharge: {
          finalDocuments: false,
          benefitsClaimed: false,
        },
      }
    default:
      return { ...state }
  }
}

const CustomerTimeline = ({ orderStatus }: CustomerTimelineProps) => {
  const [isIntimationOpen, setIsIntimationOpen] = useState(true)
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(true)
  const [isDischargeOpen, setIsDischargeOpen] = useState(true)

  const [customerTimelineState, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: orderStatus })
  }, [orderStatus])

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Customer Timeline</h2>

      <div className={styles.timelineContainer}>
        <div className={styles.timelineMajor}>
          <div className={styles.statusMajorContainer}>
            <div style={{ paddingTop: '2.2rem' }}>
              <CheckIcon width={15.5} height={15.5} />
            </div>
            <span className={styles.statusLine}></span>
          </div>
        </div>
        <Accordion
          title='Intimation'
          titleClassName={styles.title}
          isOpen={isIntimationOpen}
          setIsOpen={() => setIsIntimationOpen((prev) => !prev)}
          containerClassName={styles.accordionContainer}
        >
          <div className={styles.content}>
            <div className={styles.timelineMinorContainer}>
              <div className={styles.timelineMinor}>
                <div className={styles.statusMinorContainer}>
                  <CheckIcon />
                  <span className={styles.statusLineMinor}></span>
                </div>
              </div>
              <div className={styles.stateContentContainer}>
                <p className={styles.state}>Order Received</p>
                <p className={styles.stateDescription}>
                  We are reviewing it and will share an update soon
                </p>
              </div>
            </div>

            <div className={styles.timelineMinorContainer}>
              <div className={styles.statusMinorContainer}>
                <div className={styles.statusContainer}>
                  {customerTimelineState.intimation.orderApproved ? (
                    <CheckIcon />
                  ) : (
                    <span className={styles.statusMinor}>2</span>
                  )}
                </div>
              </div>
              <div>
                <div className={styles.stateContentContainer}>
                  <p className={styles.state}>Order Approved</p>
                  <p className={styles.stateDescription}>
                    Upload a selfie at the hospital to claim your benefits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Accordion>
      </div>

      <div className={styles.timelineContainer}>
        <div className={styles.timelineMajor}>
          <div className={styles.statusMajorContainer}>
            <span className={styles.statusLineSmall}></span>

            {customerTimelineState.admission.scanQR &&
            customerTimelineState.admission.securityDeposit ? (
              <CheckIcon width={17} height={17} />
            ) : (
              <span className={styles.statusMajor}>2</span>
            )}
            <span className={styles.statusLine}></span>
          </div>
        </div>
        <Accordion
          title='Admission'
          titleClassName={styles.title}
          isOpen={isAdmissionOpen}
          setIsOpen={() => setIsAdmissionOpen((prev) => !prev)}
          containerClassName={styles.accordionContainer}
        >
          <div className={styles.content}>
            <div className={styles.timelineMinorContainer}>
              <div className={styles.timelineMinor}>
                <div className={styles.statusMinorContainer}>
                  {customerTimelineState.admission.scanQR ? (
                    <CheckIcon />
                  ) : (
                    <span className={styles.statusMinor}>1</span>
                  )}
                  <span className={styles.statusLineMinor}></span>
                </div>
              </div>
              <div className={styles.stateContentContainer}>
                <p className={styles.state}>Scan QR Successful</p>
                <p className={styles.stateDescription}>
                  We are reviewing it and will share an update soon
                </p>
              </div>
            </div>

            <div className={styles.timelineMinorContainer}>
              <div className={styles.statusMinorContainer}>
                <div className={styles.statusContainer}>
                  {customerTimelineState.admission.securityDeposit ? (
                    <CheckIcon />
                  ) : (
                    <span className={styles.statusMinor}>2</span>
                  )}
                </div>
              </div>
              <div>
                <div className={styles.stateContentContainer}>
                  <p className={styles.state}>Security Deposit Transferred</p>
                  <p className={styles.stateDescription}>
                    Upload a selfie at the hospital to claim your benefits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Accordion>
      </div>

      <div className={styles.timelineContainer}>
        <div className={styles.timelineMajor}>
          <div className={styles.statusMajorContainer}>
            <span className={styles.statusLineSmall}></span>

            {customerTimelineState.discharge.finalDocuments &&
            customerTimelineState.discharge.benefitsClaimed ? (
              <CheckIcon width={17} height={17} />
            ) : (
              <span className={styles.statusMajor}>3</span>
            )}
          </div>
        </div>
        <Accordion
          title='Discharge'
          titleClassName={styles.title}
          isOpen={isDischargeOpen}
          setIsOpen={() => setIsDischargeOpen((prev) => !prev)}
          containerClassName={styles.accordionContainer}
        >
          <div className={styles.content}>
            <div className={styles.timelineMinorContainer}>
              <div className={styles.timelineMinor}>
                <div className={styles.statusMinorContainer}>
                  {customerTimelineState.discharge.finalDocuments ? (
                    <CheckIcon />
                  ) : (
                    <span className={styles.statusMinor}>1</span>
                  )}
                  <span className={styles.statusLineMinor}></span>
                </div>
              </div>
              <div className={styles.stateContentContainer}>
                <p className={styles.state}>Final Documents Received</p>
                <p className={styles.stateDescription}>
                  We are reviewing it and will share an update soon
                </p>
              </div>
            </div>

            <div className={styles.timelineMinorContainer}>
              <div className={styles.statusMinorContainer}>
                <div className={styles.statusContainer}>
                  {customerTimelineState.discharge.benefitsClaimed ? (
                    <CheckIcon />
                  ) : (
                    <span className={styles.statusMinor}>2</span>
                  )}
                </div>
              </div>
              <div>
                <div className={styles.stateContentContainer}>
                  <p className={styles.state}>Benefits claimed</p>
                  <p className={styles.stateDescription}>
                    Upload a selfie at the hospital to claim your benefits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  )
}

export default CustomerTimeline
