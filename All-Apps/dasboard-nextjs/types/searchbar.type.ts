import { ReactChangeEvent } from './common.types'

type SearchBarType = {
  placeholder?: string
  searchHandler: (e: ReactChangeEvent) => void // DONE:ANY type fixes
  searchValue: string
  searchContainer: string
  searchInput: string
  searchIcon: string
}

export type { SearchBarType }
