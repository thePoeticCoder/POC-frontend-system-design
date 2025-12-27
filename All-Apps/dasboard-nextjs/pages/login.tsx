import { useRouter } from 'next/router'
import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import styles from '../styles/auth.module.css'
import LoginHandler from '../services/login'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import Image from 'next/image'
import LoginLogo from '../public/Login_Logo.png'
import Link from 'next/link'
import { useAuth } from '../providers/AuthProvider'
const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isCorrectType, setIsCorrectType] = useState(false)
  const { setHospitalId, setHospitalAddress, setHospitalName } = useAuth()
  const [wrongPassword, setWrongPassword] = useState(false)
  const [doesUserExist, setDoesUserExist] = useState(false)
  const [inCorrectEmail, setInCorrectEmail] = useState(false)
  const handleSignIn = () => {
    LoginHandler(
      {
        email,
        password,
      },
      router,
      setHospitalId,
      setHospitalAddress,
      setHospitalName,
      setWrongPassword,
      setDoesUserExist
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
      <div className={styles.container}>
        <h2 className={styles.heading}>Login to continue</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            handleSignIn()
          }}
        >
          <div>
            <p className={styles.passwordBoxName}>Email Id</p>
            <Input
              setChangeHandler={setEmail}
              isError={setInCorrectEmail}
              contentType={'email'}
              type='text'
              placeholder='Enter email here'
              width='366px'
              required
            />
            {doesUserExist && (
              <p className={styles.errorMessage}>
                Sorry, we don't recognize the email or password
              </p>
            )}
          </div>

          <div className={styles.loginPasswordBox}>
            <p className={styles.passwordBoxName}>Password</p>
            <Input
              setChangeHandler={setPassword}
              isError={setIsCorrectType}
              contentType={'text'}
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder='Enter Password here'
              width='366px'
              required
            />
            {wrongPassword && (
              <p className={styles.errorMessage}>
                Sorry, we don't recognize the email or password
              </p>
            )}
            {isPasswordVisible ? (
              <AiOutlineEye
                className={styles.toggleEye}
                onClick={() => setIsPasswordVisible(false)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className={styles.toggleEye}
                onClick={() => setIsPasswordVisible(true)}
              />
            )}
          </div>
          <Link href='/forgot-password'>
            <span className={styles.forgotLink}>Forgot Password</span>
          </Link>
          <div className={styles.loginButton}>
            <Button content='Login' className={styles.authButton} />
          </div>
        </form>
      </div>
    </div>
  )
}
Login.auth = false
Login.title = 'Login'
export default Login
