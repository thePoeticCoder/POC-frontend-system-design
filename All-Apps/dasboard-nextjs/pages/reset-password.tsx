import { useRouter } from 'next/router'
import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import styles from '../styles/auth.module.css'
import resetPasswordHandler from '../services/resetPasswordHandler.service'
import LoginLogo from '../public/Login_Logo.png'
import Image from 'next/image'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import ErrorInActionsModal from '../components/ErrorsInActionsModal'

const ResetPassword = () => {
  const router = useRouter()
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [error, setError] = useState('')
  const [isPasswordWeak, setIsPasswordWeak] = useState(false)
  const [isResetPasswordFailed, setIsResetPasswordFailed] = useState(false)
  const [isPasswordVisible1, setIsPasswordVisible1] = useState(false)
  const [isCorrectType, setIsCorrectType] = useState(false)
  const [isPasswordVisible2, setIsPasswordVisible2] = useState(false)
  const queryToken = router.query.token

  const resetPassword = () => {
    resetPasswordHandler(
      {
        password: confirmPassword,
        token: queryToken,
      },
      router,
      setIsResetPasswordFailed
    )
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
      <div className={styles.resetPasswordContainer}>
        <h2 className={styles.heading}>Reset password to continue</h2>

        <form
          onSubmit={(event) => {
            event.preventDefault()
            setError('')
            const strongRegex = new RegExp(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
            )
            if (!strongRegex.test(password)) {
              setIsPasswordWeak(true)
            } else {
              setIsPasswordWeak(false)
              password === confirmPassword
                ? resetPassword()
                : setError('Not same')
            }
          }}
        >
          <p className={styles.passwordBoxName}>New Password</p>
          <div className={styles.resetPasswordBox}>
            <Input
              setChangeHandler={setPassword}
              isError={setIsCorrectType}
              contentType={'text'}
              type={isPasswordVisible2 ? 'text' : 'password'}
              placeholder='Enter Password'
              width='366px'
              required
            />

            {isPasswordVisible2 ? (
              <AiOutlineEye
                className={styles.toggleEyeForReset}
                onClick={() => setIsPasswordVisible2(false)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className={styles.toggleEyeForReset}
                onClick={() => setIsPasswordVisible2(true)}
              />
            )}
            {isPasswordWeak && (
              <p className={styles.errorMessage}>Weak Password</p>
            )}
          </div>
          <p className={styles.passwordBoxName}>Repeat Password</p>
          <div className={styles.resetPasswordBox}>
            <Input
              setChangeHandler={setConfirmPassword}
              isError={setIsCorrectType}
              contentType={'text'}
              type={isPasswordVisible1 ? 'text' : 'password'}
              placeholder='Confirm Password'
              width='366px'
              required
            />
            {isPasswordVisible1 ? (
              <AiOutlineEye
                className={styles.toggleEyeForReset}
                onClick={() => setIsPasswordVisible1(false)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className={styles.toggleEyeForReset}
                onClick={() => setIsPasswordVisible1(true)}
              />
            )}
            {error && (
              <p className={styles.errorMessage}>Passwords doesn't match</p>
            )}
            {isResetPasswordFailed && <ErrorInActionsModal />}
          </div>
          <div className={styles.loginButton}>
            <Button content='Save' className={styles.authButton} />
          </div>
        </form>
        <div className={styles.noteContainer}>
          <p className={styles.Note}>Note:</p>
          <p className={styles.checkPasswordNote}>
            Please use a combination of characters, capital letters and numbers
            to set a secure password
          </p>
        </div>
      </div>
    </div>
  )
}
ResetPassword.auth = false
ResetPassword.title = 'Reset Password'
export default ResetPassword
