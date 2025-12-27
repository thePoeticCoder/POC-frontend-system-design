import SearchBar from '../../components/SearchBar'
import { DEBOUNCE_DELAY_TIME } from '../../constants/constants'
import { useState } from 'react'
import { useDebounce } from '../../hooks'
import styles from '../../styles/newAdmission.module.css'
import searchSymbol from '../../public/SearchSymbol.png'
import { useUsers } from '../../hooks/useUsers'
import { UserType } from '../../types/newAdmission.types'
import { ReactChangeEvent } from '../../types'
import Link from 'next/link'
import { AxiosError } from 'axios'
import { ErrorMessage } from '../../components/ErrorMessage'
import Loader from '../../components/Loader'
import { useAuth } from '../../providers/AuthProvider'
import CloudImage from '../../public/cloud.png'
import { UserFriendlyMessage } from '../../components/UserFriendlyMessage'

const NewAdmission = () => {
  const [searchUserText, setSearchUserText] = useState('')
  const { hospitalId } = useAuth()

  const { searchFilter } = useDebounce({
    searchKey: searchUserText,
    delay: DEBOUNCE_DELAY_TIME,
  })
  const userSearchHandler = (e: ReactChangeEvent) => {
    setSearchUserText(e.target.value)
  }

  const { data, isLoading, error } = useUsers(searchFilter, hospitalId)
  const partialUsers = data ? data.slice(0, 5) : []

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>New Admission</h2>
      <div className={styles.searchContainer}>
        <SearchBar
          searchContainer={styles.largeSearchContainer}
          searchInput={styles.largeSearchInput}
          searchIcon={styles.largeSearchIcon}
          searchValue={searchUserText}
          searchHandler={userSearchHandler}
          placeholder='Enter full phone number or start typing email:'
        />

        {searchUserText.length >= 5 ? (
          <div className={styles.searchResultContainer}>
            {isLoading ? (
              <div className='m-auto loadingMsg'>
                <Loader />
              </div>
            ) : error instanceof AxiosError ? (
              <UserFriendlyMessage
                imageUrl={CloudImage}
                title='Service not available'
                subTitle={error?.response?.data?.message}
              />
            ) : searchFilter.length >= 5 ? (
              data ? (
                data?.length > 0 ? (
                  <div>
                    {partialUsers?.map((user: UserType) => (
                      <Link
                        key={crypto.randomUUID()}
                        href={`/new-admission/${user?.userID}`}
                      >
                        <p className={styles.userName}>{user?.name}</p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p>No matches found</p>
                )
              ) : null
            ) : null}
          </div>
        ) : null}
      </div>
      {data ? (
        data?.length <= 0 && searchFilter.length >= 5 ? (
          <div className={styles.emptyMsgContainer}>
            <UserFriendlyMessage
              imageUrl={searchSymbol}
              title='No results found'
              subTitle='Try adjusting your search to find what you are searching for'
            />
          </div>
        ) : null
      ) : null}
    </div>
  )
}

NewAdmission.auth = true
NewAdmission.title = 'Admission'
export default NewAdmission
