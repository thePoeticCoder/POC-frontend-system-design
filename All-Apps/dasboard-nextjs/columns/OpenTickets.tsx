import { createColumnHelper } from '@tanstack/react-table'
import { format } from 'date-fns'
import Link from 'next/link'
import styles from '../styles/accordion.module.css'
import { checkNullValue } from '../utils/utils'

export type OpenTicketsColumnType = {
  hubspotTicketId: string
  userName: string
  admissionDate: string
  dischargeDate: string
  orderStatus: string
  orderId: string
}

const columnHelper = createColumnHelper<OpenTicketsColumnType>()

export const openTicketsColumns = [
  columnHelper.accessor('hubspotTicketId', {
    header: 'Kenko Id',
    enableSorting: false,
    cell: ({ getValue }) => (getValue() === null ? '-' : getValue()),
  }),
  columnHelper.accessor('userName', {
    header: 'Customer Name',
    cell: ({ getValue }) => checkNullValue(getValue()),
    enableSorting: false,
  }),
  columnHelper.accessor('admissionDate', {
    header: 'Hospital Adm Date',
    cell: ({ getValue }: { getValue: () => string }) => {
      const date = new Date(getValue())
      return date ? format(date, 'dd-MMMM-yyyy') : '-'
    },
  }),
  columnHelper.accessor('dischargeDate', {
    header: 'Date of Discharge',
    enableSorting: false,
    cell: ({ getValue }: { getValue: () => string }) => {
      const date = new Date(getValue())
      return date ? format(date, 'dd-MMMM-yyyy') : '-'
    },
  }),
  columnHelper.accessor('orderStatus', {
    header: 'Status',
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
