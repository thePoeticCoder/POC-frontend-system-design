import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import styles from '../styles/auth.module.css'
import forgotPasswordHandler from '../services/forgotPasswordhandler.service'
import LoginLogo from '../public/Login_Logo.png'
import SuccessInActionsModal from '../components/SuccessInActionsModal'

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>('')
  const [incorrectEmail, setIncorrectEmail] = useState(false)
  const [isMailSent, setIsMailSent] = useState(false)
  const [isEmailExist, setIsEmailExist] = useState(true)
  const [error, setError] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  useEffect(() => {
    if (isMailSent) {
      setIsModalVisible(true)
    }
  }, [isMailSent])

  const SentEmailToResetPassword = () => {
    setIncorrectEmail(false)
    setIsEmailExist(true)
    setIsModalVisible(false)
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setIncorrectEmail(true)
    } else {
      setError(false)
      forgotPasswordHandler(
        {
          email: email,
        },
        setIsMailSent,
        setError,
        setIsEmailExist
      )
    }
  }

  return (
    <div className={styles.body}>
      <div className={styles.logo}>
        <Image
          alt='login-logo'
          src={LoginLogo}
          placeholder='blur'
          width={497}
          height={122}
        />
      </div>

      <div className={styles.containerResetPage}>
        <h2 className={styles.heading}>Reset your password</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            SentEmailToResetPassword()
          }}
        >
          <Input
            setChangeHandler={setEmail}
            isError={setIncorrectEmail}
            contentType={'email'}
            type='text'
            placeholder='Enter email here'
            width='366px'
            required
          />
          {incorrectEmail && (
            <p className={styles.errorMessage}>Inavalid email Id</p>
          )}
          {!isEmailExist && (
            <p className={styles.errorMessage}>Email Id does not exist</p>
          )}
          {error && (
            <p className={styles.errorMessage}>Failed , Please try again </p>
          )}
          <div className={styles.resetSendButton}>
            <Button content='Send' className={styles.authButton} />
          </div>
        </form>
      </div>
      {isModalVisible && (
        <SuccessInActionsModal dataToDisplay='Mail sent successfully!' />
      )}
    </div>
  )
}

ForgotPassword.auth = false
ForgotPassword.title = 'Forgot Password'
export default ForgotPassword
