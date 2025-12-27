import { ColumnDef } from '@tanstack/react-table'

export type ColumnType = {
  header: string
  enableSorting: boolean
  accessorKey: string
}

export type TableProps<ColType> = {
  columns: ColumnDef<ColType, any>[]
  rowData: ColType[]
}
