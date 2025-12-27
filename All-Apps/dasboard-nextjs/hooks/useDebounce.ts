import { useState, useEffect } from 'react'
import { DebounceArgTypes } from '../types/debounceHook.types'

export const useDebounce = ({ searchKey, delay }: DebounceArgTypes) => {
  const [searchFilter, setSearchFilter] = useState('')

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearchFilter(searchKey.trim())
    }, delay)
    return () => clearTimeout(timerId)
  }, [searchKey, delay])

  return { searchFilter }
}
