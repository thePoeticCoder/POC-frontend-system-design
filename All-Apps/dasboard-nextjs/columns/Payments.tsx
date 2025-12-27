import { createColumnHelper } from '@tanstack/react-table'
import { format } from 'date-fns'
import Link from 'next/link'
import { PaymentsRowType } from '../types/payments.types'
import styles from '../styles/accordion.module.css'
import { checkNullValue } from '../utils/utils'

const columnHelper = createColumnHelper<PaymentsRowType>()

export const paymentsColumn = [
  columnHelper.accessor('hubspotContactId', {
    header: 'Cust Id',
    enableSorting: false,
    cell: ({ getValue }) => checkNullValue(getValue()),
  }),
  columnHelper.accessor('name', {
    header: 'Customer Name',
    enableSorting: false,
    cell: ({ getValue }) => checkNullValue(getValue()),
  }),
  columnHelper.accessor('claimId', {
    header: 'Claim Id',
    enableSorting: false,
    cell: ({ getValue }) => checkNullValue(getValue()),
  }),
  columnHelper.accessor('admissionDate', {
    header: 'DOA',
    cell: ({ getValue }: { getValue: () => string }) => {
      const date = new Date(getValue())
      return date ? format(date, 'dd-MMMM-yyyy') : '-'
    },
  }),
  columnHelper.accessor('dischargeDate', {
    header: 'DOD',
    enableSorting: false,
    cell: ({ getValue }: { getValue: () => string }) => {
      const date = new Date(getValue())
      return date ? format(date, 'dd-MMMM-yyyy') : '-'
    },
  }),
  columnHelper.accessor('estimateAmount', {
    header: 'Estimate Amount',
    enableSorting: false,
    cell: ({ getValue }) => checkNullValue(getValue()),
  }),
  columnHelper.accessor('securityDeposit', {
    header: 'Security Deposit',
    enableSorting: false,
    cell: ({ getValue }) => checkNullValue(getValue()),
  }),
  columnHelper.accessor('UTRN1', {
    header: 'UTRN1',
    enableSorting: false,
    cell: ({ getValue }) => checkNullValue(getValue()),
  }),
  columnHelper.accessor('dischargeSettlement', {
    header: 'Discharge Settlement',
    enableSorting: false,
    cell: ({ getValue }) => checkNullValue(getValue()),
  }),
  columnHelper.accessor('UTRN2', {
    header: 'UTRN2',
    enableSorting: false,
    cell: ({ getValue }) => checkNullValue(getValue()),
  }),
  columnHelper.accessor('orderId', {
    header: 'Details',
    cell: ({ getValue }) => {
      return (
        <Link href={`/tickets/${getValue()}`}>
          <a className={styles.link}>Click here</a>
        </Link>
      )
    },
  }),
]
