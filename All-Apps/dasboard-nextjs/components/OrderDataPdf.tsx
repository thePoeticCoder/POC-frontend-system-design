import { format } from 'date-fns'
import React from 'react'
import styles from '../styles/orderDataPdf.module.css'
import { Details } from '../types'
import { dateFormat } from '../utils/getFormattedDate'
import { FormatDate, getNextOrderStatus, getPaymentTime } from '../utils/utils'

type OrderDataPdfPropsType = {
  orderDetails: Details | undefined
}

export const OrderDataPdf = ({ orderDetails }: OrderDataPdfPropsType) => {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>User Info</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No</th>
            </tr>
          </thead>
          <tr>
            <td>{orderDetails?.masterUser.name}</td>
            <td>{orderDetails?.masterUser.emailId}</td>
            <td>{orderDetails?.masterUser.phoneNo}</td>
          </tr>
        </table>
      </div>
      <div>
        <h3 className={styles.title}>Order Status</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{getNextOrderStatus(orderDetails?.orderStatus)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h3 className={styles.title}>Claim Details</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Claim initiated on</th>
              <th>Admission date</th>
              <th>Discharge date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {orderDetails?.createdAt
                  ? dateFormat(FormatDate(orderDetails?.createdAt))
                  : null}
              </td>
              <td>
                {orderDetails?.admissionDate
                  ? format(new Date(orderDetails?.admissionDate), 'dd MMM yyyy')
                  : null}
              </td>
              <td>
                {orderDetails?.dischargeDate
                  ? format(new Date(orderDetails?.dischargeDate), 'dd MMM yyyy')
                  : null}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h3 className={styles.title}>Payment details</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Estimate amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{orderDetails?.totalAmountRequestedByCustomer}</td>
            </tr>
          </tbody>
        </table>
        <h4 className={styles.title}>Security Deposite</h4>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>{'Amount'}</td>
              <td>{orderDetails?.securityDepositPayout.amount}</td>
            </tr>
            <tr>
              <td>{'UTRN'}</td>
              <td>{orderDetails?.securityDepositPayout.UTR}</td>
            </tr>
            <tr>
              <td>{'Date'}</td>
              <td>
                {orderDetails?.securityDepositPayout.UTRDate
                  ? format(
                      new Date(orderDetails?.securityDepositPayout.UTRDate),
                      'dd MMM yyyy'
                    )
                  : null}
              </td>
            </tr>
            <tr>
              <td>{'Time'}</td>
              <td>
                {getPaymentTime(orderDetails?.securityDepositPayout.UTRDate)}
              </td>
            </tr>
          </tbody>
        </table>
        <h4 className={styles.title}>Final Payout</h4>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>{'Amount'}</td>
              <td>{orderDetails?.finalPayout.amount}</td>
            </tr>
            <tr>
              <td>{'UTRN'}</td>
              <td>{orderDetails?.finalPayout.UTR}</td>
            </tr>
            <tr>
              <td>{'Date'}</td>
              <td>
                {orderDetails?.finalPayout.UTRDate
                  ? format(
                      new Date(orderDetails?.finalPayout.UTRDate),
                      'dd MMM yyyy'
                    )
                  : null}
              </td>
            </tr>
            <tr>
              <td>{'Time'}</td>
              <td>{getPaymentTime(orderDetails?.finalPayout.UTRDate)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
