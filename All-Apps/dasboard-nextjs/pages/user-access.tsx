import React from 'react'
import { useState } from 'react'
import Button from '../components/Button'
import DeleteUserModal from '../components/DeleteUserModal'
import EditUserCard from '../components/EditUserCard'
import AddUserIcon from '../components/icons/AddUserIcon'
import ModifyUserIcon from '../components/icons/ModifyUserIcon'
import Input from '../components/Input'
import Loader from '../components/Loader'
import { fetchAllUserList, mapUserBody } from '../services/userAccess.service'
import styles from '../styles/userAccess.module.css'
import CloudImage from '../public/cloud.png'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import GenericDropdown from '../components/genericDropdown'
import { addUserOrAdmin } from '../services/userAccess.service'
import { deleteUserType } from '../types/userAccess.type'
import SuccessInActionsModal from '../components/SuccessInActionsModal'
import ErrorInActionsModal from '../components/ErrorsInActionsModal'
import {
  designationsOptions,
  roleOptions,
} from '../constants/UserAcess.Constant'
import { AxiosError } from 'axios'
import { ErrorMessage } from '../components/ErrorMessage'
import { useRouter } from 'next/router'

const UserAccess = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [role, setRole] = useState<string>('USER')
  const [designation, setDesignation] = useState<string>('Admin Head')
  const [phone, setPhone] = useState<string>('')
  const [selectedUser, setSelectedUser] = useState<deleteUserType>(
    {} as deleteUserType
  )
  const [inCorrectName, setInCorrectName] = useState<boolean>(false)
  const [inCorrectEmail, setInCorrectEmail] = useState<boolean>(false)
  const [inCorrectPhone, setInCorrectPhone] = useState<boolean>(false)
  const [emailAlreadyExist, setEmailAlreadyExist] = useState<boolean>(false)
  const [isDisable, setIsDisable] = useState<boolean>(false)
  const [isErrorInAddingUser, setIsErrorInAddingUser] = useState<boolean>(false)
  const [showDeleteModal, setSHowDeleteModal] = useState(false)
  const [isAdded, setIsAdded] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)
  const [isErrorInDelete, setIsErrorInDelete] = useState(false)
  const queryClient = useQueryClient()

  const roleOfLoggedInPerson = localStorage.getItem('role') || ''
  const hospitalId = localStorage.getItem('hospitalId') || ''

  const addUserHandler = () => {
    setEmailAlreadyExist(false)
    setIsAdded(false)
    setIsErrorInAddingUser(false)

    if (inCorrectEmail || inCorrectName || inCorrectPhone) {
    } else {
      const addUserBody = mapUserBody(
        name,
        email,
        phone,
        role,
        designation,
        hospitalId
      )
      addUserOrAdmin(addUserBody)
        .then(() => {
          setEmail('')
          setPhone('')
          setName('')
          setIsAdded(true)
          queryClient.invalidateQueries({ queryKey: ['users'] })
          setInCorrectEmail(false)
          setInCorrectName(false)
          setInCorrectPhone(false)
        })
        .catch((error) => {
          if (error?.response?.data?.statusCode === 409) {
            setEmailAlreadyExist(true)
          } else {
            setIsErrorInAddingUser(true)
            setIsAdded(false)
          }
        })
    }
  }

  const toggleModalDisplay = () => {
    setSHowDeleteModal((prev) => !prev)
    queryClient.invalidateQueries({ queryKey: ['users'] })
  }
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchAllUserList,
  })

  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    )
  }
  if (error)
    if (error instanceof AxiosError)
      return (
        <ErrorMessage
          title='Oops! Something went wrong!'
          buttonContent='Refresh'
          imageUrl={CloudImage}
          btnHandler={() => router.reload()}
          message={error?.response?.data?.message}
        />
      )

  return (
    <>
      {showDeleteModal && (
        <DeleteUserModal
          user={selectedUser}
          toggleModalDisplay={toggleModalDisplay}
          setIsDeleted={setIsDeleted}
          setIsErrorInDelete={setIsErrorInDelete}
        />
      )}
      {isErrorInDelete && <ErrorInActionsModal />}
      {isDeleted && (
        <SuccessInActionsModal dataToDisplay='User is successfully deleted!' />
      )}

      {isErrorInAddingUser && <ErrorInActionsModal />}
      {isAdded && (
        <SuccessInActionsModal dataToDisplay='User is successfully added!' />
      )}
      <div className={styles.container}>
        <div className={'page-title ' + styles.header}>
          <AddUserIcon color='#003032' height={50} width={50} />
          Add New User
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault()
            addUserHandler()
          }}
          className={styles.addUserContainer}
        >
          <div className={styles.fieldsContainer}>
            <div className={styles.inputNameContainer}>
              <label>
                <p className={styles.inputLabel}>Name</p>
              </label>
              <label>
                <p className={styles.inputLabel}>Email</p>
              </label>
              <label>
                <p className={styles.inputLabel}>Phone</p>
              </label>
              <label>
                <p className={styles.inputLabel}>Designation</p>
              </label>
              <label>
                <p className={styles.inputLabel}>Role</p>
              </label>
            </div>
            <div className={styles.inputValueContainer}>
              <div className={styles.inputBox}>
                <Input
                  setChangeHandler={setName}
                  isError={setInCorrectName}
                  contentType={'name'}
                  value={name}
                  type={'text'}
                  placeholder='Enter Name here'
                  width={'511px'}
                  required
                />
                {inCorrectName && (
                  <p className={styles.inCorrectNameWarning}>
                    Enter valid name
                  </p>
                )}
              </div>
              <div className={styles.inputBox}>
                <Input
                  setChangeHandler={setEmail}
                  isError={setInCorrectEmail}
                  contentType={'email'}
                  value={email}
                  type={'email'}
                  placeholder='Enter Email here'
                  width={'511px'}
                  isDisabled={false}
                  required={true}
                  autoComplete='off'
                />
                {inCorrectEmail && (
                  <p className={styles.inCorrectEmailWarning}>
                    Enter valid email
                  </p>
                )}
                {emailAlreadyExist && (
                  <p className={styles.inCorrectEmailWarning}>
                    Email exists already
                  </p>
                )}
              </div>
              <div className={styles.inputBox}>
                <Input
                  setChangeHandler={setPhone}
                  isError={setInCorrectPhone}
                  contentType={'phone'}
                  value={phone}
                  type={'text'}
                  placeholder='Enter Phone here'
                  width={'511px'}
                  isDisabled={false}
                  required={true}
                />
                {inCorrectPhone && (
                  <p className={styles.inCorrectPhoneWarning}>
                    Enter valid phone
                  </p>
                )}
              </div>
              <GenericDropdown
                setChangeHandler={setDesignation}
                width={'535px'}
                initialOption={designation}
                initialValue={designation}
                options={designationsOptions}
                fontSize={'12px'}
              />
              <GenericDropdown
                setChangeHandler={setRole}
                width={'535px'}
                initialOption={role}
                initialValue={role}
                options={roleOptions}
                fontSize={'12px'}
              />
            </div>
          </div>

          <div className={styles.submitBtnContainer}>
            <Button
              content='Submit'
              className={styles.userAccessSubmitButton}
              isDisabled={isDisable}
            />
          </div>
        </form>

        <div className={'page-title ' + styles.header}>
          <ModifyUserIcon height={50} width={50} />
          Modify Existing User
        </div>
        <div className={styles.userList}>
          {data &&
            data.length > 0 &&
            data.map((users) => (
              <EditUserCard
                key={crypto.randomUUID()}
                isEditAccess={roleOfLoggedInPerson === 'ADMIN'}
                userDetails={users}
                toggleModalDisplay={({ email, name }: deleteUserType) => {
                  setSelectedUser({ email, name })
                  toggleModalDisplay()
                }}
              />
            ))}
        </div>
      </div>
    </>
  )
}

UserAccess.auth = true
UserAccess.title = 'User Access'
export default UserAccess
