import { createColumnHelper } from '@tanstack/react-table'
import { AxiosError } from 'axios'
import { useState, useReducer, useMemo } from 'react'
import Dropdown from '../components/Dropdown'
import Loader from '../components/Loader'
import Pagination from '../components/Pagination'
import PaymentModal from '../components/PaymentModal'
import PaymentStatCard from '../components/PaymentStatCard'
import SearchBar from '../components/SearchBar'
import { Table } from '../components/Table'
import {
  DEBOUNCE_DELAY_TIME,
  paymentsFiltersOptions,
  SET_SEARCH_FILTER_OPTION,
} from '../constants/constants'
import { useDebounce, usePaymentsQuery } from '../hooks/index'
import { paymentsInitialState, paymentsTableReducer } from '../reducers/index'
import styles from '../styles/trackPayment.module.css'
import {
  calculateTotalPages,
  calculateTotalValueProcessed,
  makePaymentsDataToShow,
} from '../utils/utils'
import { ErrorMessage } from '../components/ErrorMessage'
import { ReactChangeEvent } from '../types'
import { PaymentResponseType, PaymentsRowType } from '../types/payments.types'

type PaymentRowType = {
  orderId: string
  hubspotContactId: string
  securityDeposit: number
  UTRN1: string
  dischargeSettlement: number
  UTRN2: string
  name: string
  claimId: string
  admissionDate: string
  dischargeDate: string
  estimateAmount: number
}
import { useRouter } from 'next/router'
import CloudImage from '../public/cloud.png'
import { paymentsColumn } from '../columns/Payments'

const TrackPayment = () => {
  const router = useRouter()
  const [showDownloadModal, setShowDownloadModal] = useState(false)
  const toggleModalDisplay = () => {
    setShowDownloadModal((prev) => !prev)
  }

  const [paymentsState, paymentsDispatch] = useReducer(
    paymentsTableReducer,
    paymentsInitialState
  )
  const { pageNo, searchKey, searchOption } = paymentsState
  const { searchFilter } = useDebounce({
    searchKey,
    delay: DEBOUNCE_DELAY_TIME,
  })
  const {
    data: apiData,
    isError,
    isLoading,
    error,
  } = usePaymentsQuery({
    searchOption: searchOption.value,
    searchFilter,
    newPage: pageNo,
  })
  const payments = apiData ? apiData[0] : ({} as PaymentResponseType)
  const paymentsData = payments.paymentsData
  const rowData = useMemo(
    () => (paymentsData ? paymentsData : []),
    [paymentsData]
  )

  if (isError) {
    if (error instanceof AxiosError)
      return (
        <p className='m-auto errorMsg'>
          <ErrorMessage
            title='Oops! Something went wrong!'
            buttonContent='Refresh'
            imageUrl={CloudImage}
            btnHandler={() => router.reload()}
            message={error?.response?.data?.message}
          />
        </p>
      )
  }
  if (isLoading) {
    return (
      <div className='m-auto loadingMsg'>
        <Loader />
      </div>
    )
  }

  const paymentsSearchHandler = (e: ReactChangeEvent) => {
    paymentsDispatch({ type: 'RESET_PAGE', payload: { pageNo: 1 } })
    paymentsDispatch({
      type: 'SET_SEARCH_KEY',
      payload: { searchKey: e.target.value },
    })
  }

  const paymentsFilterOption = (option: string, value: string) => {
    paymentsDispatch({
      type: SET_SEARCH_FILTER_OPTION,
      payload: { option, value },
    })
  }

  return (
    <div className={styles.container}>
      {showDownloadModal ? (
        <PaymentModal toggleModalDisplay={toggleModalDisplay} />
      ) : null}
      <div className='page-title'>Track payment</div>
      <div className={styles.statsContainer}>
        <PaymentStatCard
          title='Admission Completed'
          value={payments.paymentsMetaData[0].admissionCompleted}
        />
        <PaymentStatCard
          title='Value Processed'
          value={calculateTotalValueProcessed(payments.paymentsData)}
        />
      </div>
      <div className={styles.paymentFilterContainer}>
        <div className='page-title'>Track payment</div>
        <div className={styles.filters}>
          <Dropdown
            searchFilter={searchOption}
            selectOption={paymentsFilterOption}
            options={paymentsFiltersOptions}
            classNameForDropDown='dropDownStyle'
            classNameForOpenDropDown='dropDownOpenStyle'
            classNameForOption='optionStyle'
          />
          <SearchBar
            searchContainer={styles.navSearchContainer}
            searchInput={styles.navSearchInput}
            searchIcon={styles.searchIcon}
            searchValue={searchKey}
            searchHandler={paymentsSearchHandler}
          />
        </div>
      </div>
      {rowData.length ? (
        <>
          <Table<PaymentsRowType>
            rowData={makePaymentsDataToShow(rowData)}
            columns={paymentsColumn}
          />
          <Pagination
            pageNo={pageNo}
            paginationData={payments.paginationMetaData[0]}
            ticketsDispatch={paymentsDispatch}
            totalPages={calculateTotalPages({
              totalOrdersCount:
                payments.paginationMetaData[0].admissionCompleted,
              pageSize: payments.paginationMetaData[0].pageSize,
            })}
          />
        </>
      ) : (
        <p className='emptyMsg'>No data available.</p>
      )}
    </div>
  )
}

TrackPayment.roles = ['ADMIN', 'USER']
TrackPayment.auth = true
TrackPayment.title = 'Payments'
export default TrackPayment
