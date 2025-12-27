import React from 'react'
import styles from '../styles/paymentsPdf.module.css'

type PaymentPdfPropsType = {
  title: string
  paymentsData: {
    amount: number | undefined
    utr: string | null | undefined
    dateToShow: string
    timeToShow: string
  }
}

export const PaymentPdf = ({ paymentsData, title }: PaymentPdfPropsType) => {
  const { amount, utr, dateToShow, timeToShow } = paymentsData
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>{'Amount'}</td>
              <td>{amount}</td>
            </tr>
            <tr>
              <td>{'UTRN'}</td>
              <td>{utr}</td>
            </tr>
            <tr>
              <td>{'Date'}</td>
              <td>{dateToShow}</td>
            </tr>
            <tr>
              <td>{'Time'}</td>
              <td>{timeToShow}</td>
            </tr>
          </tbody>
        </table>
        {/* <p></p>
        <p>{`UTRN : ${utr}`}</p>
        <p>{`Date : ${dateToShow}`}</p>
        <p>{`Time : ${timeToShow}`}</p> */}
      </div>
    </div>
  )
}
