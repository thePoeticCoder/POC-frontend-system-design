import { format } from 'date-fns'
import React from 'react'
import { closeTicketsFiltersOptions } from '../constants'
import styles from '../styles/filter.module.css'
import { FilterPropType } from '../types/filterProps.types'
import DateRangePicker from './DateRangePicker'
import Dropdown from './Dropdown'
import SearchBar from './SearchBar'
import { useTicketsStates } from '../providers/TicketsStatesProvider'
import CalendarIcon from './icons/CalendarIcon'
import { ReactChangeEvent } from '../types'
import {
  SET_SEARCH_FILTER_OPTION,
  SET_SEARCH_KEY,
} from '../constants/constants'

export const Filter = ({
  isDateRangePickerShow,
  setIsDateRangePickerShow,
}: FilterPropType) => {
  const { closeTicketsState, closeTicketsDispatch } = useTicketsStates()
  const { dateRange, searchKey, searchOption } = closeTicketsState
  const closeTicketsSearchHandler = (e: ReactChangeEvent) => {
    closeTicketsDispatch({ type: 'RESET_PAGE', payload: { pageNo: 1 } })
    closeTicketsDispatch({
      type: SET_SEARCH_KEY,
      payload: { searchKey: e.target.value },
    })
  }

  const closeTicketsSelectOption = (option: string, value: string) => {
    closeTicketsDispatch({
      type: SET_SEARCH_FILTER_OPTION,
      payload: { option, value },
    })
  }

  return (
    <div className={styles.container}>
      <div>
        <button
          onClick={() => setIsDateRangePickerShow((prev: boolean) => !prev)}
          className={styles.datePickerContainerBtn}
        >
          <CalendarIcon width={14} height={16} color='#FFFFFF' />
          {dateRange.from && dateRange.to ? (
            <p className={styles.datesContainer}>
              <span>{format(new Date(dateRange?.from), ' d')}</span>
              <span>{format(new Date(dateRange?.from), ' LLLL')}</span> to
              <span>{format(new Date(dateRange?.to), ' d')}</span>
              <span>{format(new Date(dateRange?.to), ' LLLL')}</span>
            </p>
          ) : (
            <p>Select Date</p>
          )}
        </button>
        {isDateRangePickerShow ? (
          <DateRangePicker
            toggleDisplay={setIsDateRangePickerShow}
            dateRange={dateRange}
            ticketsDispatch={closeTicketsDispatch} // TODO: Review
          />
        ) : null}
      </div>
      <div className={styles.searchFilterContainer}>
        <Dropdown
          searchFilter={searchOption}
          selectOption={closeTicketsSelectOption}
          options={closeTicketsFiltersOptions}
          classNameForDropDown={styles.dropDownStyle}
          classNameForOpenDropDown={styles.dropDownOpenStyle}
          classNameForOption={styles.optionStyle}
        />
        <SearchBar
          searchContainer={styles.navSearchContainer}
          searchInput={styles.navSearchInput}
          searchIcon={styles.searchIcon}
          searchValue={searchKey}
          searchHandler={closeTicketsSearchHandler}
        />
      </div>
    </div>
  )
}
