import { createColumnHelper } from '@tanstack/react-table'
import { format } from 'date-fns'
import Link from 'next/link'
import styles from '../styles/accordion.module.css'
import { checkNullValue } from '../utils/utils'

export type CloseTicketColumnType = {
  hubspotTicketId: string
  userName: string
  admissionDate: string
  dischargeDate: string
  orderId: string
}

const columnHelper = createColumnHelper<CloseTicketColumnType>()

export const closeTicketsColumns = [
  columnHelper.accessor('hubspotTicketId', {
    header: () => 'Cust Id',
    enableSorting: false,
    cell: ({ getValue }) => checkNullValue(getValue()),
  }),
  columnHelper.accessor('userName', {
    header: () => 'Customer Name',
    enableSorting: false,
    cell: ({ getValue }) => checkNullValue(getValue()),
  }),
  columnHelper.accessor('admissionDate', {
    header: () => 'DOA',
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
