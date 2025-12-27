import React, { useState } from 'react'
import styles from '../styles/accordion.module.css'
import AscendingSort from './icons/AscendingSort'
import DescendingSort from './icons/DescendingSort'
import { nanoid } from 'nanoid'
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
  Header,
  Cell,
} from '@tanstack/react-table'
import { TableProps } from '../types/tableProps.types'

export const Table = <T extends unknown>(props: TableProps<T>) => {
  const { columns, rowData } = props
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'admissionDate', desc: true },
  ])

  const table = useReactTable({
    data: rowData,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })
  return (
    <>
      {rowData.length ? (
        <table className={styles.table}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr className={styles.tableHeadRow} key={nanoid()}>
                {headerGroup.headers.map((header: Header<T, unknown>) => {
                  return (
                    <th
                      key={nanoid()}
                      {...{
                        className:
                          header.column.id === 'admissionDate' ||
                          header.column.id === 'orderStatus'
                            ? styles.sortableHeading
                            : '',
                        onClick: header?.column?.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.id === 'admissionDate' ||
                      header.column.id === 'orderStatus' ? (
                        header.column.getNextSortingOrder() === 'desc' ? (
                          <AscendingSort
                            height={12}
                            width={10}
                            color='#F9CD63'
                          />
                        ) : header?.column?.getNextSortingOrder() === 'asc' ? (
                          ''
                        ) : (
                          <DescendingSort
                            height={12}
                            width={10}
                            color='#F9CD63'
                          />
                        )
                      ) : (
                        ''
                      )}
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody className={styles.tableBody}>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={nanoid()} className={styles.tableBodyRow}>
                  {row.getVisibleCells().map((cell: Cell<T, unknown>) => {
                    return (
                      <td
                        className={
                          cell.column.id === 'userName' ||
                          cell.column.id === 'name' ||
                          cell.column.id === 'orderStatus'
                            ? 'bold'
                            : ''
                        }
                        key={nanoid()}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <p className='emptyMsg'>No data available.</p>
      )}
    </>
  )
}
