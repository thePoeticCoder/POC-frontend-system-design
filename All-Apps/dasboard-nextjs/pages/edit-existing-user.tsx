import React, { useEffect } from 'react'
import { useState } from 'react'
import Button from '../components/Button'
import AddUserIcon from '../components/icons/AddUserIcon'
import Input from '../components/Input'
import { editExistingUser, mapUserBody } from '../services/userAccess.service'
import styles from '../styles/editExistingUser.module.css'
import GenericDropdown from '../components/genericDropdown'
import { useRouter } from 'next/router'
import { useQueryClient } from '@tanstack/react-query'
import ErrorInActionsModal from '../components/ErrorsInActionsModal'
import SuccessInActionsModal from '../components/SuccessInActionsModal'
import {
  designationsOptions,
  roleOptions,
} from '../constants/UserAcess.Constant'
const EditExistingUser = () => {
  const router = useRouter()
  const [isErrorInEdit, setIsErrorInEdit] = useState<boolean>(false)
  const [inCorrectPhone, setInCorrectPhone] = useState<boolean>(false)
  const [inCorrectName, setInCorrectName] = useState<boolean>(false)
  const [inCorrectEmail, setInCorrectEmail] = useState<boolean>(false)

  const [email, setEmail] = useState<any>('')
  const [name, setName] = useState<any>('')
  const [role, setRole] = useState<any>('USER')
  const [designation, setDesignation] = useState<any>('Admin Head')
  const [phone, setPhone] = useState<any>('')
  const [isEdited, setIsEdited] = useState(false)
  const hospitalId = localStorage.getItem('hospitalId') || ''
  useEffect(() => {
    let { currentName, email, currentRole, currentPhone, currentDesignation } =
      router.query
    setName(currentName)
    setEmail(email)
    setPhone(currentPhone)
    setRole(currentRole)
    setDesignation(currentDesignation)
  }, [router.query])

  const queryClient = useQueryClient()

  const editUserHandler = () => {
    setInCorrectPhone(false)

    if (inCorrectEmail || inCorrectName || inCorrectPhone) {
    } else {
      const editUserBody = mapUserBody(
        name,
        email,
        phone,
        role,
        designation,
        hospitalId
      )
      setIsEdited(false)
      setIsErrorInEdit(false)
      editExistingUser(editUserBody)
        .then((result) => {
          setName('')
          setPhone('')
          setIsErrorInEdit(false)
          setIsEdited(true)

          queryClient.invalidateQueries({ queryKey: ['users'] })
        })
        .catch((error) => {
          if (error?.response?.data?.statusCode === 404) {
          } else {
            setIsErrorInEdit(true)
            setIsEdited(false)
          }
        })
    }
  }

  return (
    <>
      {isErrorInEdit && <ErrorInActionsModal />}
      {isEdited && (
        <SuccessInActionsModal
          dataToDisplay='User updated successfully!'
          reRoute='/user-access'
        />
      )}
      <div className={styles.container}>
        <div className={'page-title ' + styles.header}>
          <AddUserIcon color='#003032' height={50} width={50} />
          Edit Existing User
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            editUserHandler()
          }}
          className={styles.editUserContainer}
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
              <div>
                <div className={styles.inputBox}>
                  <Input
                    setChangeHandler={setName}
                    isError={setInCorrectName}
                    contentType={'name'}
                    type={'text'}
                    placeholder='Enter Name here'
                    width={'511px'}
                    value={name}
                    required
                  />
                  {inCorrectName && (
                    <p className={styles.inCorrectNameWarning}>
                      Enter valid name
                    </p>
                  )}
                </div>
              </div>

              <div className={styles.inputBox}>
                <Input
                  setChangeHandler={setEmail}
                  isError={setInCorrectEmail}
                  contentType={'email'}
                  type={'email'}
                  placeholder='Enter Email here'
                  width={'511px'}
                  isDisabled={true}
                  value={email}
                  required
                />
                <p className={styles.emailCantChangeText}>
                  Once submitted the email ID can not be changed.
                </p>
              </div>
              <div className={styles.inputBox}>
                <Input
                  setChangeHandler={setPhone}
                  isError={setInCorrectPhone}
                  contentType={'phone'}
                  type={'text'}
                  placeholder='Enter Phone here'
                  width={'511px'}
                  value={phone}
                  required
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
            />
          </div>
        </form>
      </div>
    </>
  )
}

EditExistingUser.auth = true
EditExistingUser.title = 'Edit User'
export default EditExistingUser
