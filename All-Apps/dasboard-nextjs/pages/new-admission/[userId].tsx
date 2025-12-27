import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'
import Dropdown from '../../components/Dropdown'
import InitiateAdmission from '../../components/InitiateAdmission'
import { UserCardBody } from '../../components/UserCardBody'
import { UserCardFooter } from '../../components/UserCardFooter'
import { UserCardHeader } from '../../components/UserCardHeader'
import CloudImage from '../../public/cloud.png'
import UserCardSmall from '../../components/UserCardSmall'
import { useGetSingleUser } from '../../hooks/useGetSingleUser'
import styles from '../../styles/order.module.css'
import {
  getFamilyMembers,
  getFamilyPlans,
  isUserAllowedToMakeAnOrder,
} from '../../utils/utils'
import { MdOutlineArrowBack } from 'react-icons/md'
import { AxiosError } from 'axios'
import Loader from '../../components/Loader'
import { ErrorMessage } from '../../components/ErrorMessage'
import { UserDetailsType } from '../../types/getUserDetails.types'
import { FamilyDependantType } from '../../types/newAdmission.types'

const Order = () => {
  const [selectFamilyMember, setSelectFamilyMember] = useState({
    option: 'Select a family member',
    value: '',
  })
  const router = useRouter()

  const selectFamilyMemberHandler = (option: string, value: string) =>
    setSelectFamilyMember({ option, value })

  const selectUserCurrentPlanHandler = (option: string, value: string) =>
    setSelectCurrentPlan({ option, value })

  const {
    query: { userId },
  } = useRouter()

  const { data, isLoading, error } = useGetSingleUser(userId)
  const user = data ? data[0] : ({} as UserDetailsType)

  const [selectCurrentPlan, setSelectCurrentPlan] = useState(
    {
      option: user?.userPlanName,
      value: user?.userPlanName,
    } || {}
  )
  useEffect(() => {
    if (!data) return
    setSelectCurrentPlan({
      option: user?.userPlanName,
      value: user?.userPlanName,
    })
    setSelectFamilyMember({
      option: 'Self',
      value: user?.name,
    })
  }, [user?.userPlanName, data, user?.name])

  const userPlans = getFamilyPlans(user?.userPlanDetails)
  const currentPlan = user?.userPlanDetails?.find(
    (plan) => plan.userBasePlanName === selectCurrentPlan?.value
  )
  const familyMemberOptions = getFamilyMembers(user?.familyDependents)
  const familyMember = user.familyDependents
    ? user?.familyDependents?.find(
        (member) => member.dependentName === selectFamilyMember.value
      )
    : ({} as FamilyDependantType)
  const currentPlanData = currentPlan
    ? {
        userPlanCollectionId: currentPlan._id,
        userBasePlanName: currentPlan.userBasePlanName,
      }
    : {
        userPlanCollectionId: '',
        userBasePlanName: '',
      }

  const filteredFamilyMemberOptions = useMemo(
    () =>
      currentPlan
        ? [
            ...familyMemberOptions.filter((member) =>
              currentPlan.userFamilyDependents.includes(member.id)
            ),
            { option: 'Self', value: user.name },
          ]
        : [],
    [currentPlan, familyMemberOptions, user.name]
  )

  return (
    <>
      {isLoading ? (
        <div className='m-auto loadingMsg'>
          <Loader />
        </div>
      ) : error instanceof AxiosError ? (
        <ErrorMessage
          title='Oops! Something went wrong!'
          buttonContent='Go Back'
          imageUrl={CloudImage}
          btnHandler={() => router.push('/new-admission')}
          message={error?.response?.data?.message}
        />
      ) : !isUserAllowedToMakeAnOrder(user?.userPlanDetails) ? (
        <ErrorMessage
          title='Oops! Something went wrong!'
          buttonContent='Go back'
          imageUrl={CloudImage}
          btnHandler={() => router.push('/new-admission')}
          message='User is not allowed to make an order'
        />
      ) : (
        <div>
          <Link href='/new-admission'>
            <p className={styles.backLink}>
              <MdOutlineArrowBack />
            </p>
          </Link>
          <UserCardSmall>
            <UserCardHeader>
              <p className={styles.userName}>{user?.name}</p>
            </UserCardHeader>
            <UserCardBody>
              <p>{user?.emailId}</p>
              <p>{user?.phoneNo}</p>
            </UserCardBody>
            <UserCardFooter>
              {filteredFamilyMemberOptions.length > 1 ? (
                <Dropdown
                  options={filteredFamilyMemberOptions} // DONE: Move this data outside the component
                  searchFilter={selectFamilyMember}
                  selectOption={selectFamilyMemberHandler}
                  classNameForDropDown={styles.dropDownStyle}
                  classNameForOpenDropDown={styles.dropDownOpenStyle}
                  classNameForOption={styles.optionStyle}
                />
              ) : (
                <p className={styles.planDisplayName}>
                  {filteredFamilyMemberOptions[0]?.option}
                </p>
              )}
              {userPlans.length > 1 ? (
                <Dropdown
                  options={userPlans} // DONE: Move this data outside the component
                  searchFilter={selectCurrentPlan}
                  selectOption={selectUserCurrentPlanHandler}
                  classNameForDropDown={styles.dropDownStyle}
                  classNameForOpenDropDown={styles.dropDownOpenStyle}
                  classNameForOption={styles.optionStyle}
                />
              ) : (
                <p className={styles.planDisplayName}>{userPlans[0].option}</p>
              )}
            </UserCardFooter>
          </UserCardSmall>
          <InitiateAdmission
            userPlan={currentPlanData}
            familyMember={familyMember}
            user={user}
          />
        </div>
      )}
    </>
  )
}
Order.auth = true
Order.title = 'Admission'
export default Order
