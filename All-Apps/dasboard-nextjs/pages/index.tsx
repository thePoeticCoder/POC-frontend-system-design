import { useMemo, useState } from 'react'
import Accordion from '../components/Accordion'
import styles from '../styles/home.module.css'
import {
  DEBOUNCE_DELAY_TIME,
  openTicketsFiltersOptions,
  SET_SEARCH_FILTER_OPTION,
} from '../constants/constants'
import { Table } from '../components/Table'
import { AxiosError } from 'axios'
import Pagination from '../components/Pagination'
import { AccordionHeader } from '../components/AccordionHeader'
import Dropdown from '../components/Dropdown'
import SearchBar from '../components/SearchBar'
import { AccordionBody } from '../components/AccordionBody'
import { AccordionFooter } from '../components/AccordionFooter'
import { useTicketsStates } from '../providers/TicketsStatesProvider'
import Loader from '../components/Loader'
import { useCloseTickets, useDebounce, useOpenTickets } from '../hooks'
import { ErrorMessage } from '../components/ErrorMessage'
import { ReactChangeEvent } from '../types'
import { useRouter } from 'next/router'
import CloudImage from '../public/cloud.png'
import {
  openTicketsColumns,
  OpenTicketsColumnType,
} from '../columns/OpenTickets'
import {
  CloseTicketColumnType,
  closeTicketsColumns,
} from '../columns/CloseTickets'
import { calculateTotalPages } from '../utils/utils'

const Home = () => {
  const router = useRouter()
  const [isOpenOpenTicketsAccordion, setIsOpenOpenTicketsAccordion] =
    useState<boolean>(true)
  const [isOpenCloseTicketsAccordion, setIsOpenCloseTicketsAccordion] =
    useState<boolean>(false)
  const {
    openTicketsState,
    openTicketsDispatch,
    closeTicketsState,
    closeTicketsDispatch,
  } = useTicketsStates()
  const {
    searchOption: searchOptionForOpenTickets,
    searchKey: searchValueForOpenTickets,
    pageNo: pageNoForOpenTickets,
  } = openTicketsState
  const {
    pageNo: pageNoForCloseTickets,
    dateRange,
    searchKey: searchValueForCloseTickets,
    searchOption: searchOptionForCloseTickets,
  } = closeTicketsState

  const { searchFilter: searchFilterForOpenTickets } = useDebounce({
    searchKey: searchValueForOpenTickets,
    delay: DEBOUNCE_DELAY_TIME,
  })
  const { searchFilter: searchFilterForCloseTickets } = useDebounce({
    searchKey: searchValueForCloseTickets,
    delay: DEBOUNCE_DELAY_TIME,
  })

  //DONE: Pass the generic type here, refer: https://tanstack.com/table/v8/docs/guide/column-defs#column-helpers

  const {
    data: openTicketsData,
    isError: isErrorInOpenTicketsService,
    isLoading: isLoadingInOpenTicketsService,
    error: errorInOpenTicketsService,
  } = useOpenTickets({
    pageNoForOpenTickets,
    searchKeyForOpenTickets: searchFilterForOpenTickets,
    searchOptionForOpenTickets: searchOptionForOpenTickets.value,
  })
  const {
    data: closeTicketsData,
    isError: isErrorInCloseTicketsService,
    isLoading: isLoadingInCloseTicketsService,
  } = useCloseTickets({
    pageNoForCloseTickets,
    searchKeyForCloseTickets: searchFilterForCloseTickets,
    searchOptionForCloseTickets: searchOptionForCloseTickets.value,
    dateRange,
  })

  const memoizedOpenTicketsData = useMemo(() => {
    return openTicketsData?.orders ? openTicketsData?.orders : []
  }, [openTicketsData?.orders])

  const memoizedCloseTicketsData = useMemo(() => {
    return closeTicketsData?.orders ? closeTicketsData?.orders : []
  }, [closeTicketsData?.orders])

  const bodyPropsForOpenTickets = {
    columns: openTicketsColumns,
    rowData: memoizedOpenTicketsData,
  }

  const footerPropsForOpenTickets = {
    paginationData: openTicketsData?.paginationMetaData,
    pageNo: pageNoForOpenTickets,
    ticketsDispatch: openTicketsDispatch,
    totalPages: calculateTotalPages({
      totalOrdersCount: openTicketsData?.paginationMetaData?.totalOrdersCount,
      pageSize: openTicketsData?.paginationMetaData?.pageSize,
    }),
  }

  const footerPropsForCloseTickets = {
    pageNo: pageNoForCloseTickets,
    paginationData: closeTicketsData?.paginationMetaData,
    ticketsDispatch: closeTicketsDispatch,
    totalPages: calculateTotalPages({
      totalOrdersCount: closeTicketsData?.paginationMetaData?.totalOrdersCount,
      pageSize: closeTicketsData?.paginationMetaData?.pageSize,
    }),
  }

  const openTicketsSearchHandler = (e: ReactChangeEvent) => {
    openTicketsDispatch({ type: 'RESET_PAGE', payload: { pageNo: 1 } })
    openTicketsDispatch({
      type: 'SET_SEARCH_KEY',
      payload: { searchKey: e.target.value },
    })
  }

  const openTicketsSelectOption = (option: string, value: string) => {
    openTicketsDispatch({
      type: SET_SEARCH_FILTER_OPTION,
      payload: { option, value },
    })
  }

  return (
    <div className={styles.accordionContainer}>
      {isLoadingInOpenTicketsService || isLoadingInCloseTicketsService ? (
        <div className='m-auto loadingMsg'>
          <Loader />
        </div>
      ) : isErrorInOpenTicketsService || isErrorInCloseTicketsService ? (
        errorInOpenTicketsService instanceof AxiosError ? (
          <ErrorMessage
            title='Oops! Something went wrong!'
            buttonContent='Refresh'
            imageUrl={CloudImage}
            btnHandler={() => router.reload()}
            message={errorInOpenTicketsService?.response?.data?.message}
          />
        ) : errorInOpenTicketsService instanceof AxiosError ? (
          <ErrorMessage
            title='Oops! Something went wrong!'
            buttonContent='Refresh'
            imageUrl={CloudImage}
            btnHandler={() => router.reload()}
            message={errorInOpenTicketsService?.response?.data?.message}
          />
        ) : null
      ) : (
        <>
          <Accordion
            title='Open Tickets'
            isOpen={isOpenOpenTicketsAccordion}
            setIsOpen={setIsOpenOpenTicketsAccordion}
          >
            <AccordionHeader>
              <Dropdown
                searchFilter={searchOptionForOpenTickets}
                selectOption={openTicketsSelectOption}
                options={openTicketsFiltersOptions}
                classNameForDropDown='dropDownStyle'
                classNameForOpenDropDown='dropDownOpenStyle'
                classNameForOption='optionStyle'
              />
              <SearchBar
                searchContainer={styles.navSearchContainer}
                searchInput={styles.navSearchInput}
                searchIcon={styles.searchIcon}
                searchValue={searchValueForOpenTickets}
                searchHandler={openTicketsSearchHandler}
              />
            </AccordionHeader>
            <AccordionBody>
              <Table<OpenTicketsColumnType> {...bodyPropsForOpenTickets} />
            </AccordionBody>
            <AccordionFooter>
              <Pagination {...footerPropsForOpenTickets} />
            </AccordionFooter>
          </Accordion>
          <Accordion
            title='Closed Tickets'
            isOpen={isOpenCloseTicketsAccordion}
            setIsOpen={setIsOpenCloseTicketsAccordion}
          >
            <AccordionBody>
              <Table<CloseTicketColumnType>
                columns={closeTicketsColumns}
                rowData={memoizedCloseTicketsData}
              />
            </AccordionBody>
            <AccordionFooter>
              <Pagination {...footerPropsForCloseTickets} />
            </AccordionFooter>
          </Accordion>
        </>
      )}
    </div>
  )
}
Home.auth = true
Home.title = 'Home'
export default Home
